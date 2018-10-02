module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '开发指南',
      description: '🛠️ 项目架构和公用服务文档'
    },
  },
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    // repo: 'vue-starter',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: false,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [],
        sidebar: {
          '/guide/': [
            '/guide/',
            {
              title: 'Basics',
              collapsable: false,
              children: [
                '/guide/prototyping',
              ]
            },
          ],
        }
      },
    }
  }
}
