<template>
<div class="bottom-bar">
  <div class="music-info">
    <img class="music-pic">
    <div class="music-detail">
      <p class="music-name">小酒窝</p>
      <p class="music-singer">林俊杰,蔡卓妍</p>
    </div>
  </div>
  <div class="playpause"><i class="icon-play"></i></div>
  <i class="music-list icon-list-music"></i>
</div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.bottom-bar{
  position: fixed;
  background: #ffffff;
  z-index: 9;
  bottom: 0;
  left:0;
  right:0;
  box-sizing: border-box;
  padding:5px;
  height:46px;
  align-items: center;
  display: flex;
}
  .music-info{
    position: relative;
    height:100%;
    display: flex;
    flex: 1 1 auto;
  }
  .music-detail{
    display: flex;
    flex: 1 1 auto;
    padding: 0 5px;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 414px)
      p
        max-width:250px
    @media screen and (max-width: 375px)
     p
        max-width:210px
    @media screen and (max-width: 320px)
      p
        max-width:160px
    @media screen and (min-width: 768px)
      p
        max-width:580px
  }
  .music-detail p{
    width:100%;
    margin:0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .music-name{
    font-size:14px;
    font-weight:400;
    color: #333333;
    padding:2px 0;
  }
  .music-singer{
    font-size:10px;
    color: #aaa;
    font-weight:400;
    padding:2px 0;
  }
  .music-pic{
    flex:0 0 36px;
    width:36px;
    height:36px;
  }
  .playpause{
    width:24px;
    height:24px;
    border:2px solid #999999;
    border-radius: 50%;
    position: relative;
  }
  .playpause:active{
    background:#d5d5d5;
  }
  .playpause i{
    position: absolute;
    top:50%;
    left:55%;
    transform: translate3d(-50%,-50%,0);
    width:22px;
    color: #333333;
    font-size: 14px;
    display: block;
  }
  .music-list{
    margin-left:10px;
    width:36px;
    height:100%;
    text-align: center;
    line-height:36px;
    color:#999999;
    font-size:26px;
    display: block;
    flex: 0 0 36px;
  }
  .music-list:active{
    background:#d5d5d5;
  }
</style>
