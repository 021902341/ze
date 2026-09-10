import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * 博客集合
 *
 * 注意 Astro 5+ 的写法：必须在 src/content.config.ts（不是 src/content/config.ts），
 * 且必须显式提供 loader —— 旧的 `type: 'content'` 写法已被标记为 legacy。
 * 另外 astro:content 不再导出 z，zod 要从 astro/zod 引。
 */
const blog = defineCollection({
  // assets/ 是文章配图目录，必须排除，否则会被当成文章去解析 frontmatter
  loader: glob({ pattern: ['**/*.md', '!assets/**'], base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    author: z.string().default('ze'),
  }),
});

export const collections = { blog };
