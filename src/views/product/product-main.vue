<template>
  <div style="position:relative;">
    <div style="width:100%;position: absolute;top:0px;z-index:2;">
      <IndexTop></IndexTop>
    </div>
    <div style="width:100%;position: absolute;top:80px;left:0px;z-index:1;">
      <IndexSlider></IndexSlider>
    </div>
  </div>
</template>
<script>
  import IndexTop from '../index/index-top.vue'
  import IndexSlider from '../index/index-slider.vue'
export default {
  components:{
      IndexTop,
      IndexSlider
  }
}
</script>