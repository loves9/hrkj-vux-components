<template>
  <div class="">
    <div class="scroll-top" :style="{height:top+'px'}">
      <div v-if="aspect==2">
        <p v-if="state==6">
          下拉刷新
        </p>
        <p v-if="state==1">
          <i><img :src="Load" /></i>
          <br/> 刷新中
        </p>
        <p v-if="state==2">松开刷新</p>
        <p v-if="state==3">
          <i><img :src="Load" /></i>
          <br/> 刷新完成
        </p>
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
        itemClick(itemData) {}
    }
};
</script>

<style lang="less" scoped>
</style>
