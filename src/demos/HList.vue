<template>
  <div>
    <h-list :dataSource="listData" v-on:HREVENT_itemClick="itemClick">

    </h-list>
  </div>
</template>

<script>
import { HList } from "vux";
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



