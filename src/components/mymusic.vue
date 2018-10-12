<template>
  <div class="mymusic">
    <type-list name="我的音乐" iconinfo="icon-music" count="28" :isplaying="true"></type-list>
    <type-list name="最近播放" iconinfo="icon-zuijinplay" count="18"></type-list>
    <type-list name="我的电台" iconinfo="icon-diantai" count="1"></type-list>
    <type-list name="我的收藏" iconinfo="icon-collect" count="3" :has-border="false"></type-list>
    <musicsheet v-for="(item,index) in items" :item="item" :index="index" :key="item.id"></musicsheet>
  </div>
</template>

<script>
  import typelist from './typelist.vue'
  import musicsheet from "./musicsheet.vue";
  import Vue from 'vue'
  import axios from 'axios'
  import Vueaxios from 'vue-axios'

  Vue.use(Vueaxios, axios)
    export default {
    data(){
      return{
        musicAllList:{}
      }
    },
      computed: {
        items(){
          return this.musicAllList.sheets
        }
      },
        components:{
          'type-list':typelist,
          musicsheet
        },
      created(){
        let LocalAPI = 'static/data.json'
        axios.get(LocalAPI).then((res) => {
          this.musicAllList = res.data.music
          console.log(this.musicAllList.sheets)
        },(err) =>{
          alert(err)
        })
      }
    }
</script>

<style scoped>
  .mymusic{
    position: fixed;
    background: #ffffff;
    top:50px;
    bottom: 46px;
    left:0;
    right:0;
    overflow: auto;
    z-index:9;
    overflow-scrolling: touch;
  }
</style>
