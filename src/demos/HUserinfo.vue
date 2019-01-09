<template>
  <div>
    <h-userinfo :userInfo="userInfo" ></h-userinfo>
  </div>
</template>

<script>
import { HUserinfo } from 'vux'

export default {
  components: {
    HUserinfo
  },
  data(){
    return {
      userInfo:{
        userName:"userName",
        userImg:"http://www.daiwei.org/index/music/musicImg/Faded.jpg",
        groupName:"groupName"
      }
    }
  }
}
</script>