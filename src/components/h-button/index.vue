<template>
    <div class="main_container_cls">
        <div class="button_container_cls">
            <x-button type="primary" class="button_cls">{{title}}</x-button>
            <x-button class="button_cls">{{title}}</x-button>
            <x-button class="button_cls">{{title}}</x-button>
        </div>
    </div>
</template>

<script>
import XButton from "../x-button/index";

export default {
    name: "HButton",
    props: {
        title: {
            type: String,
            default: "确定"
        }
    },
    data() {
        return {};
    },
    methods: {},
    components: {
        XButton
    }
};
</script>

<style lang="less" scoped>
.main_container_cls {
    // background-color: coral;
    width: 100%;
    height: 100%;
    // height: 60px;
}

.button_cls {
    height: 52px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.button_container_cls {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    width: 100%;

    position: fixed;
    left: 0;
    right: 0;
    // top: 0px;
    bottom: 0px;

    // background-color: aquamarine;

    .button_item_cls {
        -webkit-flex: 1;
        flex: 1;
    }
}
</style>