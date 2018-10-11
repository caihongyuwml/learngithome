<template>
  <div class="sidelist">
    <i class="icon" :class="side_iconclass"></i>
    <span class="title">{{side_title}}</span>
    <span class="disc" v-show="showDisc">{{side_disc}}</span>
  </div>
</template>

<script>
    export default {
      props:{
        iconclass:{
          type:String,
          default:''
        },
        sidetitle:{
          title:String,
          default:''
        },
        disc:{
          title:String,
          default:''
        }
      },
      data(){
        return{
          side_iconclass:this.iconclass,
          side_title:this.sidetitle,
          side_disc:this.disc
        }
      },
      computed:{
        showDisc(){
          return this.side_disc.length
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>
  .sidelist{
    position: relative;
    width:100%;
    height:40px;
    line-height:40px;
    padding:0 15px;
    font-size:0;
    box-sizing: border-box;
  }
  .sidelist:active{
    background:#d5d5d5;
  }
  .icon,.title{
    vertical-align: middle;
    display:inline-block;
  }
  .icon{
    font-size: 16px;
    margin-right:6px;
    color:#9a9a9a;
  }
  .title{
    font-size: 14px;
    color: #333333;
  }
  .disc{
    position:absolute;
    right:15px;
    font-weight: 400;
    top:50%;
    transform: translate3d(0,-50%,0);
    color:#9c9c9c;
    font-size: 10px;
  }
  div{
    display:inline-block;
    font-size:16px;
    height:100%;
    text-align:left
  }
</style>
