# ze · 个人门户站

个人主页 + 技术博客 + 导航收藏夹 + 在线工具。Astro 7 自研骨架，纯静态产物。

## 核心约束

- **不租服务器** —— 全部构建为静态文件
- **一份代码、同源双部署** —— 海外站与国内站共用同一仓库，靠 `SITE_URL` 环境变量区分
- 海外站：`ze.vercel.app`（备选 `ze.pages.dev`）
- 国内站：腾讯云 EdgeOne Pages → `ze.edgeone.app`

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产物输出到 dist/
npm run preview  # 本地预览构建产物
```

## 双站部署说明

站点级差异**全部走环境变量**，构建产物本身不区分域名：

| 变量 | 海外站 | 国内站 | 作用 |
|---|---|---|---|
| `SITE_URL` | `https://ze.vercel.app` | `https://ze.edgeone.app` | canonical / sitemap / OGP 绝对地址 |

两个平台各自连接本仓库并各自配置 `SITE_URL`，推 `main` 即双站同步更新。

## 目录结构

```
src/
├─ pages/            # 路由（Astro 文件路由）
├─ layouts/          # 布局
├─ components/       # 组件
├─ styles/global.css # design token 层（换主题只改这里）
├─ content/blog/     # 文章 Markdown ← Obsidian 挂载点
└─ data/             # 导航收藏夹等数据源
public/              # 原样拷贝到 dist/ 的静态资源
scripts/             # 构建脚本（字体子集化等）
```

## 写作工作流（Obsidian → 博客）

1. 把 `src/content/blog/` 作为 Obsidian 库中的写作目录
2. Obsidian 设置 → 文件与链接 → 附件默认位置 → 指定到 `src/content/blog/assets/`
3. **用标准 Markdown 图片语法 `![](./assets/xxx.png)`**，不要用 `![[xxx.png]]`（Astro 不认 wiki 语法）
4. frontmatter 写 `draft: true` 则不会进入生产构建
5. 提交并推送（本机用 GitHub Desktop 推送，绕开本地 git 的 SSL 问题）

## 已知坑

- 霞鹜文楷全量 20MB+，**禁止整体打包**；生产走 `pyftsubset` 子集化（挂在 `prebuild`）
- 不要依赖 Google Fonts，国内被墙
- 图片统一走 `astro:assets` 压缩，不要往仓库塞大原图
- Windows 上注意保持 LF 换行（已由 `.gitattributes` 强制）
