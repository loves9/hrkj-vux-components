<template>
    <div class="h-flexbox vux-1px-b">
        <div class="h-flexbox-item vux-1px-b" v-for="(list, index) in componentListData" :key="index" @click="itemClick(list)">
            <div class="vux-1px-r">
                <i class="icon iconfont" :class="list.iconClass" :style="{'font-size':list.fontSize,'color':list.color,'line-height':list.fontSize}"></i>
                <p>{{list.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        componentListData: {
            type: Array,
            default: []
        }
    },
    methods: {
        itemClick(itemData) {
            this.$emit("HREVENT_itemClick", itemData);
        }
    }
};
</script>

<style lang="less" scoped>
@import "../../styles/1px.less";
.h-flexbox {
    display: flex;
    display: -webkit-flex;
    justify-content: left;
    background-color: #fff;
    flex-wrap: wrap;
}
.h-flexbox-item {
    width: 25%;
    text-align: center;
    height: 93px;
    & div {
        display: block;
        padding: 19px 0;
        height: 55px;
    }
    & div p {
        font-size: 14px;
        color: #000000;
        margin-top: 5px;
    }
}
</style>
