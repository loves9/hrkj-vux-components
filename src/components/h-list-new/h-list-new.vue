<template>
    <div class="h-list-new">
        <div class="listnew" v-for="(item,index) in dataSource" :key="index" @click="goDetail(item)">
            <div class="flexBox">
                <div class="title1" v-if="item.processName">{{item.processName}}</div>
                <span class="tab" :class="item.taskColor" v-if="item.taskName">{{item.taskName}}</span>
            </div>
            <div class="title" v-if="item.title">
                {{item.title}}
            </div>
            <slot name="otherContent" :otherContentList = "item.otherContentList">

            </slot>
            <div class="time" v-if="item.time">
                {{item.time}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        dataSource: {
            type: Array,
            default: []
        }
    },
    methods:{
        goDetail(item) {
            this.$emit("HREVENT_itemClick", item);
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../styles/reset.less";
@import "../../styles/public.less";
.h-list-new .listnew{
    &:active{
        background-color: #eee;
    }
    background-color: #fff;
    margin-bottom: 10px;
    padding: 15px;
    .flexBox{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .tab{
            .tab;
            flex-shrink:0;
        }
        .tab_lightblue{
            border-color: #21A59F;
            color: #21A59F;
        }
        .tab_red{
            border-color: #C64248;
            color: #C64248;
        }
        .tab_gray{
            border-color: #909399;
            color: #909399;
        }
        .title1{
            font-size: 14px;
            color: #666666;
            line-height: 18px;
        }
    }
    .title{
        font-size: 17px;
        color: #000000;
        line-height: 24px;
        margin-bottom: 6px;
        .overflowellipsis
    }
    .time{
        font-size: 12px;
        color: #999999;
        margin-top: 6px;
    }
}
</style>
