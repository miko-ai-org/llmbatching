import express from "express";
import { v4 as uuidv4 } from 'uuid';
import { OpenAIBatchResponse, OpenAIExpectedResponse, OpenAIInput } from "./types";

export function apiHandler(handler: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>, requireAuth: boolean) {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            let authHeader = req.headers['authorization'];
            if (!authHeader && requireAuth) {
                throw {
                    status: 401,
                    message: 'Missing authorization header. Please pass an authorization bearer token in the header.'
                };
            }
            if (authHeader) {
                const token = authHeader.split(' ')[1];
                if (token !== process.env.API_KEY) {
                    throw {
                        status: 401,
                        message: 'Invalid authorization token. Please pass a valid authorization bearer token in the header.'
                    };
                }
            }
            await handler(req, res, next);
        } catch (e) {
            next(e);
        }
    }
}

export function sortObject(obj: any, seen = new WeakSet()): any {
    if (obj === null) return null;

    // Handle primitives
    if (typeof obj !== "object") {
        if (typeof obj === "bigint") return obj.toString();
        return obj;
    }

    // Handle circular refs
    if (seen.has(obj)) return "[Circular]";
    seen.add(obj);

    // Date
    if (obj instanceof Date) return obj.toISOString();

    // Typed Arrays (e.g. Uint8Array)
    if (
        obj instanceof Int8Array ||
        obj instanceof Uint8Array ||
        obj instanceof Uint8ClampedArray ||
        obj instanceof Int16Array ||
        obj instanceof Uint16Array ||
        obj instanceof Int32Array ||
        obj instanceof Uint32Array ||
        obj instanceof Float32Array ||
        obj instanceof Float64Array
    ) {
        return Array.from(obj); // number[]
    }

    if (
        obj instanceof BigInt64Array ||
        obj instanceof BigUint64Array
    ) {
        return Array.from(obj, val => val.toString()); // convert bigint[] to string[]
    }

    // Arrays (preserve order)
    if (Array.isArray(obj)) {
        return obj.map(item => sortObject(item, seen));
    }

    // Map → sorted by key
    if (obj instanceof Map) {
        return Array.from(obj.entries())
            .map(([k, v]) => [sortObject(k, seen), sortObject(v, seen)])
            .sort(([ka], [kb]) => JSON.stringify(ka).localeCompare(JSON.stringify(kb)));
    }

    // Set
    if (obj instanceof Set) {
        return Array.from(obj).map(v => sortObject(v, seen));
    }

    // Handle normal objects, include Symbol keys
    const entries = [
        ...Object.entries(obj),
        ...Object.getOwnPropertySymbols(obj).map(sym => [sym, obj[sym]])
    ];

    const sortedEntries = entries.sort((a, b) => {
        const ak = typeof a[0] === "symbol" ? a[0].toString() : a[0];
        const bk = typeof b[0] === "symbol" ? b[0].toString() : b[0];
        return ak.localeCompare(bk);
    });

    const result: any = {};
    for (const [key, value] of sortedEntries) {
        if (typeof value === "function") continue;
        result[key] = sortObject(value, seen);
    }

    return result;
}

export function mapOpenAIBatchResponseToExpectedResponse(inputBody: OpenAIInput, outputBody: OpenAIBatchResponse): OpenAIExpectedResponse {
    return {
        id: outputBody.id,
        object: "response",
        created_at: outputBody.created,
        status: "completed",
        error: null,
        incomplete_details: null,
        instructions: null,
        max_output_tokens: null,
        model: outputBody.model,
        output: outputBody.choices.map(choice => ({
            type: "message",
            id: uuidv4(),
            status: "completed",
            role: "assistant",
            content: [
                {
                    type: "output_text",
                    text: choice.message.content,
                    annotations: choice.message.annotations || []
                }
            ],
        })),
        output_text: outputBody.choices.map(choice => choice.message.content).join("\n"),
        parallel_tool_calls: true,
        previous_response_id: null,
        reasoning: {
            effort: null,
            summary: null
        },
        temperature: inputBody.temperature || 1.0,
        text: {
            format: {
                type: "text"
            }
        },
        tool_choice: inputBody.tool_choice || "auto",
        tools: [],
        top_p: inputBody.top_p || 1.0,
        truncation: inputBody.truncation || "disabled",
        usage: {
            input_tokens: outputBody.usage.prompt_tokens,
            input_tokens_details: {
                cached_tokens: outputBody.usage.prompt_tokens_details.cached_tokens
            },
            output_tokens: outputBody.usage.completion_tokens,
            output_tokens_details: {
                reasoning_tokens: outputBody.usage.completion_tokens_details.reasoning_tokens
            },
            total_tokens: outputBody.usage.total_tokens
        },
        user: inputBody.user || undefined,
        metadata: inputBody.metadata || {}
    };
}