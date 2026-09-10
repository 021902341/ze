# 文章配图目录

图片放在这里，Markdown 里用**相对路径**引用：

    ![说明](./assets/图片名.png)

配合 Obsidian 设置（设置 → 文件与链接）：
- 「使用 Wiki 链接」→ **关闭**（否则生成 `![[图片]]`，Astro 不认）
- 「新附件的默认位置」→ 指定到 `src/content/blog/assets`

注意：本目录已在 content.config.ts 的 glob 里排除（`!assets/**`），
所以这里的 .md 文件不会被当成文章，可以放心放说明文档。
