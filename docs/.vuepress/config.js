module.exports = {
  title: "移动开发平台",
  description: "快速创建移动应用",
  head: [
    ['link', { rel: 'icon', href: `/doc.png` }]
  ],
  themeConfig: {
    nav: [
      {
        text: '类别',
        items: [
          { 
            text: 'WEB应用',
            items: [
              {
                text: '框架模板', link: "/template/"
              },
              {
                text: '真机调试', link: "/debug-web/"
              },
              {
                text: '打包', link: "/package-web/"
              }
            ]           
          }
        ]
      },
      { text: "组件库", 
        items: [
          { text: 'hrkj-vux-compononts', 
            items: [
              {
                text: 'API', link: "/hrkj-vux/"
              },
              {
                text: 'Demo演示', link: "/template/"
              }
            ] 
          }
        ] 
      },
      { text: "部署", link: "/deployment/" },
      { text: "下载", link: "/download/" },
      { text: "Vux", link: "https://doc.vux.li/zh-CN/" },
      { text: "敏行", link: "https://www.minxing365.com/web/developer.html" }
    ],
    sidebar: {
      "/template/": [
        'envconfig',
        'proj-intro',
        'js-api',
        'request',
        'statistics'
      ],
      "/hrkj-vux/": [
        'hv-start',
        'hv-transinfo',
        'hv-list',
        'hv-doc-cell',
        'hv-grid',
        'hv-button-group',
        'hv-person-selector'
      ]
    }
  }
};
