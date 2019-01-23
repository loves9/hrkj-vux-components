<template>
    <div class="main_container_cls">
        <div v-if="dataSource.length <= 3" class="button_container_cls">
            <x-button
                
                v-for="(item, index) in dataSource"
                :key="index"
                :type="item.type? item.type:'default'"
                class="button_cls"
                @click.native="buttonClick(item)"
            >{{item.name}}</x-button>
        </div>

        <div v-else class="button_container_cls">
            <x-button
                v-for="(item, index) in subDataSource"
                :key="index"
                :type="item.type? item.type:'default'"
                class="button_cls"
                @click.native="buttonClick(item)"
            >{{item.name}}</x-button>
            <x-button 
                class="button_cls"
                @click.native="moreButtonClick"
            >更多</x-button>
        </div>

        <div v-transfer-dom>
            <popup v-model="mutiButtonShow">
                <div v-for="(item, index) in dataSource" :key="index" class="button_item_cls">
                    <x-button
                        :ref="item.op"
                        :type="item.type? item.type:'default'"
                        class="button_cls"
                        @click.native="buttonClick(item)"
                    >{{ processButtonText(item.name) }}</x-button>
                </div>
            </popup>
        </div>
    </div>
</template>

<script>
import XButton from "../x-button/index";

// import TransferDom from "@/directives/transfer-dom/index.js";
import Popup from '../popup/index'

export default {
    name: "HButtonGroup",
    // directives: {
    //     TransferDom
    // },
    props: {
        dataSource: {
            type: Array,
            default: [
                {
                    name: "确定",
                    type: "primary"
                }
            ]
        }
    },
    data() {
        return {
            mutiButtonShow: false
        };
    },
    methods: {
        buttonClick(item) {
            this.mutiButtonShow = false
            this.$emit("onPress", item);
        },
        processButtonText(name) {
            var title = name;
            if (name.length > 3) {
                title = name.substring(0, 3) + "...";
            }
            return title;
        },
        moreButtonClick(){
            this.mutiButtonShow = true
        }
    },
    computed:{
        subDataSource(){
            // console.log(this.dataSource.slice(0, 2), 'aaa')
            // var subArray = this.dataSource.slice(0, 2)
            // subArray.push({
            //     name: '更多',
            //     tag: 'more'
            // })
            return this.dataSource.slice(0, 2)
        }
    },
    components: {
        XButton,
        Popup
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