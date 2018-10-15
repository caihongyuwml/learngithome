<template>
  <div class="findrecommend" v-if="reconmmend && reconmmend.findmusic">
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="item in reconmmend.findmusic.reconmmend.recommendImageList" :key="item.id" :songlist="JSON.stringify(item.songList)" style="float:left;position:relative">
        <img class="image" :src="item.src" alt="">
        <span class="type" :style="{backgroundColor:item.color}">{{item.type}}</span>
      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="recommend-type">
      <div class="div-type">
        <i class="icon-type icon-fm"></i>
        <p class="title">私人FM</p>
      </div>
      <div class="div-type">
        <i class="icon-type icon-date"></i>
        <p class="title">每日听歌推荐</p>
      </div>
      <div class="div-type">
        <i class="icon-type icon-rank-list"></i>
        <p class="title">云音乐热歌榜</p>
      </div>
    </div>
    <findsheettitle></findsheettitle>
    <findsheetlist v-if="reconmmend" v-for="(sheet, sheetindex) in reconmmend.findmusic.reconmmend.recommendMinSheets" :key="sheet.id" :imagesrc="sheet.info[0].img_url" :showtoprighttips="sheet.showtoptips" :listpadding="sheet.padding" :toprighticonclass="sheet.toptipsclass" :toprighttitle="sheet.listencount" :showbottomtips="sheet.showbottomtips" :bottomtips="sheet.bottomtips" :showbottomtitle="sheet.showbottomtitle" :bottomtitle="sheet.bottomtitle" :listwidth="sheet.listwidth" @click.stop="showSongSheet(list)">
    </findsheetlist>
  </div>
</template>

<script>
  import store from '../store'
  import findsheettitle from './findsheettitle'
  import findsheetlist from './findsheetlist'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        swiperOption: {
          // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          autoplay: 1113000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          autoplayDisableOnInteraction: false,
          observeParents: true,
          loop: true,
        }
      }
    },
    computed:{
      reconmmend () {
        return store.getters.getAllInfo
      },
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
      showSongSheet (data) {
        store.dispatch({
          type: 'set_MusicSheetList',
          data: data
        })
        store.commit({
          type: 'setIsShowSongSheet',
          isShow: true
        })
      }
    },
    components:{
      swiper,
      swiperSlide,
      findsheettitle,
      findsheetlist
    }
    }
</script>

<style scoped>
  .findrecommend{
  position:fixed;
  background: #ffffff;
  top:86px;
  bottom:46px;
  left:0;
  right:0;
  z-index:11;
  overflow:auto;
  -webkit-overflow-scrolling:touch
}
   .swiper-container{
    position: relative;
  }
   .image{
    width:100%;
  }
  .type{
    position: absolute;
    right:0;
    bottom:20px;
    padding:0 12px;
    height:24px;
    color:#ffffff;
    font-size:14px;
    font-weight:400;
    border-radius:12px 0 0 12px;
  }
  .swiper-pagination{
    position: absolute;
    bottom:10px;
    left:50%;
    transform: translate(-50%,0);
  }
   .swiper-pagination-bullet{
    background: #aaa;
    width:8px;
    height:8px;
    margin:0 4px;
    display: inline-block;
    border-radius:4px;
  }
  .swiper-pagination-bullet-active{
    width:14px;
    background:  #C62F2F!important;
  }
  .recommend-type{
    width:100%;
    height:90px;
    display:flex;
    align-items:center;
  }
  .div-type{
    flex:1;
    height:100%;
    width:33.3333%;
    font-size:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0 10px;
  }
  .icon-type{
    display: inline-block;
    color:#C62F2F;
    font-size:32px;
    width:50px;
    height:50px;
    line-height:50px;
    text-align: center;
    border:1px solid #C62F2F;
    border-radius: 50%;
  }
  .title{
    font-size:12px;
    font-weight: 400;
    margin:8px 0 0 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width:100%;
    text-align:center;
  }
</style>
