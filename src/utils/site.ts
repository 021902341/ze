import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// 站点文案统一在 src/data/site.ts，这里不再重复定义 SITE

/** 草稿只在开发环境可见，生产构建自动排除 */
export function isVisible(entry: Post): boolean {
  return !entry.data.draft || import.meta.env.DEV;
}

/** 按发布日期倒序 */
export function byDateDesc(a: Post, b: Post): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

/** 取所有可见文章，已按发布日期倒序 */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('blog', isVisible);
  return all.sort(byDateDesc);
}

/** YYYY-MM-DD */
export function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/** 粗略阅读时长（分钟）：中文按字符估算，代码块不计入 */
export function readingTime(body?: string): number {
  const text = (body ?? '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^\s*\|.*\|\s*$/gm, '')
    .replace(/\s+/g, '');
  return Math.max(1, Math.round(text.length / 350));
}

export const postHref = (p: Post): string => `/blog/${p.id}/`;
export const categoryHref = (c: string): string => `/blog/categories/${encodeURIComponent(c)}/`;
export const tagHref = (t: string): string => `/blog/tags/${encodeURIComponent(t)}/`;

/** 统计出现次数并降序排列 */
export function countBy(values: string[]): Array<[string, number]> {
  const map = new Map<string, number>();
  for (const v of values) map.set(v, (map.get(v) ?? 0) + 1);
  return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh'));
}
