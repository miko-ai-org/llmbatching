# OpenAI Batching

This is a service which sits between you and OpenAI, exposing a simple, one to one batching interface to your queries so that you can reduce costs by 50%. It's only applicable for non real time tasks, for example: bulk evals or classifying large datasets. It's built on top of [Open AI's batching APIs](https://platform.openai.com/docs/guides/batch#4-check-the-status-of-a-batch).

## Why does this exist?
The normal OpenAI query is like follows:

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
import OpenAIBatching from "miko/openaibatching"

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

As you can see, the API is very similar, and it hides all the complexities of using the raw batching APIs provided by OpenAI.

## How to use it?

1. Run the batching server:

```bash
docker run -d -p 9487:9487 -e OPENAI_API_KEY=<your-openai-api-key> -e BATCH_SERVER_API_KEY=<your-batch-server-api-key> POSTGRES_URL="postgres://<user>:<password>@<host>:5432/batching_db"
```

2. Install the package in your backend:

```bash
npm install --save miko/openaibatching
```

3. Use it in your code:

```ts
import OpenAIBatching from "miko/openaibatching"

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