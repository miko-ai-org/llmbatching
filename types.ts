import { ResponseCreateParamsNonStreaming, Response } from "openai/resources/responses/responses";

export type OpenAIInput = ResponseCreateParamsNonStreaming

export type OpenAIBatchResponse = {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{
        index: number;
        message: {
            role: string;
            content: string;
            refusal: null | string;
            annotations: any[];
        };
        logprobs: null | any;
        finish_reason: string;
    }>;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
        prompt_tokens_details: {
            cached_tokens: number;
            audio_tokens: number;
        };
        completion_tokens_details: {
            reasoning_tokens: number;
            audio_tokens: number;
            accepted_prediction_tokens: number;
            rejected_prediction_tokens: number;
        };
    };
    service_tier: string;
    system_fingerprint: string;
};

export type OpenAIExpectedResponse = Response