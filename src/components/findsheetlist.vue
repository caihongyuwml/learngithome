<template>
  <div class="findsheetlist" :style="{width:listwidth,padding:listpadding}" >
    <div class="content">
      <!-- <img class="image" :src="imagesrc" alt=""> -->
      <div class="image" :style="{ backgroundImage : 'url('+imagesrc+')',backgroundSize:'cover', backgroundPosition:'center'}"></div>
      <span class="toprighttips" v-if="showtoprighttips"><i class="icon" :class="toprighticonclass"></i>{{formartTopRight}}</span>
      <span class="bottomtips" v-if="showbottomtips">{{bottomtips}}</span>
    </div>
    <div class="title" v-if="showbottomtitle">{{bottomtitle}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      listpadding: {
        type: String,
        default: '0'
      },
      imagesrc: {
        type: String
      },
      showtoprighttips: {
        type: Boolean,
        default: true
      },
      toprighticonclass: {
        type: String
      },
      toprighttitle: {
        type: String
      },
      showbottomtips: {
        type: Boolean,
        default: true
      },
      bottomtips: {
        type: String
      },
      showbottomtitle: {
        type: Boolean,
        default: true
      },
      bottomtitle: {
        type: String
      },
      listwidth: {
        type: String
      }
    },
    computed: {
      formartTopRight () {
        const numberInfo = Number(this.toprighttitle)
        return numberInfo > 10000 ? `${Math.floor(numberInfo / 10000)}万` : numberInfo
      }
    }
  }
</script>
<style scoped>

</style>
