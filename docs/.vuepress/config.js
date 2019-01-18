module.exports = {
  title: "移动开发平台",
  description: "快速创建移动应用",
  head: [
    ['link', { rel: 'icon', href: `/doc.png` }]
  ],
  themeConfig: {
    nav: [
      { text: "模板工程", link: "/template/" },
      { text: "组件库", link: "/hrkj-vux/" },
      { text: "下载", link: "http://imapp.chamc.com.cn:1443/m" },
      { text: "Vux", link: "https://doc.vux.li/zh-CN/" },
      { text: "敏行", link: "https://www.minxing365.com/web/developer.html" }
    ],
    sidebar: {
      "/template/": [
        'envconfig',
        'proj-intro',
        'js-api',
        'request',
        'statistics',
        'debug',
        'package',
        'deployment'
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
