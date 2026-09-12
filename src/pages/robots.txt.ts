import type { APIRoute } from 'astro';

/**
 * robots.txt —— 动态端点，Sitemap 地址跟随构建时的 SITE_URL，
 * 两个部署平台各自生成正确的绝对地址。
 */
export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? 'https://ze.vercel.app/';
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', base).href}`,
    '',
  ].join('\n');
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
