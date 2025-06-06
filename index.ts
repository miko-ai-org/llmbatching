(BigInt.prototype as any).toJSON = function () {
    const num = Number(this);
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        throw new Error(`BigInt ${this} exceeds Number safe range`);
    }
    return num;
};

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { logError, logInfo } from "./logger";
import crypto from "crypto";
import { apiHandler, mapOpenAIBatchResponseToExpectedResponse, sortObject } from "./utils";
import { v4 as uuidv4 } from 'uuid';
import prisma from "./prisma/client";
import { startCronJobs } from "./cronjobs";
import { OpenAIBatchResponse, OpenAIInput } from "./types";

if (process.env.OPENAI_API_KEY === undefined) {
    throw new Error("OPENAI_API_KEY is not set in env variable");
}

const app = express();

app.use(express.json());

app.get("/healthcheck", (_, res) => {
    res.send("OK");
});

app.post("/responses", apiHandler(async (req, res) => {
    let body = req.body;
    if (typeof body.input !== "string" && typeof body.input !== "object") {
        throw {
            status: 400,
            message: "Invalid input: missing or invalid type for body property 'input'"
        }
    }
    if (typeof body.model !== "string") {
        throw {
            status: 400,
            message: "Invalid input: missing or invalid type for body property 'model'"
        }
    }
    let originalBaseUrl: string | undefined = body.metadata?.originalBaseUrl;
    if (originalBaseUrl !== undefined) {
        delete body.metadata.originalBaseUrl;
        originalBaseUrl = originalBaseUrl.replace(/\/$/, "");
    }
    let batchId = crypto.createHash('sha512').update(JSON.stringify(sortObject(body))).digest('hex');
    let retryCount = 0;
    while (true) {
        try {
            let { status, response } = await prisma.$transaction(async (tx) => {
                let batchInfo = await tx.openai_batch_tasks.findUnique({
                    where: {
                        id: batchId,
                    },
                });

                if (batchInfo === null) {
                    let customId = uuidv4();
                    await tx.openai_batch_tasks.create({
                        data: {
                            id: batchId,
                            custom_id: customId,
                            original_base_url: originalBaseUrl || "https://api.openai.com",
                            time_created: Date.now(),
                            time_last_updated: Date.now(),
                            status: "pending",
                            json_data: body,
                        }
                    })
                    return {
                        status: 422,
                        response: "Created new batch task. Please check back later.",
                    }
                } else {
                    if (batchInfo.status === "pending") {
                        return {
                            status: 422,
                            response: "Still processing. Please try again later",
                        }
                    } else if (batchInfo.status === "completed") {
                        if (batchInfo.result !== null) {
                            return {
                                status: 200,
                                response: mapOpenAIBatchResponseToExpectedResponse(batchInfo.json_data as unknown as OpenAIInput, batchInfo.result as OpenAIBatchResponse)
                            }
                        } else {
                            return {
                                status: 422,
                                response: "Still processing. Please try again later",
                            }
                        }
                    } else {
                        throw new Error("OpenAI Batching failed with unknown status: " + batchInfo.status);
                    }
                }
            });
            if (status === 200) {
                res.json(response);
            } else {
                res.status(status).send(response);
            }
            break;
        } catch (err) {
            if ((err as any).message.includes("retry your transaction")) {
                retryCount++;
                if (retryCount > 3) {
                    throw err;
                }
                await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 1000));
                continue;
            } else {
                throw err;
            }
        }
    }
}, true));

app.use((_, __, next) => {
    next({
        status: 404,
        message: "Not found"
    });
});

app.use(async (err: any, req: express.Request, res: express.Response, _: express.NextFunction) => {
    let status = err.status || 500;
    let clientMessage = status === 500 ? 'Internal server error' : (err.message || 'Unknown error');
    if (status !== 404) {
        logError(err);
    }
    res.status(status).send(clientMessage);
})

startCronJobs();

app.listen(process.env['PORT'] || 9478, () => {
    logInfo(`Server is running on port ${process.env['PORT'] || 9478}`);
});