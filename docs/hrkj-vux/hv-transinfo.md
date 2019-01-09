# 流转明细

流转明细组件

<trans-info />

### 引入

```js
import { HTransinfo } from "hrkj-vux-components";

export default {
  components: {
    HTransinfo
  }
};
```

### 使用

```vue
<template>
    <div>
        <h-transinfo :transDataModle="transinfoData"></h-transinfo>
    </div>
</template>

<script>

export default {
    data() {
        return {
            transinfoData: [
                {
                    id: "347692",
                    processInstanceId: null,
                    executionId: null,
                    name: "领导审批",
                    createTime: "2018-06-29 17:41",
                    startTime: "2018-06-29",
                    endTime: "2018-06-29 17:42",
                    durationInMillis: "66000",
                    dueDate: null,
                    deleteReason: null,
                    participant: {
                        id: "21631475849108832",
                        code: "wangzeyu@chamc.com.cn@25403",
                        name: "王凯",
                        org: "ORG100002274",
                        orgName: "软件开发部",
                        type: null
                    },
                    comment: {
                        id: null,
                        author: "wangzeyu@chamc.com.cn@25403",
                        message:
                            "reject|这里显示审批意见内容。这里显示审批意见内容。这里显示审批意见内容。 ",
                        createTime: null
                    }
                },
                {
                    comment: {
                        id: null,
                        author: "wangzeyu@chamc.com.cn@25403",
                        message:
                            "agree|这里显示审批意见内容。这里显示审批意见内容。这里显示审批意见内容。 ",
                        createTime: null
                    },
                    deleteReason: "string",
                    durationInMillis: 0,
                    endTime: "2018-08-23 06:20",
                    finished: true,
                    participant: {
                        id: "21631475849108832",
                        code: "wangzeyu@chamc.com.cn@25403",
                        name: "王泽宇",
                        org: "ORG100002274",
                        orgName: "软件开发部",
                        type: null
                    },
                    procDefId: "string",
                    startTime: "2018-08-23",
                    taskId: "string",
                    taskName: "string"
                },
                {
                    id: "12312323",
                    processInstanceId: "",
                    createTime: "2018-06-29 17:41",
                    startTime: "2018-06-29",
                    endTime: "2018-06-29 17:41",
                    durationInMillis: "0",
                    dueDate: null,
                    deleteReason: null,
                    participant: {
                        id: "21631480110521698",
                        code: "miaoshipeng@chamc.com.cn@25470",
                        name: "苗世鹏",
                        org: "ORG100002274",
                        orgName: "软件开发部",
                        type: null
                    },
                    comment: null
                }
            ]
        };
    },
    created() {
    },
    components: {
        HTransinfo
    }
};
</script>

```

#### 注：transinfoData的结构和key是与工作流系统中的key一一对应的，使用者只需把工作流系统返回的数据赋值给transinfoData就可以了。

<test />

|   属性   |  类型  | 默认值  | 说明     |
| :------: | :----: | :-----: | :------- |
|  transDataModle   | Array |  ---- | 数据源    |

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