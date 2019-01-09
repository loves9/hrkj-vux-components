<template>
    <div class="h-transinfo">
        <div class="transinfoList" v-for="(item,index) in transDataModle" :key="index">
            <div class="flexBox">
                <div class="name">{{item.participant.name}}</div>
                <div class="text">{{item.name}}</div>

                <div class="layout_h" v-if="item.comment !=null && item.comment.message">
                    <div :class="splitOp(item.comment.message) == '拒绝'? 'tab_label_red_cls': 'tab_label_cls'">{{ splitOp(item.comment.message) }}</div>
                    <div class="triangle"></div>
                </div>
            </div>
            <div class="content" v-if="item.comment !=null && item.comment.message">{{ item.comment.message | splitCom }}</div>
            <div class="time">到达：{{item.startTime }}</div>
            <div class="time">完成：{{item.endTime}}</div>
            <span class="icon iconfont ic-duihao-yuan-f"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        transDataModle: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
        };
    },
    methods: {
        splitOp(val) {
            if (val == "" || val == null) {
                return "";
            } else {
                var op = val.split("|");
                if (op[0] == "agree") {
                    this.tabLabelColor = "#1e4a8d";

                    return "同意";
                } else if (op[0] == "terminate" || op[0] == "reject") {
                    this.tabLabelColor = "#C64248";
                    return "拒绝";
                }
            }
        }
    },
    filters: {
        splitCom(val) {
            if (val == "" || val == null) {
                return "";
            } else {
                var op = val.split("|");
                return op[1];
            }
        },
        timeFilter(val) {
            if (val == "" || val == null) {
                return "正在办理中...";
            }
            var time = val.split(" ");
            return time[0];
        }
    }
};
</script>

<style scoped>
.layout_h {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>


<style lang="less" scoped>
@import "../../styles/reset.less";
@import "../../styles/public.less";
.h-transinfo {
    background-color: #fff;
    .transinfoList {
        padding: 20px 20px 20px 56px;
        position: relative;
        .flexBox {
            display: flex;
            display: -webkit-flex;
            align-items: center;
            .name {
                font-size: 14px;
                color: #000000;
            }
            .text {
                font-size: 14px;
                color: #1e4a8d;
                margin: 0 10px 0 2px;
            }
            .tab_label_cls {
                // .tab;
                font-family: PingFangSC-Regular;
                font-size: 9px;
                color: #ffffff;
                text-align: center;
                background-color: #1e4a8d;
                padding: 0px 15px 0px 10px;
            }
            .tab_label_red_cls {
                // .tab;
                font-family: PingFangSC-Regular;
                font-size: 9px;
                color: #ffffff;
                text-align: center;
                background-color: #c64248;
                padding: 0px 15px 0px 10px;
            }
            .tabred {
                .tab(@tabcolor:#C64248);
            }
            .triangle {
                width: 0;
                height: 0;
                border-top: 8px solid transparent;
                border-right: 5px solid white;
                border-bottom: 8px solid transparent;
                margin-left: -5px;
            }
        }
        .content {
            font-size: 14px;
            color: #000000;
            margin-top: 10px;
        }
        .time {
            font-size: 12px;
            color: #999999;
            margin-top: 10px;
        }
        &:before {
            content: "";
            width: 2px;
            background: #298ccf;
            height: 100%;
            position: absolute;
            left: 30px;
            top: 38px;
        }
        &:after {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 11px;
            background: #298ccf;
            position: absolute;
            left: 26px;
            top: 28px;
            z-index: 1;
        }
        &:first-child:after {
            display: none;
        }
        &:last-child:before {
            display: none;
        }
        .ic-duihao-yuan-f {
            display: none;
        }
        &:first-child span.ic-duihao-yuan-f {
            display: block;
            position: absolute;
            left: 20px;
            top: 15px;
            font-size: 22px;
            color: #298ccf;
            z-index: 10;
        }
    }
}
</style>
