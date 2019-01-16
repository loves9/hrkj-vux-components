<template>
    <div class="main_container_cls">
        <grid :show-lr-borders="false" :show-vertical-dividers="true" :cols="4">
            <div v-for="(item, index) in userData" :key="index">
                <grid-item :label="item.name" @click.native="selectUser">
                    <x-icon
                        v-if="!item.addItem"
                        type="ios-minus-outline"
                        size="30"
                        style="font-size:20px; color:red; position:absolute; top:5px; right:10px; fill:red"
                        @click="deletUser(item, $event)"
                    ></x-icon>
                    <!-- <x-icon type="ios-minus-outline" size="30"></x-icon> -->
                    <img v-if="!item.addItem" slot="icon" :src="item.avatar_url">

                    <x-icon
                        v-if="item.addItem"
                        slot="icon"
                        type="ios-plus-outline"
                        size="30"
                        class="add_icon_cls"
                        @icon-success-color="'red'"
                    ></x-icon>
                </grid-item>
            </div>
        </grid>

        <div v-transfer-dom>
            <popup v-if="limited" v-model="showPop" style="background-color:#f4f4f4" height="100%">
                <h-list :headHeight="46">
                    <div slot="head" class="hps_head_cls">
                        <div style="width:100%; padding-left: 10px">
                            <span style="color: #298CCF" @click="submit">确定</span>
                        </div>
                        <div style="width:100%; padding-right: 10px;" align="right">
                            <span style="color: #298CCF" @click="cancel">取消</span>
                        </div>
                    </div>
                    <div>
                        <flexbox orient="vertical">
                            <flexbox-item v-for="(item, index) in limitUserDataSource" :key="index">
                                <div class="select_item_cls" @click="limitedSelect(item)">
                                    <check-icon :value="item.selected"></check-icon>
                                    <h-doc-cell
                                        :title="item.name"
                                        :image="item.avatar_url"
                                        :subTitle="item.dept_name"
                                    ></h-doc-cell>
                                </div>
                            </flexbox-item>
                        </flexbox>
                    </div>
                </h-list>
            </popup>
        </div>
    </div>
</template>

<script>
import { Grid, GridItem } from "../grid/index";
import XIcon from "../icon/index";

import Popup from "../popup/index";
import { Flexbox, FlexboxItem } from "../flexbox/index";

import CheckIcon from "../check-icon/index";
import HDocCell from "../h-doc-cell/index";
import XButton from "../x-button/index";

import TransferDom from "@/directives/transfer-dom/index.js";

import HList from "../h-list/h-list";

export default {
    name: "HPersonSelector",
    directives: {
        TransferDom
    },
    props: {
        title: {
            type: String,
            default: "确定"
        },
        fontClass: String,
        limitUserDataSource: {
            type: Array,
            default: () => {
                return [];
            }
        },
        limited: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            showPop: false,

            userData: [
                {
                    addItem: true,
                    name: "添加"
                }
            ]
        };
    },
    methods: {
        deletUser(item, event) {
            console.log(item);
            // this.userData.pop(item);

            var temArr = [];
            for (let i = 0; i < this.userData.length; i++) {
                if (this.userData[i].name != item.name) {
                    temArr.push(this.userData[i]);
                }
            }
            this.userData = temArr;

            for (let i = 0; i < this.limitUserDataSource.length; i++) {
                if (this.limitUserDataSource[i].name == item.name) {
                    this.limitUserDataSource[i].selected = false;
                }
            }


            event.stopPropagation(); 
            
        },
        selectUser() {
            console.log("selectUser");
            this.showPop = true;
        },
        limitedSelect(item) {
            item.selected = !item.selected;
        },
        selectButtonClick() {},
        submit() {
            this.showPop = false;

            this.userData = [];

            for (let i = 0; i < this.limitUserDataSource.length; i++) {
                if (this.limitUserDataSource[i].selected) {
                    let item = {};
                    this.userData.push(this.limitUserDataSource[i]);
                }
            }

            this.userData.push({
                addItem: true,
                name: "添加"
            });
        },
        cancel() {
            this.showPop = false;
        }
    },
    components: {
        Grid,
        GridItem,
        XIcon,
        Popup,
        Flexbox,
        FlexboxItem,
        CheckIcon,
        HDocCell,
        XButton,
        HList
    }
};
</script>

<style>
.add_icon_cls {
    fill: #7a7e82;
}
.select_item_cls {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;

    padding-left: 10px;
}

.select_button_cls {
    position: fixed;
    bottom: 0px;

    height: 48px;
    margin: 10px;
}

.hps_head_cls {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    background-color: #ffffff;
    height: 46px;

    padding-left: 10px;

    /* position: fixed;
    top: 0; */
}
</style>

<style>
.vux-x-icon {

}
.cell-x-icon {
    display: block;
    fill: green;
}
</style>


<style lang="less" scoped>
.main_container_cls {
    background-color: #ffffff;
    width: 100%;
    // height: 100%;
    // height: 60px;
}
</style>