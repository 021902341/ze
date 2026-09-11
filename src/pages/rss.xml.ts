import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { getPosts } from '../utils/site';

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// 手写 RSS，不引额外依赖（@astrojs/rss 只是包一层，这里够用）
export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const base = site ?? new URL('http://localhost:4321');
  const abs = (p: string) => new URL(p, base).href;

  const items = posts
    .map((post) => {
      const url = abs(`/blog/${post.id}/`);
      const desc = post.data.description
        ? `\n      <description>${esc(post.data.description)}</description>`
        : '';
      return `    <item>
      <title>${esc(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>${desc}
      <category>${esc(post.data.category)}</category>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.title)}</title>
    <link>${abs('/')}</link>
    <description>${esc(SITE.description)}</description>
    <language>zh-CN</language>
    <atom:link href="${abs('/rss.xml')}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
