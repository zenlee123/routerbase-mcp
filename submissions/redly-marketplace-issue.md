## MCP Server Submission

Name: RouterBase MCP

Repository: https://github.com/zenlee123/routerbase-mcp

Website: https://routerbase.com

Description: RouterBase MCP lets AI agents discover models, compare pricing, and call OpenAI-compatible chat completions through [routerbase](https://routerbase.com).

Install/config:

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

Category: AI Services / API Development

Tags: mcp, routerbase, ai-models, llm, openai-compatible, model-router, pricing, chat-completions

Contact: support@routerbase.com
