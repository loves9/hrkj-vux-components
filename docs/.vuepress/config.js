module.exports = {
  base: '/mobile/',
  title: "移动开发平台",
  description: "快速创建移动应用",
  head: [
    ['link', { rel: 'icon', href: `/doc.png` }]
  ],
  themeConfig: {
    nav: [
      {
        text: '应用',
        items: [
          {
            text: '开发指引', link: "/template/"
          },
          {
            text: '真机调试', link: "/debug-web/"
          },
          {
            text: '打包', link: "/package-web/"
          },
          { text: "部署", link: "/deployment/" }
        ]
      },
      { text: "组件库", 
        items: [
          { text: 'hrkj-vux-components', 
            items: [
              {
                text: 'API', link: "/hrkj-vux/"
              },
              {
                text: 'Demo演示', link: "https://loves9.github.io/hrkj-vux-components-demo/index.html#/"
              }
            ] 
          }
        ] 
      },
      // { text: "集成", link: "/deployment/" },
      { text: "下载", link: "/download/" },
      { text: "Vux", link: "https://doc.vux.li/zh-CN/" }
    ],
    sidebar: {
      "/template/": [
        'summarize',
        {
          title: '开发规范',
          children: [
            'devrule'
          ]
        },
        {
          title: '开发指引',
          children: [
            'envconfig',
            'tem-start',
            'proj-intro',
            'js-api',
            'request',
            'statistics'
          ]
        }
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
