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

const app = express();

app.use(express.json());

app.post("/responses", (req, res) => {
    res.status(500).send("not implemented")
});

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

app.listen(process.env['PORT'] || 9478, () => {
    logInfo(`Server is running on port ${process.env['PORT'] || 9478}`);
});