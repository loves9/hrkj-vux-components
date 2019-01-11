| 修改人 | 修改时间 | 修改内容 | 对应模板工程version |
| :--- | :--- | :--- | :--- |
| 冯帅 | 2018年4月2日 | 初稿 | 1.0.0 |
| 冯帅 | 2018年5月9日 | 结构调整，增加创建module脚本等说明 | 2.0.0 |

# 概述

融讯通H5插件应用是利用html5插件技术，将应用静态文件预置在App中，可以极大地提高html5应用的响应速度，也为HTML5开发提供了大量的JS内置接口，给html5开发提供了大量原生操作能力。

# 其它

融讯通插件应用支持所有H5框架开发，但须满足以下目录结构

```
|-- plugin.properties       --敏行插件配置文件
|-- /www                    --敏行插件资源目录
    |-- index.html --html5应用入口文件
    |-- config.properties --html5应用配置文件
    |-- /images --图片目录（可选）
    |-- /styles --CSS样式目录（可选）
    |-- /scripts --JS脚本目录（可选）
```

打包需要minxing的打包插件，手动打包可能由于操作系统编码不同，输出的文件敏行平台无法识别。

#### 学习参考资料

1.vue官网：[https://cn.vuejs.org/](https://cn.vuejs.org/)

2.vux参考：[https://doc.vux.li/zh-CN/](https://doc.vux.li/zh-CN/)

3.webpack参考：[https://segmentfault.com/a/1190000006178770](https://segmentfault.com/a/1190000006178770)


<style scoped>
    table {
      width: 100%; /*表格宽度*/
      border-collapse: collapse; /*使用单一线条的边框*/
      empty-cells: show; /*单元格无内容依旧绘制边框*/
  }
	
  table th,td {
    height: 35px; /*统一每一行的默认高度*/
  }
	
  table th {
      font-weight: bold; /*加粗*/
      text-align: center !important; /*内容居中，加上 !important 避免被 Markdown 样式覆盖*/
      background: #ECF2F9; /*背景色*/
      white-space: nowrap; /*表头内容强制在一行显示*/
  }
	
  /* 隔行变色 */
  table tbody tr:nth-child(2n) {
      background: #F4F7FB; 
  }
  /* 悬浮变色 */
  /* table tr:hover {
      background: #B2B2B2; 
  }
	 */
  /* 首列不换行 */
  table td:nth-child(1) {
      white-space: nowrap; 
  }
  /* 指定列宽度 */
  table th:nth-of-type(3) {  
    width: 100%;
    white-space: nowrap;
  }
</style>