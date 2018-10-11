<template>
  <span class="split" ref="split"></span>
</template>

<script>
    export default {
      props:{
        height:{
          type:String,
          default:''
        },
        background:{
          type:String,
          default:''
        },
        border:{
          type:String,
          default:'transparent'
        }
      },
      mounted(){
        this.$refs.split.style.background = this.background
        this.$refs.split.style.height = `${this.height}px`
        this.$refs.split.style.border = this.border
      }
    }
</script>

<style scoped>
.split{
  display:block;
  width:100%;
  box-sizing: border-box;
  border-width: 1px;
  border-top-style: solid;

}
</style>
