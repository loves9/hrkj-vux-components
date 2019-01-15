<template>
    <div class="h-list">
        <slot name="head"></slot>

        <scroller
            v-if="dataSource.length != 0"
            ref="hrkjscroller"
            :on-refresh="pullDownRefresh? refresh: undefined"
            :on-infinite="pullUpRefresh? infinite: undefined"
            :refreshText="refreshText"
            :scrollerTop="headHeight"
        >
            <slot>
                <div
                    class="list"
                    v-for="(item,index) in dataSource"
                    :key="index"
                    @click="itemClick(item)"
                >
                    <div class="flexBox">
                        <div class="title1" v-if="item.processName">{{item.processName}}</div>
                        <span
                            class="tab"
                            :class="item.taskColor"
                            v-if="item.taskName"
                        >{{item.taskName}}</span>
                    </div>
                    <div class="title" v-if="item.title">{{item.title}}</div>
                    <div class="time" v-if="item.time">{{item.time}}</div>
                </div>
            </slot>
        </scroller>

        <div v-else class="container_layout_cls">
            <span class="nodata_span_cls">没有数据</span>
        </div>
    </div>
</template>

<script>
import Scroller from "./components/Scroller.vue";
import LoadMore from "../load-more/index.vue";

export default {
    props: {
        dataSource: {
            type: Array,
            default: []
        },
        pullUpRefresh: {
            type: Boolean,
            default: false
        },
        pullDownRefresh: {
            type: Boolean,
            default: false
        },
        headHeight: {
            type: Number,
            default: undefined
        }
    },
    data() {
        return {
            isNoMoreData: false,
            refreshText: "下拉加载更多",

            isRefreshing: false
        };
    },
    mounted() {},
    methods: {
        itemClick(item) {
            this.$emit("onPress", item);
        },
        refresh() {
            if (this.isRefreshing) {
                this.finishPullDownRefresh();
                return;
            }
            this.isRefreshing = true;

            this.$emit("pullDownRefresh");
        },
        finishPullDownRefresh() {
            this.isRefreshing = false;

            this.$refs.hrkjscroller.finishPullToRefresh();
        },
        infinite() {
            if (this.isRefreshing || this.isNoMoreData) {
                console.log("nomoredata", this.isNoMoreData);
                return;
            }

            this.isRefreshing = true;

            this.$emit("pullUpRefresh");
        },
        finishPullUpRefresh() {
            this.isRefreshing = false;

            this.$refs.hrkjscroller.finishInfinite();
        },
        noMoreData() {
            this.isNoMoreData = true;

            this.$refs.hrkjscroller.noMoreData();
        }
    },
    components: {
        Scroller,
        LoadMore
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

<style lang="less" scoped>
.container_layout_cls {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
}

.nodata_container_cls {
    display: flex;
    flex-direction: row;
    // justify-content: center;
    align-items: center;
}

.nodata_line_cls {
    height: 1px;
    background-color: #d5d5d5;
    width: 100vh;
}

.nodata_span_cls {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #909399;
    letter-spacing: 0;
    text-align: center;
    width: 80vh;
}
</style>