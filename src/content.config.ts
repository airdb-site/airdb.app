import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 应用条目 —— 新增一个应用 = 在 src/content/apps/ 下加一个 .md 文件。
 * platforms 支持:ios / android / miniprogram / web / agent
 * agent 为面向 AI 智能体的应用(如 MCP 服务),links.agentEndpoint 填服务地址。
 */
const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    platforms: z.array(z.enum(['ios', 'android', 'miniprogram', 'web', 'agent'])).min(1),
    status: z.enum(['online', 'beta', 'dev']).default('online'),
    category: z.string().default('工具'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    icon: z.string().default('✦'), // emoji,或 /images/... 图片路径
    links: z
      .object({
        appstore: z.string().url().optional(),
        googleplay: z.string().url().optional(),
        apk: z.string().optional(),
        web: z.string().url().optional(),
        qrcode: z.string().optional(), // 小程序码图片路径,放 public/ 下
        agentEndpoint: z.string().optional(), // MCP / Agent 服务地址
      })
      .default({}),
    releasedAt: z.coerce.date().optional(),
  }),
});

export const collections = { apps };
