---
title: 这是一篇草稿，线上看不到
description: 用来演示 draft 机制：本地 dev 能看到，线上构建会被自动过滤掉。
pubDate: 2026-09-11
category: 建站日志
tags: ['示例']
draft: true
---

把 frontmatter 里的 `draft` 改成 `true`，这篇文章就只会出现在本地开发环境（`npm run dev`），推上去构建时会被自动排除，线上看不到。

写一半的东西、还没校对完的笔记，都可以先这么放着。

想发布的时候，把 `draft` 改成 `false`，或者在 frontmatter 里整行删掉（默认就是 `false`）。

---

下面可以随便写点别的。

## 占位标题

正文内容。
