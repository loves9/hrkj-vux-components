<template>
    <div style="margin-top: 20px">
        <h-person-selector :limitUserDataSource="limitUserData"></h-person-selector>
    </div>
</template>

<script>
import { HPersonSelector } from "vux";

export default {
    components: {
        HPersonSelector
    },
    data() {
        return {
            limitUserData: [
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "周文舒",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "刘艳茹",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "张涛",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "韩梅梅",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "李磊",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "John",
                    dept_name: "经理",
                    selected: false
                }
            ]
        };
    }
};
</script>

<style scoped>
</style>
