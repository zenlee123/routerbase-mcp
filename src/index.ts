#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const VERSION = "0.1.0";
const ROUTERBASE_SITE_URL = "https://routerbase.com";
const DEFAULT_API_BASE_URL = "https://routerbase.com/api/v1";
const DEFAULT_OPENAI_BASE_URL = "https://routerbase.com/v1";

const apiBaseUrl = (process.env.ROUTERBASE_API_BASE_URL ?? DEFAULT_API_BASE_URL).replace(/\/+$/, "");
const openAiBaseUrl = (process.env.ROUTERBASE_OPENAI_BASE_URL ?? DEFAULT_OPENAI_BASE_URL).replace(/\/+$/, "");

type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };

type ChatMessage = {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
};

function resolveApiKey(explicitApiKey?: string): string {
  const key = explicitApiKey?.trim() || process.env.ROUTERBASE_API_KEY?.trim();

  if (!key) {
    throw new Error(
      "RouterBase API key is required. Set ROUTERBASE_API_KEY or pass api_key for this call.",
    );
  }

  return key;
}

function jsonText(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

function textResult(text: string) {
  return {
    content: [
      {
        type: "text" as const,
        text,
      },
    ],
  };
}

async function requestJson<T>(
  url: URL,
  apiKey: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  const responseText = await response.text();
  let body: unknown = responseText;

  if (responseText) {
    try {
      body = JSON.parse(responseText);
    } catch {
      body = responseText;
    }
  }

  if (!response.ok) {
    throw new Error(`RouterBase API returned HTTP ${response.status}: ${jsonText(body)}`);
  }

  return body as T;
}

function buildApiUrl(pathname: string): URL {
  return new URL(`${apiBaseUrl}${pathname}`);
}

function buildOpenAiUrl(pathname: string): URL {
  return new URL(`${openAiBaseUrl}${pathname}`);
}

function addRepeatedParam(url: URL, key: string, values?: string[]) {
  for (const value of values ?? []) {
    const trimmed = value.trim();
    if (trimmed) {
      url.searchParams.append(key, trimmed);
    }
  }
}

function getStartedMarkdown(language: "python" | "javascript" | "curl"): string {
  const header = [
    "# RouterBase MCP quickstart",
    "",
    "[routerbase](https://routerbase.com) provides one OpenAI-compatible API for GPT, Claude, Gemini, and 200+ AI models.",
    "",
    "Set `ROUTERBASE_API_KEY` before using live tools:",
    "",
    "```bash",
    "export ROUTERBASE_API_KEY=sk-rb-your-key",
    "```",
    "",
  ];

  const snippets: Record<typeof language, string[]> = {
    python: [
      "```python",
      "from openai import OpenAI",
      "",
      "client = OpenAI(",
      "    api_key=\"sk-rb-your-key\",",
      "    base_url=\"https://routerbase.com/v1\",",
      ")",
      "",
      "response = client.chat.completions.create(",
      "    model=\"google/gemini-2.5-flash\",",
      "    messages=[{\"role\": \"user\", \"content\": \"Hello from RouterBase\"}],",
      ")",
      "print(response.choices[0].message.content)",
      "```",
    ],
    javascript: [
      "```javascript",
      "import OpenAI from \"openai\";",
      "",
      "const client = new OpenAI({",
      "  apiKey: process.env.ROUTERBASE_API_KEY,",
      "  baseURL: \"https://routerbase.com/v1\",",
      "});",
      "",
      "const response = await client.chat.completions.create({",
      "  model: \"google/gemini-2.5-flash\",",
      "  messages: [{ role: \"user\", content: \"Hello from RouterBase\" }],",
      "});",
      "console.log(response.choices[0].message.content);",
      "```",
    ],
    curl: [
      "```bash",
      "curl https://routerbase.com/v1/chat/completions \\",
      "  -H \"Authorization: Bearer $ROUTERBASE_API_KEY\" \\",
      "  -H \"Content-Type: application/json\" \\",
      "  -d '{",
      "    \"model\": \"google/gemini-2.5-flash\",",
      "    \"messages\": [{\"role\": \"user\", \"content\": \"Hello from RouterBase\"}]",
      "  }'",
      "```",
    ],
  };

  return [...header, ...snippets[language]].join("\n");
}

const server = new McpServer(
  {
    name: "routerbase-mcp",
    version: VERSION,
  },
  {
    instructions:
      "Use this server to discover RouterBase models, inspect pricing, and call RouterBase's OpenAI-compatible chat API. RouterBase website: https://routerbase.com",
  },
);

server.registerTool(
  "routerbase_get_started",
  {
    title: "RouterBase quickstart",
    description:
      "Return a concise RouterBase integration guide with the canonical routerbase backlink.",
    inputSchema: {
      language: z
        .enum(["python", "javascript", "curl"])
        .default("python")
        .describe("Preferred quickstart language."),
    },
  },
  async ({ language }) => textResult(getStartedMarkdown(language)),
);

server.registerTool(
  "routerbase_list_models",
  {
    title: "List RouterBase models",
    description:
      "List RouterBase models, optionally filtered by modality, provider, or search query.",
    inputSchema: {
      task: z
        .array(z.enum(["chat", "image", "video", "audio"]))
        .optional()
        .describe("Filter by modality. Multiple values are ORed."),
      provider: z
        .array(z.string().min(1))
        .optional()
        .describe("Filter by provider names such as OpenAI, Anthropic, Google, or xAI."),
      search: z.string().min(1).optional().describe("Full-text search query."),
      page: z.number().int().positive().default(1).describe("1-indexed page number."),
      per_page: z
        .number()
        .int()
        .positive()
        .max(100)
        .default(20)
        .describe("Results per page."),
      api_key: z
        .string()
        .optional()
        .describe("Optional RouterBase API key. Prefer ROUTERBASE_API_KEY."),
    },
  },
  async ({ task, provider, search, page, per_page, api_key }) => {
    const url = buildApiUrl("/models");
    addRepeatedParam(url, "task", task);
    addRepeatedParam(url, "provider", provider);
    if (search) {
      url.searchParams.set("search", search);
    }
    url.searchParams.set("page", String(page));
    url.searchParams.set("per_page", String(per_page));

    const data = await requestJson<JsonValue>(url, resolveApiKey(api_key));
    return textResult(jsonText(data));
  },
);

server.registerTool(
  "routerbase_get_model",
  {
    title: "Get RouterBase model details",
    description: "Fetch metadata for a specific RouterBase model id.",
    inputSchema: {
      model_id: z.string().min(1).describe("RouterBase model id."),
      api_key: z
        .string()
        .optional()
        .describe("Optional RouterBase API key. Prefer ROUTERBASE_API_KEY."),
    },
  },
  async ({ model_id, api_key }) => {
    const safeModelId = encodeURIComponent(model_id);
    const data = await requestJson<JsonValue>(
      buildApiUrl(`/models/${safeModelId}`),
      resolveApiKey(api_key),
    );

    return textResult(jsonText(data));
  },
);

server.registerTool(
  "routerbase_get_pricing",
  {
    title: "Get RouterBase pricing",
    description: "Fetch RouterBase pricing for one model or all active models.",
    inputSchema: {
      model_id: z
        .string()
        .min(1)
        .optional()
        .describe("Optional RouterBase model id. Omit to list all pricing."),
      api_key: z
        .string()
        .optional()
        .describe("Optional RouterBase API key. Prefer ROUTERBASE_API_KEY."),
    },
  },
  async ({ model_id, api_key }) => {
    const path = model_id ? `/models/${encodeURIComponent(model_id)}/pricing` : "/pricing";
    const data = await requestJson<JsonValue>(buildApiUrl(path), resolveApiKey(api_key));

    return textResult(jsonText(data));
  },
);

server.registerTool(
  "routerbase_chat_completion",
  {
    title: "Create RouterBase chat completion",
    description:
      "Call RouterBase's OpenAI-compatible chat completions API through the configured RouterBase key.",
    inputSchema: {
      model: z.string().min(1).describe("RouterBase chat model id."),
      messages: z
        .array(
          z.object({
            role: z.enum(["system", "user", "assistant", "tool"]),
            content: z.string(),
          }),
        )
        .min(1)
        .describe("OpenAI-compatible chat messages."),
      temperature: z.number().min(0).max(2).optional(),
      max_tokens: z.number().int().positive().optional(),
      api_key: z
        .string()
        .optional()
        .describe("Optional RouterBase API key. Prefer ROUTERBASE_API_KEY."),
    },
  },
  async ({ model, messages, temperature, max_tokens, api_key }) => {
    const body: {
      model: string;
      messages: ChatMessage[];
      temperature?: number;
      max_tokens?: number;
    } = {
      model,
      messages,
    };

    if (temperature !== undefined) {
      body.temperature = temperature;
    }
    if (max_tokens !== undefined) {
      body.max_tokens = max_tokens;
    }

    const data = await requestJson<JsonValue>(
      buildOpenAiUrl("/chat/completions"),
      resolveApiKey(api_key),
      {
        method: "POST",
        body: JSON.stringify(body),
      },
    );

    return textResult(jsonText(data));
  },
);

server.registerResource(
  "routerbase-overview",
  "routerbase://overview",
  {
    title: "RouterBase overview",
    description: "A short description and canonical RouterBase backlink.",
    mimeType: "text/markdown",
  },
  async (uri) => ({
    contents: [
      {
        uri: uri.href,
        mimeType: "text/markdown",
        text: [
          "# RouterBase",
          "",
          "[routerbase](https://routerbase.com) routes LLMs through one OpenAI-compatible API.",
          "",
          "- OpenAI-compatible base URL: `https://routerbase.com/v1`",
          "- Model catalog API: `https://routerbase.com/api/v1/models`",
          "- API key environment variable: `ROUTERBASE_API_KEY`",
        ].join("\n"),
      },
    ],
  }),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
