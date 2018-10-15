<template>
  <div class="findmusic">
    <div class="find-menu">
      <router-link class="menu-list" tag="div" to="/findmusic/findrecommend">
        <div class="menu-list-div">个性推荐</div>
      </router-link>
      <router-link class="menu-list" tag="div" to="/findmusic/findsheet">
        <div class="menu-list-div">歌单</div>
      </router-link>
      <router-link class="menu-list" tag="div" to="/ccc">
        <div class="menu-list-div">主播电台</div>
      </router-link>
      <router-link class="menu-list" tag="div" to="/ddd">
        <div class="menu-list-div">排行榜</div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import findrecommend from './findrecommend.vue'
  import findsheet from './findsheet.vue'
    export default {
      components: {
        findrecommend: findrecommend,
        findsheet: findsheet
      }
    }
</script>

<style scoped>
  .findmusic{
    position: fixed;
    top:50px;
    left:0;
    right:0;
    bottom:46px;
    background: #ffffff;
    z-index:11;
    overflow: auto;
    -webkit-overflow-scrolling:touch
  }
  .find-menu{
    position: fixed;
    height:36px;
    width:100%;
    line-height:36px;
    background: #ffffff;
    overflow: hidden;
    display: flex;
  }
  .menu-list {
    flex: 1;
    width: 25%;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    font-size: 14px;
    font-weight: 500;
    position: relative;
  }
  .menu-list:active{
    background:#d5d5d5
  }
  .router-link-active{
    color:#C62F2F;
  }
  .router-link-active:after{
    position: absolute;
    content:'';
    background: #c62f2f;
    bottom:0;
    height:2px;
    left:0;
    right:0;
  }

</style>
