<template>
<div class="musicsheet">
  <div class="title" @click="toggleSheets($event)">
    <i class="toggle icon-down" ref="toggleicon"></i>
    <div class="detail">
      <span class="name">{{data_item.name}}</span>
      <span class="count">({{data_item.count}})</span>
      <i class="setting icon-setting"></i>
    </div>
  </div>
  <div v-show="showSheets" v-for="list in data_item.detail">
    <div class="content">
      <img class="sheetimg" :src="list.info[0].img_url" alt="">
      <div class="content_detail">
        <p class="detail_name">{{list.name}}</p>
        <p class="detail_count">{{list.count}}首歌曲</p>
        <i class="detail_setting icon-list-circle"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      props:{
        item: {
          type: Object
        }
      },
      data(){
        return{
          data_item:{},
          showSheets:true
        }
      },
      methods:{
        toggleSheets(event){
          this.$refs.toggleicon.style.transform = this.showSheets ? 'rotate(-90deg) translate3d(50%, 0, 0)':'rotate(0) translate3d(0, -50%, 0)'
          this.showSheets = !this.showSheets
        }
      },
      mounted(){
        this.data_item = this.item
      }
    }
</script>

<style scoped>
.musicsheet{
  background: #f3f3f3;
  width:100%;
  height:auto;
}
  .title{
    display: block;
    background: #e1e1e1;
    height:28px;
    line-height:28px;
    position: relative;
  }
  .toggle{
    position: absolute;
    top:50%;
    left:10px;
    font-size:14px;
    color: #666666;
    transform: translate3d(0,-50%,0);
    /*transition: all 0.5s;*/
  }
  .detail{
    color:#666;
    margin-left:35px;
  }
  .name{
    display: inline-block;
    font-size:12px;
    font-weight:400;
    color:#666;
    vertical-align: middle;
  }
  .count{
    display: inline-block;
    vertical-align: middle;
    font-weight:300;
    font-size:12px;
    color:#666;
  }
  .setting {
    font-size: 16px;
    color: #666;
    position: absolute;
    width: 28px;
    line-height: 28px;
    text-align: center;
    height: 28px;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
  }
  .content{
    height:60px;
    width:100%;
    box-sizing: border-box;
    display: flex;
    position: relative;
  }
  .content:active{
    background: #d5d5d5;
  }
  .sheetimg{
    width:50px;
    height:50px;
    margin:5px;
    flex:0 0 50px;
  }
  .content_detail{
    height:60px;
    padding-left:5px;
    box-sizing: border-box;
    flex:1 1 auto;
    position: relative;
  }
  .detail_name,.detail_count{
    width:80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    height:25px;
    line-height:25px;
    margin:0;
    overflow: hidden;
  }
  .detail_name {
    color: #333333;
    font-size:14px;
    margin-top:5px;
  }
  .detail_count{
    color: #666666;
    font-size:12px;
    font-weight:400;
    margin-bottom: 5px;
  }
  .detail_setting{
    position: absolute;
    right:5px;
    width:36px;
    height:36px;
    line-height:36px;
    text-align: center;
    top:50%;
    color:#999999;
    transform: translate3d(0,-50%,0);
  }
  .detail_setting:active{
    background:#d5d5d5;
  }
</style>
