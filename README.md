# 🧠 OpenAI Batching Proxy

**Reduce OpenAI API costs by up to 50% for non-real-time tasks.**

This is a lightweight proxy server that sits between your backend and OpenAI. It provides a simple, drop-in replacement for OpenAI’s API client that enables **automatic batching** for high-volume, non-urgent workloads like bulk evaluation or dataset classification.

Built on top of [OpenAI’s official batching APIs](https://platform.openai.com/docs/guides/batch#4-check-the-status-of-a-batch), this service abstracts away all the complexity.

---

## ✨ Why use this?

- **50%+ cost savings** when using batch mode.
- **No learning curve**: identical interface to OpenAI’s standard SDK.
- **Handles all the messy stuff** like polling, mapping, retries, and error handling.

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
    baseURL: process.env['BATCH_SERVER_URL']
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
            // we continue to the next iteration after waiting for 2 mins
            await new Promise(resolve => setTimeout(resolve, 2 * 60 * 1000));
        } else {
            throw e;
        }
    }
}
console.log(response);
```

---

## 🚀 Getting Started

### 1. Run the Batching Server

Run the server using Docker:

```bash
docker run -d -p 9487:9487 \
    -e OPENAI_API_KEY=<your-openai-api-key> \
    -e BATCH_SERVER_API_KEY=<your-batch-server-api-key> \
    -e POSTGRES_URL="postgresql://<user>:<password>@<host>:5432/batching_db" \
    your-image-name
```

> **Note**: Requires a PostgreSQL database to track job status and results.

### 2. Use it in Your Code (Node.js Example)

```ts
import OpenAI from 'openai';

const clientWithBatching = new OpenAI({
    apiKey: process.env['API_KEY_FOR_BATCH_SERVER'],
    baseURL: process.env['BATCH_SERVER_URL']
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
            // we continue to the next iteration after waiting for 2 mins
            await new Promise(resolve => setTimeout(resolve, 2 * 60 * 1000));
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

1. Building a JSONL file of all your prompts with unique IDs.
2. Uploading it to OpenAI to get a file ID.
3. Creating a batch job using that file.
4. Polling the job status until completion.
5. Downloading the output file when it’s done.
6. Mapping results back to your original queries.
7. Handling retries, errors, race conditions, and consistency.

This project **does all of that for you**.

---

## 🧩 Ideal Use Cases

- Large-scale classification or labeling jobs
- Periodic evaluations of prompts
- Nightly batch processing of user data
- Anything where **latency is not a concern**

---

## 📄 License

MIT
