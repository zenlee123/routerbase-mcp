# RouterBase MCP Publishing Status

Checked on 2026-07-29.

## Published

- GitHub repository: https://github.com/zenlee123/routerbase-mcp
- Backlink anchor in README: `[routerbase](https://routerbase.com)`
- MCP.so listing: https://mcp.so/server/routerbase-mcp/zenlee123
- Glama listing: https://glama.ai/mcp/servers/zenlee123/routerbase-mcp
- Glama backlinks verified: visible `routerbase` anchors point to `https://routerbase.com/`

## Submitted / Pending

- MCP Market: submitted to the free queue with `support@routerbase.com`; site reported an estimated 4-6 week wait.
- mcpservers.org: submitted with `support@routerbase.com`; free-plan submission returned ID `4261` and status `pending`.
- Awesome MCP Servers by punkpeye: PR opened at https://github.com/punkpeye/awesome-mcp-servers/pull/9508 with `[routerbase](https://routerbase.com)` anchor text.
- aiagenta2z MCP Marketplace schema collection: PR opened at https://github.com/aiagenta2z/mcp-marketplace/pull/3 with `[routerbase](https://routerbase.com)` anchor text.
- TensorBlock Awesome MCP Servers / MCP Index: PR opened at https://github.com/TensorBlock/awesome-mcp-servers/pull/1090 with `[routerbase](https://routerbase.com)` anchor text.
- YuzeHao2023 Awesome MCP Servers: PR opened at https://github.com/YuzeHao2023/Awesome-MCP-Servers/pull/351 with `[routerbase](https://routerbase.com)` anchor text.
- mctrinh Awesome MCP Servers: PR opened at https://github.com/mctrinh/awesome-mcp-servers/pull/87 with `[routerbase](https://routerbase.com)` anchor text.
- habitoai Awesome MCP Servers: PR opened at https://github.com/habitoai/awesome-mcp-servers/pull/115 with `[routerbase](https://routerbase.com)` anchor text.
- DhanushNehru Awesome MCP Servers: PR opened at https://github.com/DhanushNehru/awesome-mcp-servers/pull/51 with `[routerbase](https://routerbase.com)` anchor text.
- Sagargupta16 Awesome MCP Servers: PR opened at https://github.com/Sagargupta16/awesome-mcp-servers/pull/65 with `[routerbase](https://routerbase.com)` anchor text.
- habitoai Awesome MCP Servers Directory: PR opened at https://github.com/habitoai/Awesome-MCP-Servers-directory/pull/32 with `[routerbase](https://routerbase.com)` anchor text.
- AwesomeMCP.io: submitted through the public form with `support@routerbase.com`; site returned the thank-you confirmation and says review normally takes 2-3 business days.

## Prepared

- Awesome MCP Servers PR patch: `submissions/awesome-mcp-servers-routerbase.patch`
- Awesome MCP Servers PR copy: `submissions/awesome-mcp-servers-pr.md`
- appcypher Awesome MCP Servers fork branch: `https://github.com/zenlee123/appcypher-awesome-mcp-servers/tree/add-routerbase-mcp`; GitHub PR API returned 404/permission errors for this upstream.
- serpvault Awesome MCP Servers fork branch: `https://github.com/zenlee123/serpvault-awesome-mcp-servers/tree/add-routerbase-mcp`; upstream repository is archived/read-only, so GitHub rejected PR creation.
- Cline Marketplace: 400x400 logo prepared at `metadata/routerbase-logo-400.png`; submission still requires verified Cline install testing.
- Docker MCP Registry: source repo Dockerfile prepared; PR requires Docker daemon for `task build` / validation, but this machine has Docker CLI without a running daemon or Docker Desktop.

## Blocked

- npm: dry-run passed and npm auth succeeded as `routerbase.com`; final publish is blocked by npm 2FA OTP (`EOTP`).
- Official MCP Registry: blocked until npm package is published because npm ownership is validated via `package.json#mcpName`.
- ToolSDK MCP Registry: blocked until npm package is published; its contribution guide requires a public package, Docker image, or remote MCP endpoint.
- MCP Find / mcpdir: blocked until npm or official registry publication, because those directories ingest package/registry sources or require a published package.
- MCP Marketplace: submit page redirects to login, so it cannot be submitted anonymously from this environment.
- MCP.so public page cache may lag edits to the primary Visit Server URL.
- PulseMCP: command-line access to `https://www.pulsemcp.com/submit` is blocked by Cloudflare.
