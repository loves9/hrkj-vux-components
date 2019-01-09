<template>
    <div class="main_doc_cell">
        <div class="hdoc_container_cls">
            <i
                class="icon iconfont"
                :class="iconFont.iconClass"
                :style="{'font-size':iconFont.fontSize,'color':iconFont.color,'line-height':iconFont.fontSize}"
            ></i>
            
            <!-- <i :class="iconFont" style="font-size:48px; color:#1E4A8D; lineHeight:48px"></i> -->
            <img v-if="iconFont == ''" class="fileImg" :src="resolveSrc()">
            <div class="hdoc_title_container_cls" style="margin-left:10px;">
                <span class="hdoc_title_cls">{{title}}</span>
                <span class="hdoc_sub_title_cls">{{subTitle}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HDocCell",
    props: {
        title: {
            type: String,
            default: "附件"
        },
        subTitle: {
            type: String,
            default: "26.6k"
        },
        iconFont: {
            type: Object,
            default: {}
        },
        fontStyle: {
            type: String,
            default: ""
        },
        image: {
            type: String,
            default: ""
        }
    },
    created() {},
    destroyed() {},
    data() {
        return {};
    },
    methods: {
        resolveSrc() {
            if (this.image != "") {
                return this.image;
            }
        }
    },
    watch: {}
};
</script>

<style lang="less">
@import "../../styles/weui/widget/weui-agree/weui-agree.less";

.main_doc_cell {
    background-color: #fff;
    // height: 60px;
}

.hdoc_container_cls {
    display: flex; /*Flex布局*/
    align-items: center; /*指定垂直居中*/
    padding: 11px 11px 11px 15px;
}

.fileImg {
    width: 48px;
    height: 48px;
}

.hdoc_title_cls {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    line-height: 16px;
    color: #333333;
    letter-spacing: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    width: 40vh;
    white-space: nowrap; /*强制span不换行*/
    display: inline-block; /*将span当做块级元素对待*/
    margin-top: 2px;
}
.hdoc_sub_title_cls {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    margin-bottom: 2px;
    line-height: 12px;
    margin-top: 10px;
}

.hdoc_title_container_cls {
    display: flex; /*Flex布局*/
    align-items: flex-start; /*指定垂直居中*/
    flex-direction: column;
}
</style>