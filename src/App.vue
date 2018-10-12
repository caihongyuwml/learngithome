<template>
  <div id="app">
    <audio id="myaudio"></audio>
    <!--头部header-->
    <div class="header">
      <div class="header-warpper">
        <i class="menu icon-menu" @click="showMenu"></i>
        <div class="center-menu" @click="hideMenu">
          <router-link tag="i" to="/mymusic">
            <i class="music icon-music"></i>
          </router-link>
          <router-link tag="i" to="/findmusic">
            <i class="find icon-wangyi"></i>
          </router-link>
          <router-link tag="i" to="/community">
            <i class="community icon-community"></i>
          </router-link>
        </div>
        <i class="search icon-search"></i>
        <router-view></router-view>
      </div>
    </div>
    <div class="sidebar">
      <transition name="fade" @touchmove.stop.prevent>
        <div class="menu-mask" v-show="isReallShow" @click="hideMenu"></div>
      </transition>
      <transition name="side">
        <div class="menu-content" v-show="isReallShow" >
          <div class="menu-detail">
            <div class="menu-userInfo":style="{ backgroundImage: 'url(' + info.bg + ')',backgroundSize: 'cover' }">
              <img class="avatar" :src="info.avatar" width="56" height="56">
              <div class="user-detail">
                <span class="name">{{info.name}}</span>
                <img class="isvip" src="/static/images/vip.png" alt="">
                <span class="progress">Lv.{{info.grade}}</span>
              </div>
              <span class="sign" @click="signClick"><i v-show="showIcon" class="icon-coin"></i>{{sign}}</span>
            </div>
          </div>
          <div class="content">
            <sidelist iconclass="icon-message" sidetitle="我的消息" disc=""></sidelist>
            <sidelist iconclass="icon-vip" sidetitle="我的会员" disc="2018.05.10到期"></sidelist>
            <sidelist iconclass="icon-market" sidetitle="商城" ></sidelist>
            <split background="#f0f0f0" height="5" border="#eee"></split>
            <sidelist iconclass="icon-friend" sidetitle="我的好友" ></sidelist>
            <sidelist iconclass="icon-place" sidetitle="附近的人"></sidelist>
            <split background="#f0f0f0" height="5" border="#eee"></split>
            <sidelist iconclass="icon-theme" sidetitle="个性换肤" disc="官方红"></sidelist>
            <sidelist iconclass="icon-set-time" sidetitle="定时播放"></sidelist>
            <sidelist iconclass="icon-lock" sidetitle="音乐闹钟"></sidelist>
            <sidelist iconclass="icon-car" sidetitle="驾驶模式"></sidelist>
            <sidelist iconclass="icon-cloud" sidetitle="音乐云盘"></sidelist>
          </div>
          <div class="footer">
            <p style="border:1px solid rgb(240,240,240)"></p>
            <div class="nightmode">
              <i class="icon-night"></i>
                <span>夜间模式</span>
            </div>
            <div class="setting">
              <i class="icon-setting"></i>
              <span>设置</span>
            </div>
            <div class="exit">
              <i class="icon-exit"></i>
              <span>退出</span>

            </div>
          </div>
        </div>
      </transition>
    </div>
    <my-music></my-music>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import split from './components/split'
  import sidelist from './components/sidelist'
  import mymusic from './components/mymusic.vue'
  import bottombar from './components/bottombar.vue'
  import Vue from 'vue'
  import axios from 'axios'
  import Vueaxios from 'vue-axios'

  Vue.use(Vueaxios, axios)
export default {
  props:{
    showMenus:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      showIcon:true,
      info:{},
      musicAllList:{},
      sign:"签到",
      isShowMenus:this.showMenus,
      isShow:false
    }
  },
  methods:{
    showMenu(){
      this.isShow = true
    },
    hideMenu(){
      this.isShow = false
    },
    signClick(){
      this.sign = '已签到'
      this.showIcon = false;
    }
  },
  computed:{
    isReallShow(){
      return this.isShow
    }
  },
  components:{
    sidelist: sidelist,
    split:split,
    'my-music':mymusic,
    'bottom-bar':bottombar
  },
  created(){
    let LocalAPI = 'static/data.json'
    axios.get(LocalAPI).then((res) => {
      this.info = res.data.user
    },(err) =>{
      alert(err)
    })
  }
}
</script>

<style>
  @import "font-icon/style.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
/*头部*/
  .header{
    background: #C62F2F;
    position: fixed;
    top:0;
    right:0;
    left:0;
    height:50px;
    z-index:10;
  }
  .header-warpper{
    height:100%;
    display:flex;
    background: #C62F2F ;
    justify-content: space-between;
    align-items: center;
  }
  .icon-menu,.icon-search{
    color:#fff;
    font-size:26px;
    padding:10px 15px;
  }
  .center-menu{
    font-size:24px;
  }
  i{
    margin:0 5px;
    color: #eeeeee;
  }
  .router-link :active{
    color:#4AE0A8;
  }
  .music{
    font-size:22px;
  }
  i:active{
    color:#ccafaf;
  }
/*侧边栏*/
  .menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    transform: translateZ(0);
  }
  .menu-content{
    position: fixed;
    width:286px;
    height:100%;
    top:0;
    left:0;
    bottom:0;
    z-index: 11;
    overflow-y: auto;
    background: #ffffff;
    overflow-scrolling: touch;
  }
  .menu-userInfo{
    box-sizing: border-box;
    width:100%;
    height:168px;
    position: relative;
    padding:50px 15px 15px 15px;
  }
  .avatar{
    position: absolute;
    bottom:50px;
    left:15px;
    border-radius: 50%;
  }
  .user-detail{
    position: absolute;
    bottom:20px;
    left:15px;
    font-size:0;
  }
  .name{
    display: inline-block;
    color:#ffffff;
    font-size:16px;
    font-weight:500;
    vertical-align: middle;
    white-space: nowrap;
    max-width: 130px;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  .isvip{
    width:14px;
    height:14px;
    vertical-align:middle;
    margin-left:6px;
  }
  .progress {
    font-size: 8px;
    color: #ffffff;
    font-weight: 400;
    border: 1px solid #ffffff;
    border-radius: 8px;
    padding: 1px 4px;
    margin-left: 6px;
    vertical-align: middle;
  }
  .sign{
    position:absolute;
    height:14px;
    line-height:14px;
    right:15px;
    bottom:15px;
    border:1px solid #e1e1e1;
    border-radius: 12px;
    color:#ffffff;
    font-size:12px;
    padding:4px 8px;
    display: inline-block;
  }
  .sign:active{
    background: rgba(0,0,0,0.1);
  }
  .sign i{
    height:14px;
    margin-right:5px;
    vertical-align:top;
  }
  .content{
    background:#fff;
    display:block;
    padding-bottom:40px
  }
  .footer{
    background: #ffffff;
    position: fixed;
    bottom: 0;
    height:40px;
    width:286px;
    font-size:0;
    transfrom:translateZ(0)
  }
  .footer div{
    display: inline-block;
    font-size: 16px;
    height:100%;
    text-align: center;
  }
  .footer div i{
    font-size: 18px;
    vertical-align: middle;
    color:#999999;
  }
  .footer div span{
    font-size: 16px;
    vertical-align: middle;
  }
  .footer div:active{
    background: #d5d5d5;
  }
  .nightmode{
    width:40%;
    line-height:40px;
  }
  .setting,.exit{
    width:30%;
    line-height:40px;
  }

</style>
