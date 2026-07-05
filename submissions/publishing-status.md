# RouterBase MCP Publishing Status

Checked on 2026-07-05.

## Published

- GitHub repository: https://github.com/zenlee123/routerbase-mcp
- Backlink anchor in README: `[routerbase](https://routerbase.com)`

## Prepared

- Awesome MCP Servers PR patch: `submissions/awesome-mcp-servers-routerbase.patch`
- Awesome MCP Servers PR copy: `submissions/awesome-mcp-servers-pr.md`

## Blocked

- npm: local npm auth is missing; `npm whoami` returns `ENEEDAUTH`.
- Official MCP Registry: blocked until npm package is published because npm ownership is validated via `package.json#mcpName`.
- MCP.so: direct submit API returned `{"code":-1,"message":"no auth, please login"}`.
- PulseMCP: command-line access to `https://www.pulsemcp.com/submit` is blocked by Cloudflare.
- Glama and official-registry aggregators: no unauthenticated submit endpoint found; they depend on the official registry and curated GitHub lists.

