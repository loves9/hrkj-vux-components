<template>
    <div>
        <h-grid :componentListData="componentListData" v-on:HREVENT_itemClick="itemClick"></h-grid>
    </div>
</template>

<script>
import { HGrid } from "vux";
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