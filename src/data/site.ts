/**
 * 站点级配置 —— 改文案、导航、社交链接只动这一个文件
 */

export const SITE = {
  /** 站名，左边品牌位显示为 name-prefix + '-' + name-suffix */
  brandPrefix: 'AIOVTUE',
  brandSuffix: 'ze',
  title: 'ze · 个人门户',
  description: '个人主页 · 技术博客 · 导航收藏夹 · 在线工具',
  author: '李雨泽',
  role: '天津 · 软件工程<br>专升本备考中',
  /** 首页左栏那句话 */
  hitokoto: '「 当你想放弃的时候，想想为什么当初坚持走到了这里 」',
  /** 建站日期，用于算「已运行」 */
  since: '2026-09-11',
} as const;

/** 顶栏导航。iconColor 取自线上按路由逐条手配的暖色梯度 */
export const NAV = [
  { href: '/', label: '首页', shape: 'home', iconColor: '#e03131' },
  { href: '/blog/', label: '文章', shape: 'doc', iconColor: '#f03e3e' },
  { href: '/blog/categories/', label: '分类', shape: 'flower', iconColor: '#ff6b6b' },
  { href: '/blog/tags/', label: '标签', shape: 'bell', iconColor: '#ff922b' },
  { href: '/reference-ranking.html', label: '榜单', shape: 'link', iconColor: '#fab005' },
  { href: '/about/', label: '关于', shape: 'info', iconColor: '#fcc419' },
] as const;

/** 侧栏竖排导航（首页左栏） */
export const SIDE_NAV = [
  { href: '/', label: '首页', shape: 'home', iconColor: '#e03131' },
  { href: '/blog/', label: '归档', shape: 'doc', iconColor: '#f03e3e' },
  { href: '/blog/categories/', label: '分类', shape: 'flower', iconColor: '#ff6b6b' },
  { href: '/blog/tags/', label: '标签', shape: 'bell', iconColor: '#ff922b' },
  { href: '/about/', label: '关于', shape: 'info', iconColor: '#fcc419' },
] as const;

export const SOCIALS = [
  { href: 'https://github.com/021902341', label: 'GitHub', short: 'GH' },
  { href: 'mailto:ll3450705539@gmail.com', label: '邮箱', short: 'Mail' },
  { href: '/rss.xml', label: 'RSS', short: 'RSS' },
] as const;

/** 侧栏「快捷入口」—— 模块做好后把 soon 去掉 */
export const QUICK_LINKS = [
  { href: '/nav/', label: '导航收藏', soon: true },
  { href: '/tools/', label: '在线工具', soon: true },
  { href: '/reference-ranking.html', label: '建站选型榜单', note: '82 →' },
] as const;
