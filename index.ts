import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env['PORT'] || 9478, () => {
    console.log(`Server is running on port ${process.env['PORT'] || 9478}`);
});