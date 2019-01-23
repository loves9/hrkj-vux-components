<template>
    <div>
        <h-button-group :dataSource="buttonArray" @onPress="itemClick"></h-button-group>
    </div>
</template>

<script>
import { HButtonGroup } from "vux";

export default {
    components: {
        HButtonGroup
    },
    data() {
        return {
            buttonArray: [
                {
                    name: "确定",
                    type: "primary"
                },
                {
                    name: "拒绝",
                    type: "warn"
                },
                {
                    name: "取消"
                },
                {
                    name: "转办"
                }
            ]
        };
    },
    methods: {
        itemClick(item) {
            console.log(item);
        }
    }
};
</script>

<style scoped>
</style>
