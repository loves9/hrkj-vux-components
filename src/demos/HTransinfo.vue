<template>
    <div>
        <h-transinfo :transDataModle="transinfoData"></h-transinfo>
    </div>
</template>

<script>
import { HTransinfo } from "vux";
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



