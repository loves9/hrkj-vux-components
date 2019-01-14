<template>
    <div>
        <h-list
            ref="list"
            :dataSource="listData"
            :pullUpRefresh="true"
            :pullDownRefresh="true"
            @onPress="itemClick"
            @pullUpRefresh="pullUp"
            @pullDownRefresh="pullDown"
            :headHeight="100"
        >
            <!-- <div slot="head">
                <div style="background-color: blue; height:100px; width:100%"></div>
            </div> -->
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
                    time: "到达：2018-03-22"
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
            ],

            order: 0
        };
    },
    methods: {
        itemClick(item) {
            alert(item.title);
        },
        pullUp() {
            console.log("pullUp");

            for (let index = 0; index < 10; index++) {
                const element = {
                    title: "固定收益-新增菜单" + this.order,
                    processName: "分公司投放条件审批流程",
                    taskName: "部门负责人审核",
                    taskColor: "tab_blue",
                    time: "到达：2018-03-22"
                };

                this.listData.push(element);

                this.order += 1;
            }

            setTimeout(() => {
                this.$refs.list.finishPullUpRefresh(true);
            }, 2000);
        },
        pullDown() {
            setTimeout(() => {
                this.$refs.list.finishPullDownRefresh();
            }, 2000);
        }
    },
    components: {
        HList
    }
};
</script>



