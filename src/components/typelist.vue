<template>
<div class="typelist" @click="alert1" :style="{background:typelistbg}">
  <i class="info" :class="iconInfo"></i>
  <div class="typelist-detail">
    <span class="name">{{listName}}</span>
    <span class="count" v-show="showCount">({{listCount}})</span>
    <p v-if="showBorder" style="border-top: 1px solid rgb(240,240,240)"></p>
    <i v-if="isPlaying" class="isPlaying icon-volume-medium"></i>
  </div>
</div>
</template>

<script>
    export default {
      props:{
        name:{
          type:String,
          default:'梦林122梦林'
        },
        count:{
          type:String,
          default:'1'
        },
        hasBorder:{
          type:Boolean,
          default:true
        },
        playing:{
          type:Boolean,
          default:false
        },
        iconinfo:{
          type:String
        },
        bgcolor:{
          type:String,
          default:'#f7f7f7'
        }
      },
      data(){
        return{
          listName:'',
          listCount:'0',
          showBorder:true,
          isPlaying:false,
          iconInfo:'',
          typelistbg:''
        }
      },
      methods:{
        alert1(){
          alert(123)
        }
      },
      computed:{
        showCount(){
          return this.count!=='none'
        }
      },
      created(){
        this.listName = this.name
        this.listCount = this.count
        this.showBorder = this.hasBorder
        this.isPlaying = this.playing
        this.iconInfo = this.iconinfo
        this.typelistbg = this.bgcolor
      }
    }
</script>

<style scoped>
.typelist{
  background: #f7f7f7;
  height:50px;
  position: relative;
}
  .typelist:active{
    background:#d5d5d5;
  }
  .info{
    font-size:20px;
    color:#C62F2F;
    position: absolute;
    left:15px;
    top:50%;
    transform:translate(0,-50%);
  }
  .typelist-detail{
    height:100%;
    line-height:50px;
    margin-left:50px;
    box-sizing: border-box;
    font-size: 0;
    float: left;
  }
  .name{
    color: #333333;
    font-size:14px;
    margin-right:6px;
    vertical-align: middle;
  }
  .count{
    color: #aaaaaa;
    font-size:10px;
    font-weight:400;
    vertical-align:middle;
  }
  .isPlaying{
    font-size:14px;
    color:#C62F2F;
    position: absolute;
    top:50%;
    right:5px;
    width:36px;
    height:36px;
    line-height:36px;
    text-align: center;
    transform: translate(0,-50%);
  }
</style>
