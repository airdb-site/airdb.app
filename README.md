# airdb.app · 应用中心

展示我们出品的应用 —— 小程序、iOS、Android、Web,以及未来面向 AI 智能体(Agent)的应用。

## 1. 页面结构

| 路径 | 说明 |
|------|------|
| `/` | 首页:品牌 Hero(星空 Canvas)+ 精选应用 + Agent 愿景 |
| `/apps/` | 全部应用,支持按平台筛选(`?platform=agent` 可直达) |
| `/apps/<slug>/` | 应用详情页,由 Markdown 自动生成 |

## 2. 新增 / 维护应用

每个应用是 `src/content/apps/` 下的一个 `.md` 文件,文件名即详情页 slug。

```yaml
---
name: 应用名称
tagline: 一句话介绍(卡片上显示)
platforms: [miniprogram]   # ios / android / miniprogram / web / agent,可多选
status: online             # online 已上线 / beta 内测中 / dev 开发中
category: 效率
featured: true             # 是否出现在首页精选
order: 1                   # 列表排序,越小越靠前
icon: 🔖                   # emoji,或 /images/xxx.png 图片路径
links:
  appstore: https://apps.apple.com/app/idXXXX
  googleplay: https://play.google.com/store/apps/details?id=XXXX
  apk: /downloads/xxx.apk
  web: https://example.com
  qrcode: /images/xxx-qrcode.png   # 小程序码,图片放 public/images/
  agentEndpoint: https://mcp.airdb.app/xxx  # Agent 应用的 MCP 服务地址
releasedAt: 2025-06-01
---

正文为 Markdown,自动渲染到详情页(功能介绍、使用方式等)。
```

> ⚠️ 当前 `src/content/apps/` 内为示例数据,请替换为真实应用。

字段校验规则见 `src/content.config.ts`,平台/状态的展示文案见 `src/lib/platforms.ts`。

## 3. 本地开发

```sh
make install   # pnpm install --frozen-lockfile
make run       # pnpm dev
make build     # pnpm build → dist/
```

## 4. 技术方案

| 项 | 选型 | 理由 |
|----|------|------|
| 框架 | **Astro**(静态优先,Islands 按需交互) | 内容型官网首选:零 JS 起步、性能极佳、SEO 友好 |
| 包管理 | pnpm | 已定 |
| 构建/任务 | Makefile(`make install / run / build`) | 已定,保持现状 |
| 样式 | Tailwind CSS 4 + 少量自定义 CSS(动效) | 快速迭代 + 设计一致性 |
| 内容 | Astro Content Collections(Markdown) | 应用条目内容驱动,便于持续更新 |
| 交互点缀 | 原生 Canvas 星空 / 滚动动效(IntersectionObserver) | 不引入重型 3D 依赖,保证加载速度 |
| 部署 | GitHub Pages(`.github/workflows/deploy-docs.yml`,push 即发布,CNAME airdb.app) | 已配置 |

## 5. 面向 Agent 的规划

应用的用户不只是人,还会有智能体。Schema 已预留:

- `platforms` 支持 `agent` 类型;
- `links.agentEndpoint` 存放 MCP 等协议的服务地址,详情页会渲染专属的接入信息卡片。

后续可扩展:Agent 应用清单的机器可读版本(如 `/agents.json` 或 llms.txt),让智能体可以自动发现并接入这里的服务。
