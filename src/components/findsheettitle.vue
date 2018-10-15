<template>
  <div class="findsheettitle">
    <span class="name">推荐歌单</span>
    <i class="icon icon-right"></i>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.findsheettitle{
  height:40px;
  line-height: 40px;
  background: pink;
  box-sizing: border-box;
}
  .name{
    display:inline-block;
    color: #333333;
    font-size:16px;
    font-weight:400;
    padding-left:12px;
    height:18px;
    line-height:18px;
    vertical-align: middle;
    position: relative;
  }
  .name:before{
    position: absolute;
    content:'';
    top:0;
    left:0;
    height:100%;
    width:3px;
    background: #C62F2F;
  }
  .icon{
    font-size:16px;
    color:#999;
    vertical-align: middle;
    display: inline-block;
  }
</style>
