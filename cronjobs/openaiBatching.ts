import prisma from "../prisma/client";
import { OPENAI_BATCH_SIZE, OPENAI_MAX_NUMBER_OF_TOKENS_PER_BATCH_FILE } from "../constants";
import { encoding_for_model } from 'tiktoken';
import { fs } from 'memfs';
import { v4 as uuidv4 } from 'uuid';
const encoding = encoding_for_model('gpt-4o');
import axios from 'axios';
import FormData from 'form-data';
import assert from "assert";
import { logError } from "../logger";
import { Prisma } from "../generated/prisma";
function getNumberOfTokensForGPT4o(prompt: string): number {
    return encoding.encode(prompt).length;
}

export async function processOpenaiBatching(): Promise<void> {

    // 1) we make query to openai to create a file.
    await prisma.$transaction(async (tx) => {

        // we lock so that no other cron will interfere with this.
        await tx.$queryRawUnsafe("SELECT id FROM openai_batch_tasks WHERE status = 'pending' AND openai_file_id IS NULL FOR UPDATE");

        let batchTasks = await tx.openai_batch_tasks.findMany({
            where: {
                status: "pending",
                openai_file_id: null,
            },
            take: OPENAI_BATCH_SIZE,
        });

        if (batchTasks.length === 0) {
            return;
        }

        const originalBaseUrl = batchTasks[0].original_base_url;
        batchTasks = batchTasks.filter(batchTask => batchTask.original_base_url === originalBaseUrl);

        // we need to transform the batchTask JSON to be what is expected from the API
        batchTasks = batchTasks.map(batchTask => {
            if ((batchTask.json_data as Prisma.JsonObject)["model"] === null) {
                throw new Error("Model is null. Should never come here..");
            }
            if ((batchTask.json_data as Prisma.JsonObject)["input"] === null) {
                throw new Error("Input is null. Should never come here..");
            }
            let json_data = {
                custom_id: batchTask.custom_id,
                method: "POST",
                url: "/v1/chat/completions",
                body: {
                    ...(batchTask.json_data as Prisma.JsonObject),
                    messages: (batchTask.json_data as Prisma.JsonObject)["input"]
                }
            };
            return {
                ...batchTask,
                json_data
            }
        });

        let totalNumberOfTokens = 0;
        let acceptedBatchTasks: typeof batchTasks = [];

        for (const batchTask of batchTasks) {
            const jsonData = batchTask.json_data;
            let numberOfTokens = getNumberOfTokensForGPT4o(JSON.stringify(jsonData));
            if (totalNumberOfTokens + numberOfTokens <= OPENAI_MAX_NUMBER_OF_TOKENS_PER_BATCH_FILE) {
                acceptedBatchTasks.push(batchTask);
                totalNumberOfTokens += numberOfTokens;
            } else {
                break;
            }
        }

        if (acceptedBatchTasks.length === 0) {
            return;
        }

        // 2) we create a temporary file in memory.
        let randomId = uuidv4();
        try {
            let content = "";
            for (const batchTask of acceptedBatchTasks) {
                content += JSON.stringify(batchTask.json_data) + "\n";
            }
            fs.writeFileSync(`/${randomId}.jsonl`, content);

            // 3) make API call to upload file
            const url = originalBaseUrl + "/v1/files";

            const formData = new FormData();
            formData.append('purpose', 'batch');
            formData.append('file', fs.createReadStream(`/${randomId}.jsonl`));

            const response = await axios.post(url, formData, {
                headers: {
                    ...formData.getHeaders(),
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY!}`
                }
            });

            // Update the batch tasks with the file ID
            if (response.data && response.data.id) {
                await tx.openai_batch_tasks.updateMany({
                    where: {
                        id: {
                            in: acceptedBatchTasks.map(task => task.id)
                        }
                    },
                    data: {
                        openai_file_id: response.data.id,
                        time_last_updated: Date.now()
                    }
                });
            }
        } finally {
            // Clean up the temporary file
            try {
                fs.unlinkSync(`/${randomId}.jsonl`);
            } catch {
                // do nothing
            }
        }
    });

    // 2) Next we check if the file was uploaded successfully or not.
    await prisma.$transaction(async (tx) => {
        // we lock so that no other cron will interfere with this.
        await tx.$queryRawUnsafe("SELECT id FROM openai_batch_tasks WHERE status = 'pending' AND openai_file_id IS NOT NULL AND file_uploaded = false AND openai_batch_id IS NULL FOR UPDATE");

        const results = await tx.openai_batch_tasks.findMany({
            where: {
                status: "pending",
                openai_file_id: {
                    not: null
                },
                file_uploaded: false,
                openai_batch_id: null,
            },
        });

        if (results.length === 0) {
            return;
        }
        const uniqueFileIds = Array.from(new Set(results.map(result => result.openai_file_id)));
        const processedFileIds: string[] = []
        for (const fileId of uniqueFileIds) {
            let originalBaseUrl = results.find(result => result.openai_file_id === fileId)!.original_base_url;
            assert(fileId !== null, "File ID is null");
            const url = originalBaseUrl + "/v1/files/" + fileId;
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY!}`
                }
            });
            if (response.data.status === "processed") {
                processedFileIds.push(fileId);
            }
        }

        await tx.openai_batch_tasks.updateMany({
            where: {
                openai_file_id: {
                    in: processedFileIds
                }
            },
            data: {
                file_uploaded: true,
                time_last_updated: Date.now()
            }
        });
    });

    // 3) Create a batch job.
    await prisma.$transaction(async (tx) => {
        // we lock so that no other cron will interfere with this.
        await tx.$queryRawUnsafe("SELECT id FROM openai_batch_tasks WHERE status = 'pending' AND openai_file_id IS NOT NULL AND file_uploaded = true AND openai_batch_id IS NULL FOR UPDATE");

        const results = await tx.openai_batch_tasks.findMany({
            where: {
                status: "pending",
                openai_file_id: {
                    not: null
                },
                file_uploaded: true,
                openai_batch_id: null,
            },
        });

        if (results.length === 0) {
            return;
        }
        const uniqueFileIds = Array.from(new Set(results.map(result => result.openai_file_id)));
        for (const fileId of uniqueFileIds) {
            let originalBaseUrl = results.find(result => result.openai_file_id === fileId)!.original_base_url;
            assert(fileId !== null, "File ID is null");
            const url = originalBaseUrl + "/v1/batches";
            const response = await axios.post(url, {
                input_file_id: fileId,
                endpoint: "/v1/chat/completions",
                completion_window: "24h"
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY!}`,
                    'Content-Type': 'application/json'
                }
            });

            let batchId = response.data.id;
            await tx.openai_batch_tasks.updateMany({
                where: {
                    openai_file_id: fileId
                },
                data: { openai_batch_id: batchId, time_last_updated: Date.now() }
            });
        }
    });

    // 4) Track job progress and update status accordingly.
    await prisma.$transaction(async (tx) => {

        // we lock so that no other cron will interfere with this.
        await tx.$queryRawUnsafe("SELECT id FROM openai_batch_tasks WHERE status = 'pending' AND openai_file_id IS NOT NULL AND file_uploaded = true AND openai_batch_id IS NOT NULL FOR UPDATE");

        const results = await tx.openai_batch_tasks.findMany({
            where: {
                status: "pending",
                openai_file_id: {
                    not: null
                },
                file_uploaded: true,
                openai_batch_id: {
                    not: null
                },
            },
        });

        if (results.length === 0) {
            return;
        }
        const uniqueOpenAIBatchIds = Array.from(new Set(results.map(result => result.openai_batch_id)));
        for (const openaiBatchId of uniqueOpenAIBatchIds) {
            assert(openaiBatchId !== null, "Open AI batch ID is null");
            let originalBaseUrl = results.find(result => result.openai_batch_id === openaiBatchId)!.original_base_url;
            const url = originalBaseUrl + "/v1/batches/" + openaiBatchId;
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY!}`
                }
            });

            let status = response.data.status.toLowerCase();
            if (status === "completed") {
                await tx.openai_batch_tasks.updateMany({
                    where: {
                        openai_batch_id: openaiBatchId
                    },
                    data: {
                        status: "completed",
                        time_last_updated: Date.now(),
                        output_file_id: response.data.output_file_id
                    }
                });
            } else if (status === "failed" || status === "expired" || status === "cancelled") {
                logError("OpenAI batching failed with status: " + status + " and response: " + JSON.stringify(response.data));
                await tx.openai_batch_tasks.deleteMany({
                    where: {
                        openai_batch_id: openaiBatchId
                    }
                });
            }
            // other statuses are just stuff like in progress types: https://platform.openai.com/docs/guides/batch?lang=curl
        }
    });

    // // 5) Fetch and store results from completed batch jobs.
    // await prisma.$transaction(async (tx) => {

    //     // we lock so that no other cron will interfere with this.
    //     await tx.$queryRawUnsafe("SELECT batch_id FROM openai_batch_tasks WHERE status = 'completed' AND result IS NULL FOR UPDATE");

    //     const results = await tx.openai_batch_tasks.findMany({
    //         where: {
    //             status: "completed",
    //             result: null,
    //         },
    //     });

    //     if (results.length === 0) {
    //         return;
    //     }
    //     const uniqueOutputFileIds = Array.from(new Set(results.map(result => result.output_file_id)));
    //     for (const outputFileId of uniqueOutputFileIds) {
    //         assert(outputFileId !== null, "Output file ID is null, even if batch is completed!");
    //         const url = `${process.env.OPENAI_BATCH_URL}/openai/files/${outputFileId}/content?api-version=${process.env.OPENAI_BATCH_URL_VERSION}`;
    //         const response = await axios.get(url, {
    //             headers: {
    //                 'api-key': process.env.OPENAI_BATCH_API_KEY!
    //             }
    //         });

    //         const content = response.data;
    //         if (typeof content === "string") {
    //             const splittedContent = content.split("\n");
    //             for (const line of splittedContent) {
    //                 if (line.trim() === "") {
    //                     continue;
    //                 }
    //                 let jsonified = JSON.parse(line);
    //                 let customId = jsonified.custom_id;
    //                 let content = jsonified.response.body.choices[0].message.content;
    //                 await tx.openai_batch_tasks.updateMany({
    //                     where: {
    //                         custom_id: customId
    //                     },
    //                     data: { result: content, time_last_updated: Date.now() }
    //                 });
    //             }
    //         } else {
    //             let customId = content.custom_id;
    //             let result = content.response.body.choices[0].message.content;
    //             await tx.openai_batch_tasks.updateMany({
    //                 where: {
    //                     custom_id: customId
    //                 },
    //                 data: { result, time_last_updated: Date.now() }
    //             });
    //         }
    //     }
    // });
}