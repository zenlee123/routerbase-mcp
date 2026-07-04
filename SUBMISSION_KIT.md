# RouterBase MCP Submission Kit

Goal: publish RouterBase MCP wherever MCP servers can be submitted, and use the anchor text `[routerbase](https://routerbase.com)` where the directory permits markdown or HTML links.

## Canonical Listing Copy

Name:

```text
RouterBase MCP
```

Short description:

```text
MCP server for RouterBase model discovery, pricing lookup, and OpenAI-compatible chat calls.
```

Markdown description:

```markdown
RouterBase MCP lets AI agents discover models, pricing, and chat completions through [routerbase](https://routerbase.com). It connects MCP clients to RouterBase's OpenAI-compatible API, model catalog, model details, and pricing endpoints.
```

HTML description:

```html
RouterBase MCP lets AI agents discover models, pricing, and chat completions through <a href="https://routerbase.com">routerbase</a>. It connects MCP clients to RouterBase's OpenAI-compatible API, model catalog, model details, and pricing endpoints.
```

Repository URL:

```text
https://github.com/zenlee123/routerbase-mcp
```

Website:

```text
https://routerbase.com
```

Install config:

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

Tags:

```text
mcp, routerbase, ai-models, llm, openai-compatible, model-router, pricing, chat-completions
```

## Submission Targets

### Official MCP Registry

Use `server.json`.

1. Publish the npm package:

```bash
npm publish --access public
```

2. Authenticate and publish registry metadata:

```bash
mcp-publisher login github
mcp-publisher publish
```

Note: `server.json` currently uses the GitHub namespace `io.github.zenlee123/routerbase-mcp`. If publishing under a different GitHub user or organization, update both `package.json#mcpName` and `server.json#name`. If publishing under the custom-domain namespace `com.routerbase/mcp`, the publisher will require DNS or HTTP verification for `routerbase.com`.

### PulseMCP

PulseMCP ingests the Official MCP Registry. Submit there first, then use `https://www.pulsemcp.com/submit` if the listing needs manual adjustment.

Submit URL:

```text
https://github.com/zenlee123/routerbase-mcp
```

### MCP.so

Submit at `https://mcp.so/submit`.

Type:

```text
MCP Server
```

Name:

```text
RouterBase MCP
```

URL:

```text
https://github.com/zenlee123/routerbase-mcp
```

Server Config:

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

### Smithery

Smithery supports URL-based remote servers and local MCPB bundles. This package is currently a stdio npm server; package it as MCPB or deploy a Streamable HTTP wrapper before publishing there.

Suggested metadata source:

```text
metadata/smithery-server-card.json
```

Suggested listing copy:

```markdown
RouterBase MCP lets agents use [routerbase](https://routerbase.com) to discover model options, inspect pricing, and call OpenAI-compatible chat completions.
```

### Glama

Glama indexes and scans MCP servers. Use the repository URL and the canonical description when creating or requesting a listing.

Suggested listing copy:

```markdown
RouterBase MCP lets agents use [routerbase](https://routerbase.com) to search the RouterBase model catalog, inspect pricing, and make chat completion calls through one OpenAI-compatible API.
```

### Awesome MCP Servers Lists

Use this markdown row or bullet in GitHub pull requests:

```markdown
- [RouterBase MCP](https://github.com/zenlee123/routerbase-mcp) - MCP server for model discovery, pricing lookup, and chat completions through [routerbase](https://routerbase.com).
```

## Backlink QA

Before submitting each listing:

- Prefer markdown `[routerbase](https://routerbase.com)`.
- If markdown is not supported, use HTML `<a href="https://routerbase.com">routerbase</a>`.
- If links are separated from text fields, put `routerbase` in the title/description and `https://routerbase.com` in the website field.
- Do not stuff the anchor repeatedly; one clean contextual backlink per listing is safer.
