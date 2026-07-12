---
# ⚠️ 示例数据:请替换为真实应用信息
name: Memo Agent 服务
tagline: 为 AI 智能体设计的记忆服务 —— Agent 可通过 MCP 协议读写长期记忆。
platforms: [agent]
status: dev
category: Agent 基础设施
featured: true
order: 4
icon: 🤖
links:
  agentEndpoint: https://mcp.airdb.app/memo
  web: https://airdb.app/apps/memo-agent/
---

## 这是什么

Memo Agent 是我们面向 **AI 智能体** 的第一个应用:它不是给人用的,而是给 Agent 用的。任何支持 MCP(Model Context Protocol)的智能体都可以接入,获得持久化的长期记忆能力。

## 为什么做给 Agent 的应用

我们相信,未来应用的用户不只是人,还有各种各样的智能体。Agent 也需要自己的工具:记忆、日程、支付、消息……airdb 应用中心会陆续为它们提供这类服务。

## 接入方式

在支持 MCP 的客户端中添加服务地址即可:

```
https://mcp.airdb.app/memo
```

- 读写长期记忆:`memo.save` / `memo.recall`
- 语义检索:按含义而非关键词查找
- 多租户隔离:每个 Agent 的记忆彼此独立
