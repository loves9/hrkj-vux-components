<template>
    <div class="h-flexbox vux-1px-b">
        <div
            class="h-flexbox-item vux-1px-b"
            v-for="(item, index) in dataSource"
            :key="index"
            @click="itemClick(item)"
        >
            <div class="vux-1px-r">
                <i
                    class="icon iconfont"
                    :class="item.iconClass"
                    :style="{'font-size':item.fontSize,'color':item.color,'line-height':item.fontSize}"
                ></i>
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dataSource: {
            type: Array,
            default: []
        }
    },
    methods: {
        itemClick(itemData) {
            this.$emit("onPress", itemData);
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
