// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 同源双部署：海外站与国内站各配一份 SITE_URL 环境变量，
// canonical / sitemap / robots 全部由这个值推导，构建产物本身不区分域名。
const SITE_URL = process.env.SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
