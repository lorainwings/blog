module.exports = {
  title: 'Lorain\'s个人主页',
  description: '记录技术&生活',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/base/hd-img.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/base/hd-img.jpg' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/blog/', // 部署到github相关的配置
  markdown: {
    // lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    // 开启全局搜索
    algolia: {
      apiKey: '073ffdb2ddd0fbaab10c0df456ca1b28',
      indexName: '8X72VKY0SJ'
    },
    nav: [ // 导航栏配置
      { text: '技术进阶', link: '/skills/' },
      { text: '算法相关', link: '/algorithm/' },
      { text: '记录生活', link: '/life/' },
      {
        text: 'Github', link: 'https://github.com/lorainwings', target: '_blank', rel: ''
      }
    ],
    sidebar: {
      '/skills/': [
        {
          title: 'Client & Side',
          children: [
            'Base64',
            'Promise',
            '图片分类',
            'Rxjs初探',
            'Generator',
            'Set & Map',
            'Babel杂谈',
            'H5定位API',
            'Event-loop',
            '服务器推送',
            '浏览器缓存',
            '前端安全防范',
            '初识Typescript',
            'Git 常用技巧',
            'Web性能优化'
          ]
        },
        {
          title: 'Build & Tools',
          children: [
            '简易打包工具实现',
            'Webpack基础知识',
            'Webpack模块实现',
            'Webpack异步加载'
          ]
        },
        {
          title: 'Design & Patterns',
          children: [
            '简易依赖注入实现',
            '发布订阅 & 观察者模式'
          ]
        },
        {
          title: 'Server & Side',
          children: [
            'Crontab',
            '查看日志',
            'Docker指南',
            'DockerForV2ray',
            'Nginx配置浅析'
          ]
        }
      ],
      '/algorithm/': [
        {
          title: '基础算法',
          children: [
            '递归算法'
          ]
        },
        {
          title: '高级算法',
          children: []
        }
      ],
      '/life/': [
        {
          title: '阅读书单',
          children: [
            '意志力'
          ]
        },
        {
          title: '日志专栏',
          children: []
        }
      ]
    },
    lastUpdated: '更新时间',
    smoothScroll: true,
    docsDir: 'docs'
  },
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/search',
    ['@vuepress/google-analytics', {
      ga: 'UA-151094245-1'
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => new Date(timestamp).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
    }],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content img',
      options: {
        template: '#zoom-container'
      }
    }]
  ]
};
