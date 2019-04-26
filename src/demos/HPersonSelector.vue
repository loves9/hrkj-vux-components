<template>
    <div style="margin-top: 100px">
        <h-person-selector
            :limited="true"
            :multiSelect="true"
            :limitUserDataSource="limitUserData"
            @selectedPersonChanged="selectedUser"
        ></h-person-selector>
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
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "John",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "John",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "John",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "John",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://bak-sys-mobserver.chamc.com.cn/photos/user_photo_4",
                    name: "John",
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

<style scoped>
</style>
