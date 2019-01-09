<template>
    <div class="h-list">
        <div class="list" v-for="(item,index) in dataSource" :key="index" @click="itemClick(item)">
            <div class="flexBox">
                <div class="title1" v-if="item.processName">{{item.processName}}</div>
                <span class="tab" :class="item.taskColor" v-if="item.taskName">{{item.taskName}}</span>
            </div>
            <div class="title" v-if="item.title">{{item.title}}</div>
            <div class="time" v-if="item.time">{{item.time}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dataSource: {
            type: Array,
            default: []
        },
        onPress: {
            type: Function,
            default: () => {
                // silence
            }
        }
    },
    methods: {
        itemClick(item) {
            this.$emit("onPress", item);
        }
    }
};
</script>

<style lang="less" scoped>
@import "../../styles/reset.less";
@import "../../styles/public.less";
.h-list .list {
    &:active {
        background-color: #eee;
    }
    background-color: #fff;
    margin-bottom: 10px;
    padding: 15px;
    .flexBox {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;
        .tab {
            .tab;
            flex-shrink: 0;
        }
        .tab_lightblue {
            border-color: #21a59f;
            color: #21a59f;
        }
        .tab_red {
            border-color: #c64248;
            color: #c64248;
        }
        .tab_gray {
            border-color: #909399;
            color: #909399;
        }
        .title1 {
            font-size: 14px;
            color: #666666;
            line-height: 18px;
        }
    }
    .title {
        font-size: 17px;
        color: #000000;
        line-height: 24px;
        .overflowellipsis;
    }
    .time {
        font-size: 12px;
        color: #999999;
        margin-top: 10px;
    }
}
</style>
