# 列表

list 组件

<list />

### 引入

```js
import { HList } from "hrkj-vux-components";

export default {
  components: {
    HList
  }
};
```

### 使用

```vue
<template>
  <div>
    <h-list :dataSource="listData" @onPress="itemClick">

    </h-list>
  </div>
</template>

<script>
import { HList } from "hrkj-vux-components";
export default {
    data() {
        return {
            listData: [
                {
                    title: "固定收益-新增菜单",
                    processName: "分公司投放条件审批流程",
                    taskName: "部门负责人审核",
                    taskColor: "tab_blue",
                    time: "到达：2018-03-22",
                },
                {
                    title: "用户需求说明书-【YG-HB17171-A】【公文系统-华融简…",
                    processName: "放条件审批流程",
                    taskName: "分公司投放条件审批流程复核",
                    taskColor: "tab_lightblue",
                    time: "到达：2018-03-22"
                },
                {
                    title: "固定收益-新增菜单",
                    processName: "分公司投放条件审批流程",
                    taskName: "部门负责人审核",
                    taskColor: "tab_red",
                    time: "到达：2018-03-22"
                },
                {
                    title:
                        "固定收益-新增菜单用户需求说明书-【YG-HB17171-A】【公文系统-华融简用户需求说明书-【YG-HB17171-A】【公文系统-华融简",
                    processName: "分公司投放条件审批流程",
                    taskName: "部门负责人审核",
                    taskColor: "tab_gray",
                    time: "到达：2018-03-22"
                },
                {
                    title: "固定收益-新增菜单",
                    processName: "分公司投放条件审批流程",
                    taskName: "部门负责人审核",
                    time: "到达：2018-03-22"
                },
                {
                    title: "固定收益-新增菜单",
                    processName: "分公司投放条件审批流程",
                    taskName: "部门负责人审核",
                    time: "到达：2018-03-22"
                },
                {
                    title: "固定收益-新增菜单",
                    processName: "分公司投放条件审批流程",
                    taskName: "部门负责人审核",
                    taskColor: "tab_blue",
                    time: "到达：2018-03-22"
                },
                {
                    title: "固定收益-新增菜单",
                    processName: "分公司投放条件审批流程",
                    taskName: "部门负责人审核",
                    taskColor: "tab_blue",
                    time: "到达：2018-03-22"
                }
            ]
        };
    },
    methods: {
        itemClick(item) {
            alert(item.title);
        }
    },
    components: {
        HList
    }
};
</script>
```

<test />

|      属性      | 类型  | 默认值 | 说明   | 版本 |
| :------------: | :---: | :----: | :----- | :----- |
| dataSource | Array |  ----  | 数据源 | 0.0.10 |

<test backgroundColor="cadetblue"/>

|      事件      | 参数  | 默认值 | 说明   | 版本 |
| :------------: | :---: | :----: | :----- | :----- |
| onPress | listData的item |  ----  | 点击列表每条项目的回调监听方法 | 0.0.11 |

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
    /* white-space: nowrap; */
  }
</style>
