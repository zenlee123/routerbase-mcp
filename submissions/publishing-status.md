# RouterBase MCP Publishing Status

Checked on 2026-07-07.

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

## Prepared

- Awesome MCP Servers PR patch: `submissions/awesome-mcp-servers-routerbase.patch`
- Awesome MCP Servers PR copy: `submissions/awesome-mcp-servers-pr.md`
- appcypher Awesome MCP Servers fork branch: `https://github.com/zenlee123/appcypher-awesome-mcp-servers/tree/add-routerbase-mcp`; GitHub PR API returned 404/permission errors for this upstream.
- Cline Marketplace: 400x400 logo prepared at `metadata/routerbase-logo-400.png`; submission still requires verified Cline install testing.

## Blocked

- npm: dry-run passed and npm auth succeeded as `routerbase.com`; final publish is blocked by npm 2FA OTP (`EOTP`).
- Official MCP Registry: blocked until npm package is published because npm ownership is validated via `package.json#mcpName`.
- MCP.so public page cache may lag edits to the primary Visit Server URL.
- PulseMCP: command-line access to `https://www.pulsemcp.com/submit` is blocked by Cloudflare.
