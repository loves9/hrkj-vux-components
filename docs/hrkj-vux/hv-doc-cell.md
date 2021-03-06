# 文档（DocCell）

文档预览组件

<doc-cell />

### 引入

```js
import { HDocCell } from "hrkj-vux-components";

export default {
  components: {
    HDocCell
  }
};
```

### 使用

```jsx
<template>
  <div>
    <h-doc-cell
      title="2019年度计划"
      subTitle="200k"
      image="static/images/doc.png"
      <!-- :iconFont="iconFontClass" -->
    >
    </h-doc-cell>
  </div>
</template>

export default {
    components: {
        HDocCell
    },
    data() {
        return {
            iconFontClass: {
                iconClass: "ic-daiban-l",
                fontSize: "48px",
                color: "#47B3E1"
            }
        };
    }
};
```

<test />

|   属性   |  类型  | 默认值  | 说明     |
| :------: | :----: | :-----: | :------- |
|  title   | string |  ---- | 标题     |
| subTitle | string |  ----   | 子标题   |
|  image   | string | ---- | 图片路径 |
| iconFont | object |  ----   | 当组件设置iconFont属性时，image属性会失效 |

<style>
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
  table th:nth-of-type(4) {  
    width: 100%;
    white-space: nowrap;
  }
  
</style>
