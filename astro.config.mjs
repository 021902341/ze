import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL 由部署平台注入：
//   海外站 https://ze.vercel.app
//   国内站 https://ze.edgeone.app
// canonical / sitemap / OGP 全部据此生成绝对地址，构建产物本身不区分域名。
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
