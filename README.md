# 🧠 LLM Batching Proxy

**Reduce LLM API costs by up to 50% for non-real-time tasks.**

This is a lightweight proxy server that sits between your backend and LLM providers like OpenAI. It provides a simple, drop-in replacement for OpenAI’s API client that enables **automatic batching** for high-volume, non-urgent workloads like bulk evaluation or dataset classification.

Built on top of [OpenAI’s official batching APIs](https://platform.openai.com/docs/guides/batch#4-check-the-status-of-a-batch), this service abstracts away all the complexity.

---

## ✨ Why use this?

- **50% cost savings** in queries to OpenAI. In our internal eval tools (at Miko.ai), we were able to save $200 / week by switching to using batch mode!
- **No learning curve**: Extremely similar interface to OpenAI’s standard SDK. In fact we don't have any SDK at all! You can use the existing `openai` package as shown below.
- **Handles all the messy stuff** like polling, mapping, retries, and error handling. Using this library will save you 24-48 hours of engineering time.
- **Is crash resistant**: We store state in your database, not in memory. This also means it's horizontally scalable.
- **Fully self hosted**: No need to trust a third party service.

Compare the two:

### Standard OpenAI API (real-time)

```ts
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

const completion = await client.responses.create({
    model: "gpt-4o",
    input: [{ role: "user", content: "Hello, world!" }],
});

console.log(completion.output_text);
```

### Using this batching proxy

```ts
import OpenAI from 'openai';

const clientWithBatching = new OpenAI({
    apiKey: process.env['API_KEY_FOR_BATCH_SERVER'],
    baseURL: "https://localhost:9487" // pointing to the batching server
});

let response = "";
while(true) {
    try {
        const completion = await clientWithBatching.responses.create({
            model: "gpt-4o",
            input: [{ role: "user", content: "Hello, world!" }],
        });
        response = completion.output_text;
        break;
    } catch (e: any) {
        if (e.status === 422) {
            // we continue to the next iteration after waiting for 1 min
            await new Promise(resolve => setTimeout(resolve, 1 * 60 * 1000));
        } else {
            throw e;
        }
    }
}
console.log(response);
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/miko-ai-org/llmbatching.git
```

### 2. Create a docker image (Batching Server)

```bash
docker build -t llmbatching .
```

### 3. Create a PostgreSQL database and tables

#### Create a database (You can use any name)

```psql
CREATE DATABASE llmbatching;
```

#### Create the required tables

```bash
docker run -p 9487:9487 \
    -e OPENAI_API_KEY="..." \
    -e API_KEY="..." \
    -e DATABASE_URL="postgresql://<username>:<password>@localhost:5432/llmbatching?connection_limit=4" \
    llmbatching npx prisma migrate deploy
```

### 4. Run the Batching Server

Run the server using Docker:

```bash
docker run -d -p 9487:9487 \
    -e OPENAI_API_KEY="..." \
    -e API_KEY="..." \
    -e DATABASE_URL="postgresql://<username>:<password>@localhost:5432/llmbatching?connection_limit=4" \
    llmbatching
```

> **Note**: Requires a PostgreSQL database to track job status and results.

### 5. Use it in Your Code (Node.js Example)

```ts
import OpenAI from 'openai';

const clientWithBatching = new OpenAI({
    apiKey: process.env['API_KEY_FOR_BATCH_SERVER'],
    baseURL: "https://localhost:9487" // pointing to the batching server
});

let response = "";
while(true) {
    try {
        const completion = await clientWithBatching.responses.create({
            model: "gpt-4o",
            input: [{ role: "user", content: "Hello, world!" }],
        });
        response = completion.output_text;
        break;
    } catch (e: any) {
        if (e.status === 422) {
            // we continue to the next iteration after waiting for 1 min
            await new Promise(resolve => setTimeout(resolve, 60 * 1000));
        } else {
            throw e;
        }
    }
}
console.log(response);
```

---

## ⚙️ What This Abstracts Away

Normally, using OpenAI’s batching API requires:

1. Building a `JSONL` file of all your prompts with unique IDs.
2. Uploading it to OpenAI to get a file ID.
3. Creating a batch job using that file.
4. Polling the job status until completion.
5. Downloading the output file when it’s done.
6. Mapping results back to your original queries.
7. Handling retries, errors, race conditions, caching, crashes and consistency.

This project **does all of that for you**.

---

## 🧩 Ideal Use Cases

- Large-scale classification or labeling jobs
- Periodic evaluations of prompts
- Nightly batch processing of user data
- Anything where **latency is not a concern**

---

## Limitations

- Only supports text input / output. This will be improved upon as this library makes more progress.
- The time taken to get responses can be up to 24 hours (though for really small batches, it can be a few mins even). This depends on OpenAI.
- Only supports OpenAI (without support for Azure's OpenAI) APIs. So doesnt work with Gemini, Groq, etc, but we will add support for them soon.
- Works only with PostgreSQL as of now. We will add MySQL support soon.

---

## Development setup

1) Install dependencies
```bash
npm install
npx prisma generate
```

2) Create a PostgreSQL database and tables

```psql
CREATE DATABASE llmbatching;
```

3) Create a `.env` file and set the environment variables

```bash
cp .env.example .env
```

4) Run the server

```bash
npm run dev
```


---

## 📄 License

MIT

---

## Author

Developers at [Miko](https://miko.ai/)
