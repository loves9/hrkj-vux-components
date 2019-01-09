<template>
  <div>
    <carousel :swiperImages="swiperImages"></carousel>
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
      swiperImages: [
        {
          src: 'http://www.daiwei.org/index/music/musicImg/Faded.jpg',
          type: '一月',
          color: '#E93D3D'
        },
        {
          src: 'http://oiq8j9er1.bkt.clouddn.com/music_owl_city.jpg',
          type: '二月',
          color: '#48A787'
        }
      ]
    }
  }
}
</script>