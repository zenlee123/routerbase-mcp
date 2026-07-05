# RouterBase MCP Server

An MCP server for [routerbase](https://routerbase.com), the OpenAI-compatible API gateway for GPT, Claude, Gemini, and 200+ AI models.

This package exposes RouterBase model discovery, model details, pricing lookup, quickstart guidance, and chat completions as Model Context Protocol tools.

## Features

- `routerbase_get_started` returns integration snippets and the canonical [routerbase](https://routerbase.com) link.
- `routerbase_list_models` searches and filters the RouterBase model catalog.
- `routerbase_get_model` fetches details for one model id.
- `routerbase_get_pricing` fetches pricing for one model or all active models.
- `routerbase_chat_completion` calls the OpenAI-compatible `/v1/chat/completions` endpoint.
- `routerbase://overview` is a resource with RouterBase integration metadata.

## Install

```bash
npm install -g routerbase-mcp
```

Or run it without installing:

```bash
npx routerbase-mcp
```

Until the npm package is live, run it directly from GitHub:

```bash
npx -y github:zenlee123/routerbase-mcp
```

## Configuration

Create a RouterBase API key at [routerbase](https://routerbase.com) and set:

```bash
export ROUTERBASE_API_KEY=sk-rb-your-key
```

Optional overrides:

```bash
export ROUTERBASE_API_BASE_URL=https://routerbase.com/api/v1
export ROUTERBASE_OPENAI_BASE_URL=https://routerbase.com/v1
```

## Claude Desktop

```json
{
  "mcpServers": {
    "routerbase": {
      "command": "npx",
      "args": ["-y", "routerbase-mcp"],
      "env": {
        "ROUTERBASE_API_KEY": "sk-rb-your-key"
      }
    }
  }
}
```

## Cursor or other MCP clients

Use the same stdio command:

```json
{
  "command": "npx",
  "args": ["-y", "routerbase-mcp"],
  "env": {
    "ROUTERBASE_API_KEY": "sk-rb-your-key"
  }
}
```

## Development

```bash
npm install
npm run build
node dist/index.js
```

## Registry Submission

This repository includes:

- `server.json` for the official MCP Registry.
- `metadata/directory-listing.json` for MCP directories.
- `SUBMISSION_KIT.md` with listing copy for MCP.so, PulseMCP, Glama, Smithery, and GitHub lists.

The preferred listing sentence is:

> RouterBase MCP lets AI agents discover models, pricing, and chat completions through [routerbase](https://routerbase.com).

## License

MIT
