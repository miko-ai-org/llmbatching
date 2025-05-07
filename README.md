# OpenAI Batching

This is a service which sits between your backend and OpenAI, exposing a simple, one to one batching interface to your queries so that you can reduce costs by 50%. It's only applicable for non real time tasks, for example: bulk evals or classifying large datasets. It's built on top of [Open AI's batching APIs](https://platform.openai.com/docs/guides/batch#4-check-the-status-of-a-batch).

## Why does this exist?
Simply, to save 50% costs on OpenAI queries. Also, the interface of this library is much simpler than the raw batching APIs:

The normal OpenAI query:
```typescript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

const completion = await client.responses.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello, world!" }],
});

console.log(completion.choices[0].message.content);
```

The above is real time, and doesn't use any batching API (normal OpenAI costs). However, with this service, you can leverage batching in this way:

```ts
import OpenAIBatching from "@miko/openaibatching"

const client = new OpenAIBatching({
  batchServerUrl: "https://localhost:9487",
  batchServerApiKey: process.env['BATCH_SERVER_API_KEY']
});

const completion = await client.responses.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello, world!" }],
});

if (completion.hasCompleted) {
  console.log(completion.choices[0].message.content);
} else {
  console.log("Still in progress.. we should query it again after a few mins.");
}
```

As you can see, the new API is very similar to the real time one! It hides all the complexities of using the raw batching APIs provided by OpenAI.

## How to use it?

1. Run the batching server:

```bash
docker run -d -p 9487:9487 -e OPENAI_API_KEY=<your-openai-api-key> -e BATCH_SERVER_API_KEY=<your-batch-server-api-key> POSTGRES_URL="postgres://<user>:<password>@<host>:5432/batching_db"
```

2. Install the package in your backend:

```bash
npm install --save @miko/openaibatching
```

3. Use it in your code:

```ts
import OpenAIBatching from "@miko/openaibatching"

const client = new OpenAIBatching({
  batchServerUrl: "https://localhost:9487",
  batchServerApiKey: process.env['BATCH_SERVER_API_KEY']
});

const completion = await client.responses.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello, world!" }],
});

if (completion.hasCompleted) {
  console.log(completion.choices[0].message.content);
} else {
  console.log("Still in progress.. we should query it again after a few mins.");
}
```

## What are the steps involved in using the raw OpenAI Batching APIs?
You can read all about it [here](https://platform.openai.com/docs/guides/batch#4-check-the-status-of-a-batch), but roughly, the steps are:
- Take several queries and put them all in one big file in a JSON format. Each query in the file needs to have a unique ID 
- Upload the file to OpenAI, to get a file ID.
- Create a batch job in OpenAI using the file ID, to get a batch ID.
- Poll the batch job using the batch ID until it's complete or has failed.
- Once completed, get the output file ID from OpenAI.
- Download the result using the output file ID.
- Extract each result based on the custom ID generated in step one and feed it back to your business logic.
- You need to make sure you handle errors and race conditions in each of the steps above.