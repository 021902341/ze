---
title: Astro 5 之后，内容层写法变了不少
description: defineCollection 必须带 loader，配置文件换了位置，连 zod 都不能从 astro:content 引了。记一下这次踩到的三个点。
pubDate: 2026-09-10
category: 前端工程
tags: ['Astro', '踩坑', 'Markdown']
draft: false
---

从 Astro 4 跨到 7，内容层（Content Collections）几乎是重写了一遍。网上搜到的多数教程还是旧写法，照抄会直接报错。记三个最容易踩的。

## 一、配置文件换了名字和位置

旧写法是 `src/content/config.ts`，新的是 **`src/content.config.ts`** —— 从 `content/` 目录里挪到了 `src/` 下面。

旧的还是兼容的，但 Astro 会提示你这是 legacy 用法。新项目直接按新的来。

## 二、每个集合必须显式声明 `loader`

这是最大的一处变化。以前只要有个 `type: 'content'` 就够了，现在必须告诉 Astro「内容从哪儿来」：

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: /* ... */,
});
```

少了 `loader` 会直接抛错，提示你集合用了 legacy 特性。

好处是这套抽象现在也支持从远程 API、数据库拉数据了，不只是读本地 Markdown。

## 三、`z` 不再从 `astro:content` 导出

这个坑最隐蔽，因为报错信息指向的位置很迷惑：

```ts
// ❌ 报错
import { defineCollection, z } from 'astro:content';

// ✅ 正确
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
```

`astro:content` 现在只导出 `getCollection`、`getEntry`、`getEntries`、`render`、`reference` 这几个查询 API，zod 单独走 `astro/zod` 这个入口。

> 顺带一提，Astro 内置的是 **zod 4**。如果从旧项目搬 schema 过来，注意 zod 3 → 4 之间自己也有一些破坏性变更。

## 查询的时候没什么变化

`getCollection` 和 `render` 的用法跟以前一样，这部分可以放心：

```ts
const posts = await getCollection('blog', ({ data }) => {
  return !data.draft || import.meta.env.DEV;
});

const { Content, headings } = await render(entry);
```

草稿过滤放在第二参数的 filter 里，用 `import.meta.env.DEV` 保证本地开发时草稿可见、线上构建被排除——这样就能一边写一边预览。

## 小结

| 项目 | 旧（Astro 4） | 新（Astro 5+） |
|---|---|---|
| 配置文件 | `src/content/config.ts` | `src/content.config.ts` |
| 集合定义 | `type: 'content'` | `loader: glob({...})` |
| zod 来源 | `astro:content` | `astro/zod` |
| 查询 API | 不变 | 不变 |

升级的时候真正要动的就是前三行，剩下的迁移成本比想象中低。
