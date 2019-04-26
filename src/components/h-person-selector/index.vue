<template>
    <div class="main_container_cls">
        <grid :cols="4">
            <grid-item
                v-for="(item, index) in userData"
                :key="index"
                :label="item.name"
                @click.native="selectUser"
                :class="hasSperateLine(index, userData.length)?'hr-border-bottom':''"
            >
                <x-icon
                    v-if="!item.addItem"
                    type="ios-minus"
                    size="28"
                    style="font-size:20px; color:#d81e06; position:absolute; top:5px; right:10px; fill:red"
                    @click="deletUser(item, $event)"
                ></x-icon>

                <img slot="icon" v-if="!item.addItem" :src="item.avatar_url">

                <x-icon
                    v-if="item.addItem"
                    slot="icon"
                    type="ios-plus"
                    size="28"
                    class="add_icon_cls"
                ></x-icon>
            </grid-item>
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

// import TransferDom from "@/directives/transfer-dom/index.js";

import HList from "../h-list/h-list";

export default {
    name: "HPersonSelector",
    // directives: {
    //     TransferDom
    // },
    props: {
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
        },
        multiSelect: {
            type: Boolean,
            default: false
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
            ],

            selectedUser: []
        };
    },
    methods: {
        hasSperateLine(index, sum) {
            let row = parseInt(sum/4)

            if (sum%4 == 0) {
                row = row - 1
            }

            if (row > 0) {
                let minIndex = 0
                let maxIndex = row*4
                if (index>= minIndex && index<maxIndex) {
                    return true
                }
            }
            return false;
        },
        deletUser(item, event) {
            // console.log(item);
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

            this.$emit(
                "selectedPersonChanged",
                this.userData.slice(0, this.userData.length - 1)
            );

            event.stopPropagation();
        },
        selectUser() {
            // console.log("selectUser");

            if (this.limited) {
                this.showPop = true;
            } else {
                if (this.multiSelect) {
                    MXContacts.selectUsers(
                        result => {
                            // console.log(result);
                            // this.userData = result.data;
                            // if(this.userData.length == 1){
                            //     this.userData = []
                            // }
                            var tem = this.userData.reverse();

                            result.data.forEach(element => {
                                this.selectedUser.push(element.id);
                                tem.push(element);
                            });

                            this.userData = tem.reverse();

                            this.$emit(
                                "selectedPersonChanged",
                                this.userData.slice(0, this.userData.length - 1)
                            );

                            // this.userData.push({
                            //     addItem: true,
                            //     name: "添加"
                            // });
                        }, //这里可以处理通讯录获取到的人员以及部门数据
                        false, //是否可以选中部门
                        [],
                        true,
                        false,
                        this.selectedUser //传入的人员 select user
                    );
                } else {
                    MXContacts.selectUser(
                        result => {
                            // console.log(result);
                            // this.userData = result.data;

                            if (this.userData.length == 2) {
                                this.userData = [
                                    {
                                        addItem: true,
                                        name: "添加"
                                    }
                                ];
                            }

                            this.userData.push(result.data);
                            this.userData = this.userData.reverse();

                            this.$emit(
                                "selectedPersonChanged",
                                this.userData.slice(0, 1)
                            );

                            // this.userData.push({
                            //     addItem: true,
                            //     name: "添加"
                            // });
                        }, //这里可以处理通讯录获取到的人员以及部门数据
                        false, //是否可以选中部门
                        [],
                        true,
                        false,
                        this.selectedUser //传入的人员 select user
                    );
                }
            }
        },
        limitedSelect(item) {
            if (this.multiSelect) {
                item.selected = !item.selected;
            } else {
                for (let i = 0; i < this.limitUserDataSource.length; i++) {
                    this.limitUserDataSource[i].selected = false;
                }

                item.selected = !item.selected;
            }
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

            this.$emit("selectedPersonChanged", this.userData);

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
    },
    destroyed() {
        this.selectedUser = [];
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

<style lang="less" scoped>
.cell-x-icon {
    display: block;
    fill: green;
}
.weui-grids:before {
    border-top: none !important;
}
.weui-grid:after {
    border-bottom: none;
}
// .weui-grid {
//     // background-color: red;

//     // border-top: 1px solid #d9d9d9;
// }
</style>


<style lang="less" scoped>
.main_container_cls {
    background-color: #ffffff;
    width: 100%;
    // height: 100%;
    // height: 60px;
}

.hr-border-bottom:after{
  border-bottom:1px solid #D9D9D9;
//   background-color: #D9D9D9;
  /* 如果不用 background-color, 使用 border-top:1px solid #D9D9D9; */
  -webkit-transform: scaleY(.3);
  transform:scaleY(.3);
}
</style>