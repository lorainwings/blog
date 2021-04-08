module.exports = {
  title: 'Lorain\'s Diary',
  description: '山中樗栎年年在 & 看尽西风木槿花',
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
      { text: '📜前端技术', link: '/skills/' },
      { text: '📊计算机基础', link: '/algorithm/' },
      { text: '🍀其他记录', link: '/life/' },
      {
        text: '⭐️Github', link: 'https://github.com/lorainwings', target: '_blank', rel: ''
      }
    ],
    sidebar: {
      '/skills/': [
        {
          title: 'JS语言基础',
          children: [
            'Promise',
            'Generator',
            'Set & Map',
            'Event-loop',
            '读你不知道的JS',
            '正则表达式小知识',
            '浏览器界面更新流程',
            'JS编译过程分析'
          ]
        },
        {
          title: 'H5及框架',
          children: [
            'Base64',
            '图片分类',
            'Rxjs初探',
            'H5定位API',
            '初识Typescript',
            'Git 常用技巧',
            'WebWorker实践小结',
            'React生态中的设计理论'
          ]
        },
        {
          title: '前端工程化',
          children: [
            'Babel杂谈',
            '简易打包工具实现',
            'Webpack基础知识',
            'Webpack模块实现',
            'Webpack异步加载',
            'Webpack源码流程分析'
          ]
        },
        {
          title: '安全及性能优化',
          children: [
            '浏览器缓存',
            '前端安全防范',
            'Web性能优化',
            '性能优化总结',
            '前端监控及上报'
          ]
        },
        {
          title: '服务端入门',
          children: [
            '服务器推送',
            'Crontab',
            '查看日志',
            'Docker指南',
            'DockerForV2ray',
            'Nginx配置浅析',
            'HTTP协议备忘录'
          ]
        }
      ],
      '/algorithm/': [
        {
          title: '设计模式',
          children: [
            '简易依赖注入实现',
            '发布订阅 & 观察者模式'
          ]
        },
        {
          title: '数据结构',
          children: []
        },
        {
          title: '算法刷题',
          children: [
            '递归算法'
          ]
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
    // lastUpdated: '更新时间',
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
    // ['@vuepress/last-updated', {
    //   transformer: (timestamp, lang) => new Date(timestamp).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
    // }],
    ['@vuepress/medium-zoom', {
      selector: 'img.image-conclude',
      options: {
        margin: 16
      }
    }]
  ]
};
