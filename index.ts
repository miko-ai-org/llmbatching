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
import { apiHandler, sortObject } from "./utils";
import { v4 as uuidv4 } from 'uuid';
import prisma from "./prisma/client";
import { startCronJobs } from "./cronjobs";

const app = express();

app.use(express.json());

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

    let batchInfo = await prisma.openai_batch_tasks.findUnique({
        where: {
            id: batchId,
        },
    });

    if (batchInfo === null) {
        let customId = uuidv4();
        await prisma.openai_batch_tasks.create({
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

        res.status(422).send("Still processing. Please try again later");
    } else {
        if (batchInfo.status === "pending") {
            res.status(422).send("Still processing. Please try again later");
        } else if (batchInfo.status === "completed") {
            if (batchInfo.result !== null) {
                res.status(200).json(batchInfo.result);
            } else {
                res.status(422).send("Still processing. Please try again later");
            }
        } else {
            throw new Error("OpenAI Batching failed with unknown status: " + batchInfo.status);
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