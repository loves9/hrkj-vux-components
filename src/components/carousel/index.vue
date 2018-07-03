<template>
  <div>
    <swiper :options="swiperOption">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide v-for="item in swiperImages" :key="item.id" style="float:left;position:relative;width:100%">
            <img class="image" :src="item.src">
            <span class="type" :style="{backgroundColor:item.color}">{{item.type}}</span>
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'carousel',
  props: {
    swiperImages: {
      type: Array,
      default: [
        {
          src: 'http://oiq8j9er1.bkt.clouddn.com/music_owl_city.jpg',
          type: '首发',
          color: '#E93D3D'
        },
        {
          src: 'http://www.daiwei.org/index/music/musicImg/Faded.jpg',
          type: '华语',
          color: '#48A787'
        }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        loop: true
      }
    }
  }
}
</script>

<style lang="less">
@import './carousel.css';

.swiper-container{
    position:relative
}
.image{
    width: 100%;
}
.type{
    position:absolute;
    right:0;
    bottom:20px;
    padding:0 12px;
    height:24px;
    line-height:24px;
    color:#fff;
    font-size:14px;
    font-weight:400;
    border-radius:12px 0 0 12px;
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination-bullet {
    margin:0 4px;
    width:8px;
    height:8px;
    display:inline-block;
    background:#aaa;
    border-radius: 4px;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #007aff;
}
</style>