module.exports = {
  title: 'Eureka-UI',
  description: 'eureka-ui Vite & Vue powered static site generator.',

  // 主题相关配置
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinksText: '哈？',
    repo: 'www.baidu.com',
    footer: {
      message: '12123131',
      copyright: '324244'
    },

    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            {
              text: '安装',
              link: '/guide/installation',
              text: '快速开始',
              link: '/guide/quickStart'
            }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Icon',
              link: '/component/icon'
            }
          ]
        }
      ]
    }
  }
}
