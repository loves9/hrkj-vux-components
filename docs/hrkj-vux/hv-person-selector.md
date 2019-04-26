# 人员选择器（PersonSelector）

选人组件

<h-person-selector />

### 引入

```js
import { HPersonSelector } from "hrkj-vux-components";

export default {
  components: {
    HPersonSelector
  }
};
```

### 使用

```vue
<template>
    <div style="margin-top: 20px">
        <h-person-selector
            :limited="false"
            :limitUserDataSource="limitUserData"
            @selectedPersonChanged="selectedUser"
        ></h-person-selector>
    </div>
</template>

<script>
import { HPersonSelector } from "hrkj-vux-components";

export default {
    components: {
        HPersonSelector
    },
    data() {
        return {
            limitUserData: [
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "周文舒",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "刘艳茹",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "张涛",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "韩梅梅",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "李磊",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "John",
                    dept_name: "经理",
                    selected: false
                }
            ]
        };
    },
    methods: {
        selectedUser(itemArray) {
            console.log(JSON.stringify(itemArray));
        }
    }
};
</script>
```

<test />

|      属性      | 类型  | 默认值 | 说明   | 版本 |
| :------------: | :---: | :----: | :----- | :----- |
| limitUserDataSource | Array |  ----  | 限制选人数据源，开放式选人不用设置 | 0.0.11 |
| limited | Boolean |  true  | 开放式还是限制式选人，默认为限制式选人。注：开发式选人必选在融讯通中运行才生效 | 0.0.11 |
| multiSelect | Boolean |  false  | 单选还是多选，默认为单选 | 0.0.11 |

<test backgroundColor="rgb(47, 64, 83)"/>

|      事件      | 参数  | 默认值 | 说明   | 版本 |
| :------------: | :---: | :----: | :----- | :----- |
| selectedPersonChanged | item |  ----  | 已选择人员的监听回调 | 0.0.11 |


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
