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
  /**
   * 首页左栏背景图。换成自己的图只需两步：
   *   1. 把图片放进 public/ 目录（建议命名为 hero.jpg）
   *   2. 把下面这行改成 '/你的文件名.jpg'
   * 建议规格：竖构图，宽 ≥ 1000px，比例约 3:4，单张 < 500KB（先压缩再放）
   * 暗色/浅色都合适的是柔和、低对比、留白多的图
   */
  heroImage: '/hero.jpg',
  /**
   * 首屏满屏 Hero 上的大标题。留空则用 brandPrefix。
   * 想要更醒目就写自己的名字或短 ID。
   */
  heroTitle: 'AIOVTUE',
  /** Hero 下方那句话（一言） */
  heroQuote: '「 我之所以那么努力，是为了活得轻松写意 」',
  /**
   * 全局特效开关（参考老站「樱花 + 萤火虫」的手作氛围）。
   * 只在「有鼠标 + 未开启系统减少动态」的设备生效，触屏自动跳过。
   */
  fx: {
    /** 自定义光标：主色小圆点即时跟随 + 外环延迟跟随，悬停可交互元素时张开 */
    cursor: true,
    /** 樱花花瓣飘落 + 暖黄萤火虫光点（canvas 粒子） */
    particles: true,
  },
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
