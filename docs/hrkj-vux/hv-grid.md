# 网格（Grid）

网格组件

<grid />

### 引入

```js
import { HGrid } from "hrkj-vux-components";

export default {
  components: {
    HGrid
  }
};
```

### 使用

```vue
<template>
    <div>
        <h-grid :dataSource="componentListData" 
                @onPress="itemClick"></h-grid>
    </div>
</template>

<script>
import { HGrid } from "hrkj-vux-components";
export default {
    data() {
        return {
            componentListData: [
                {
                    name: "待办事宜",
                    iconClass: "ic-daiban-l",
                    fontSize: "30px",
                    color: "#47B3E1"
                },
                {
                    name: "问卷",
                    iconClass: "ic-wenjuan-l",
                    fontSize: "30px",
                    color: "#FFB000"
                },
                {
                    name: "已办事宜",
                    iconClass: "ic-huiyi-f",
                    fontSize: "30px",
                    color: "#47B3E1"
                },
                {
                    name: "办结事宜",
                    iconClass: "ic-huiyi-l",
                    fontSize: "30px",
                    color: "#47B3E1"
                },
                {
                    name: "已办事宜",
                    iconClass: "ic-huiyi-f",
                    fontSize: "30px",
                    color: "#47B3E1"
                },
                {
                    name: "办结事宜",
                    iconClass: "ic-huiyi-l",
                    fontSize: "30px",
                    color: "#47B3E1"
                },
                {
                    name: "待办事宜",
                    iconClass: "ic-daiban-l",
                    fontSize: "30px",
                    color: "#47B3E1"
                },
                {
                    name: "问卷",
                    iconClass: "ic-wenjuan-l",
                    fontSize: "30px",
                    color: "#FFB000"
                }
            ]
        };
    },
    mounted() {},
    methods: {
        itemClick(itemData) {
            alert(itemData.name);
        }
    },
    components: {
        HGrid
    }
};
</script>
```

<test />

|      属性      | 类型  | 默认值 | 说明   | 版本 |
| :------------: | :---: | :----: | :----- | :----- |
| dataSource | Array |  ----  | 数据源 | 0.0.11 |

<test backgroundColor="cadetblue"/>

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
