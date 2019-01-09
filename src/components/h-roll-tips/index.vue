<template>
<div class="main">
  <label  ref="messagelabel" class="message" :style="textLableStyle">{{message}}</label>
</div>
</template>

<script>

export default {
  name: 'HRollTips',
  props: {
    speed: {
      type: Number,
      default: 1
    },
    message: {
      type: String,
      default: '超文本标记语言，标准通用标记语言下的一个应用。“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。'
    }
  },
  created () {
    let _this = this
    this.timeId = setInterval(()=>{
      _this.moveText()
    }, 30)  // 每秒60帧
  },
  destroyed(){
    window.clearInterval(this.timeId)
  },
  data () {
    return {
      textLableStyle: '',
      toLft: 0,
      timeId: ''
    }
  },
  methods: {
    moveText(){
      this.toLft += this.speed
      // this.textLableStyle =  'margin-left:-' + this.toLft + 'px'

      this.$refs.messagelabel.style.marginLeft = '-' + this.toLft + 'px'

      console.log('www', this.$refs.messagelabel.getBoundingClientRect().width)

      if(this.toLft > this.$refs.messagelabel.getBoundingClientRect().width - 300){
        this.toLft = 0
      }
    }
  },
  watch: {

  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui-agree/weui-agree.less';

.main {
  width: 100%;
  height: 30px;
  background-color: #f4f4f4;
  padding-left: 15px;
  padding-right: 15px;
}

.message {
  color: #303133;
  font-size: 12px;
  line-height: 12px;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
}
</style>