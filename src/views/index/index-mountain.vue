<template>
  <div class="sliderDiv">
      <!-- <img src="static\images\mountainTitle.png" style="width:980px;position: relative;top:60px;"/> -->
      <img v-bind:src="imgdata" alt="mountain" style="position: relative;top:0px;">
  </div>
</template>
<style scoped>
.sliderDiv{
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      imgdata: ''
    }
  },
  mounted() {
    this.getImgdata();
  },
  methods: {
    getImgdata() {
      if(window.innerWidth > 1440){
        this.imgdata = 'static/images/1920mountain.png';
      }else{
        this.imgdata = 'static/images/1440mountain.png'
      }
    }
  }
}
</script>


