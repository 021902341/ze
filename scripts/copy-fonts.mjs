/**
 * 把霞鹜文楷屏幕版的 webfont 分片从 node_modules 拷到 public/fonts/
 *
 * 为什么这么做：
 *  - 字体包 388 个 woff2 分片共约 20MB，全量提交进仓库太重
 *  - 改成 devDependency + 构建前拷贝，仓库里一份字体都不存
 *  - 分片 CSS 带 unicode-range，浏览器只会下载当前页面用到的汉字分片（通常几百 KB）
 *
 * 由 package.json 的 predev / prebuild 自动触发，平台侧只需正常 npm install + build。
 */
import { existsSync } from 'node:fs';
import { mkdir, cp, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'node_modules', 'lxgw-wenkai-screen-webfont');
const dest = join(root, 'public', 'fonts', 'lxgw');

if (!existsSync(src)) {
  console.warn('[fonts] 未找到 lxgw-wenkai-screen-webfont，跳过。请先运行 npm install。');
  process.exit(0);
}

await mkdir(dest, { recursive: true });

const css = 'lxgwwenkaigbscreen.css';
await cp(join(src, css), join(dest, css));
await cp(join(src, 'files'), join(dest, 'files'), { recursive: true });

const n = (await readdir(join(dest, 'files'))).length;
console.log(`[fonts] 已拷贝霞鹜文楷屏幕版：${css} + ${n} 个分片 → public/fonts/lxgw/`);
