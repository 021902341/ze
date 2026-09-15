import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * 极简 rehype 插件（零依赖）：给 Markdown 渲染出的 <img> 补上
 * loading="lazy" + decoding="async"，正文配图不再拖慢首屏。
 * 已在 Markdown 里显式写死的属性不覆盖。
 */
function rehypeLazyImages() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'element' && node.tagName === 'img') {
        node.properties = node.properties || {};
        if (node.properties.loading === undefined) node.properties.loading = 'lazy';
        if (node.properties.decoding === undefined) node.properties.decoding = 'async';
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);
  };
}

// SITE_URL 由部署平台注入：
//   海外站 https://ze.vercel.app
//   国内站 https://ze.edgeone.app
// canonical / sitemap / OGP 全部据此生成绝对地址，构建产物本身不区分域名。
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // 站内链接悬停/进入视口即预取，配合 View Transitions 做到接近瞬时的跳转
  prefetch: true,
  markdown: {
    rehypePlugins: [rehypeLazyImages],
  },
});
