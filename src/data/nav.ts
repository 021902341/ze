/**
 * 导航收藏夹数据 —— 按分组维护，改收藏只动这一个文件。
 * color 取自品牌暖色梯度，首字符色块用。
 */

export interface NavItem {
  name: string;
  href: string;
  desc: string;
  color: string;
}

export interface NavGroup {
  group: string;
  items: NavItem[];
}

export const NAV_BOOKMARKS: NavGroup[] = [
  {
    group: '开发',
    items: [
      { name: 'GitHub', href: 'https://github.com', desc: '代码托管与开源社区', color: '#e03131' },
      { name: 'Vercel', href: 'https://vercel.com', desc: '海外静态部署，本站海外站在这', color: '#f03e3e' },
      { name: 'EdgeOne Pages', href: 'https://console.cloud.tencent.com/edgeone/pages', desc: '腾讯云国内静态部署，免备案', color: '#ff6b6b' },
      { name: 'Cloudflare', href: 'https://dash.cloudflare.com', desc: 'CDN / Workers / DNS 全家桶', color: '#ff8787' },
      { name: 'Astro 文档', href: 'https://docs.astro.build/zh-cn/', desc: '本站的框架，中文文档', color: '#ffa8a8' },
      { name: 'MDN', href: 'https://developer.mozilla.org/zh-CN/', desc: 'Web 技术权威参考', color: '#ff922b' },
      { name: 'Can I Use', href: 'https://caniuse.com', desc: '浏览器兼容性查询', color: '#fd7e14' },
    ],
  },
  {
    group: 'AI 工具',
    items: [
      { name: 'DeepSeek', href: 'https://chat.deepseek.com', desc: '国产推理模型，免费额度大', color: '#fab005' },
      { name: 'Kimi', href: 'https://www.kimi.com', desc: '长文本阅读与总结', color: '#fcc419' },
      { name: 'ChatGPT', href: 'https://chatgpt.com', desc: 'OpenAI 对话模型', color: '#ffd43b' },
      { name: '通义千问', href: 'https://www.tongyi.com', desc: '阿里大模型，国内直连', color: '#ffc078' },
    ],
  },
  {
    group: '设计资源',
    items: [
      { name: 'wallhaven', href: 'https://wallhaven.cc', desc: '高质量壁纸，Hero 图来源', color: '#e599f7' },
      { name: 'Iconfont', href: 'https://www.iconfont.cn', desc: '阿里矢量图标库', color: '#da77f2' },
      { name: 'Coolors', href: 'https://coolors.co', desc: '配色方案生成器', color: '#cc5de8' },
      { name: 'Google Fonts', href: 'https://fonts.google.com', desc: '免费 Web 字体', color: '#be4bdb' },
    ],
  },
  {
    group: '学习',
    items: [
      { name: 'B 站', href: 'https://www.bilibili.com', desc: '视频教程主阵地', color: '#74c0fc' },
      { name: '菜鸟教程', href: 'https://www.runoob.com', desc: '编程入门速查', color: '#4dabf7' },
      { name: '掘金', href: 'https://juejin.cn', desc: '前端技术社区', color: '#339af0' },
      { name: '知乎', href: 'https://www.zhihu.com', desc: '问答与专栏', color: '#228be6' },
    ],
  },
  {
    group: '摸鱼',
    items: [
      { name: '微博', href: 'https://weibo.com', desc: '热搜与新鲜事', color: '#ffa94d' },
      { name: '小红书', href: 'https://www.xiaohongshu.com', desc: '生活灵感社区', color: '#ff922b' },
      { name: '网易云音乐', href: 'https://music.163.com', desc: '写代码时的背景音', color: '#fd7e14' },
    ],
  },
] as const;
