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

## Verified Submission Queue

Checked on 2026-07-07. The GitHub repository, MCP.so listing, and Glama listing are live; MCP Market and mcpservers.org have been submitted for review; remaining targets are gated by npm authentication, directory login, or third-party PR flow.

| Priority | Target | Entry point | What to submit | Backlink handling |
| --- | --- | --- | --- | --- |
| 1 | GitHub repository | `https://github.com/zenlee123/routerbase-mcp` | Published. The repository is public and contains the README backlink. | README includes `[routerbase](https://routerbase.com)`. |
| 2 | npm | `npm publish --access public` | Blocked: this machine is not logged into npm. `routerbase-mcp` is still unclaimed on npm. | npm package metadata points homepage to `https://routerbase.com`. |
| 3 | Official MCP Registry | `mcp-publisher publish` | Blocked until npm is published; the official registry validates npm package ownership via `mcpName`. | Registry listing uses the repository and package metadata. |
| 4 | PulseMCP | `https://www.pulsemcp.com/submit` | Blocked by Cloudflare for command-line access. It also ingests the Official MCP Registry. | Use listing copy with `[routerbase](https://routerbase.com)` where accepted. |
| 5 | MCP.so | `https://mcp.so/server/routerbase-mcp/zenlee123` | Published. The public page is live; Visit Server cache may lag the saved website URL update. | Overview includes `[routerbase](https://routerbase.com)`. |
| 6 | Glama | `https://glama.ai/mcp/servers/zenlee123/routerbase-mcp` | Published from the GitHub repository. | Public page shows `routerbase` anchors pointing to `https://routerbase.com/`. |
| 7 | MCP Market | `https://mcpmarket.com/submit` | Submitted to the free queue with `support@routerbase.com`; site reported an estimated 4-6 week wait. | Submitted GitHub repository; README includes `[routerbase](https://routerbase.com)`. |
| 8 | mcpservers.org | `https://mcpservers.org/submit` | Submitted free-plan entry with `support@routerbase.com`; returned ID `4261` and status `pending`. | Submitted GitHub repository; README includes `[routerbase](https://routerbase.com)`. Premium dofollow option was not selected. |
| 9 | Awesome MCP lists | GitHub pull requests | PR patch prepared in `submissions/awesome-mcp-servers-routerbase.patch`. | The patch uses `[routerbase](https://routerbase.com)`. |

Submission status:

- GitHub repo is published at `https://github.com/zenlee123/routerbase-mcp`.
- MCP.so listing is published at `https://mcp.so/server/routerbase-mcp/zenlee123`.
- Glama listing is published at `https://glama.ai/mcp/servers/zenlee123/routerbase-mcp`.
- MCP Market free queue submission is pending review.
- mcpservers.org free-plan submission is pending review as ID `4261`.
- punkpeye Awesome MCP Servers PR is open at `https://github.com/punkpeye/awesome-mcp-servers/pull/9508`.
- aiagenta2z MCP Marketplace schema PR is open at `https://github.com/aiagenta2z/mcp-marketplace/pull/3`.
- TensorBlock Awesome MCP Servers / MCP Index PR is open at `https://github.com/TensorBlock/awesome-mcp-servers/pull/1090`.
- YuzeHao2023 Awesome MCP Servers PR is open at `https://github.com/YuzeHao2023/Awesome-MCP-Servers/pull/351`.
- appcypher Awesome MCP Servers fork branch is pushed at `https://github.com/zenlee123/appcypher-awesome-mcp-servers/tree/add-routerbase-mcp`, but upstream PR creation returned GitHub API 404/permission errors.
- npm dry-run passed; final publish is blocked by npm 2FA OTP (`EOTP`) after logging in as `routerbase.com`.
- Dockerfile is prepared in the source repo for a future Docker MCP Registry submission; Docker registry PR creation is blocked here because Docker CLI cannot connect to a running daemon.
- GitHub direct push works from this environment.
- GitHub App connector can read the repo but returned `403 Resource not accessible by integration` for file writes.
- Browser-based submission was avoided because several target sites require login/OAuth and can create public submissions under the user's identity.
- Direct command-line submission attempts were used where available.

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
