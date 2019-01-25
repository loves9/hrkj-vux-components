# 按钮组（ButtonGroup）

按钮组

<h-button-group />

### 引入

```js
import { HButtonGroup } from "hrkj-vux-components";

export default {
  components: {
    HButtonGroup
  }
};
```

### 使用

```vue
<template>
    <div>
        <h-button-group 
        :dataSource="buttonArray" 
        @onPress="itemClick"
        ></h-button-group>
    </div>
</template>

<script>
import { HButtonGroup } from "hrkj-vux-components";

export default {
    components: {
        HButtonGroup
    },
    data() {
        return {
            buttonArray: [
                {
                    name: "确定",
                    type: 'primary'
                },
                {
                    name: "拒绝",
                    type: 'warn'
                },
                {
                    name: "取消"
                }
            ]
        };
    },
    methods: {
        itemClick(item) {
            console.log(item)
        }
    }
};
</script>
```

<test />

|      属性      | 类型  | 默认值 | 说明   | 版本 |
| :------------: | :---: | :----: | :----- | :----- |
| dataSource | Array |  ----  | 数据源，接受一个Json数组，其中type分为：primary、warn、default，如果不设置，默认为default。默认展示三个按钮，如果大于三个则以“更多”的形势展示 | 0.0.11 |

<test backgroundColor="rgb(47, 64, 83)"/>

|      事件      | 参数  | 默认值 | 说明   | 版本 |
| :------------: | :---: | :----: | :----- | :----- |
| onPress | item |  ----  | 点击列表每条项目的回调监听方法 | 0.0.11 |


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
  table th:nth-of-type(4) {  
    width: 100%;
    white-space: nowrap;
  }
</style>
