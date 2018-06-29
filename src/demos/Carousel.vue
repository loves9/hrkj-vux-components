<template>
  <div>
    <carousel>阅读并同意<a href="javascript:void(0);">《相关条款》</a></carousel>
    <carousel v-model="valueTrue">阅读并同意<a href="javascript:void(0);">《相关条款》</a></carousel>
  </div>
</template>

<script>
import { Carousel } from 'vux'

export default {
  components: {
    Carousel
  },
  data () {
    return {
      valueTrue: true
    }
  }
}
</script>