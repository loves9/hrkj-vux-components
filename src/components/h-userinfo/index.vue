<template>
    <div class="containers" >
        <div class="imgbox">
            <img :src="userInfo.userImg" alt="" class="imgbox">
        </div>
        <div class="textbox">
            <p class="name">{{userInfo.userName}}</p>
            <p class="classgroup">
                {{userInfo.groupName}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
        userInfo:null
    }
}
</script>

<style lang="less" scoped>
.containers {
  padding: 12px 15px;
  background-color: #fff;
  display: flex;
  display: -webkit-flex;
  border-bottom: 1px solid #eee;
}

.containers .imgbox img {
  width: 50px;
  height: 50px;
  border: 1px solid #cccccc;
  border-radius: 50%;
  display: block;
}

.containers .textbox {
  margin-left: 10px;
}
.containers .textbox .name{
  font-size: 17px;
  color: #000000;
  line-height: 24px;
  margin: 3px 0 5px;
}
.containers .classgroup{
  font-size: 12px;
  color: #666666;
  line-height: 17px;
}
</style>
