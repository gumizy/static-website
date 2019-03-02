<template>
  <div style="height:5950px;position:relative;">
    <div style="width:100%;position: absolute;top:0px;z-index:2;">
      <IndexTop></IndexTop>
    </div>
    <div style="width:100%;position: absolute;top:80px;left:0px;z-index:1;">
      <IndexSlider></IndexSlider>
    </div>
    <div style="width:100%;position: relative;top:450px;text-align:center">
      <IndexImg></IndexImg>
    </div>
    <div style="width:100%;position: relative;top:451px;text-align:center">
      <IndexProduct2></IndexProduct2>
    </div>
    <div v-bind:style="productStyle">
      <IndexProduct></IndexProduct>
    </div>
    <div style="width:100%;position: relative;top:460px;text-align:center">
      <IndexMountain></IndexMountain>
    </div>
    <div v-bind:style="newsStyle">
      <IndexNews></IndexNews>
    </div>
    <div style="width:100%;position: relative;top:450px;text-align:center;background-color:#f4f5f9;">
      <IndexSlider2></IndexSlider2>
    </div>
    <div style="width:100%;position: relative;top:450px;text-align:center;">
      <IndexSlider3></IndexSlider3>
    </div>
    <div style="width:100%;position: relative;top:456px;background:url(static/images/mapBackground.png);">
      <IndexMap></IndexMap>
    </div>
    <footer class="footer"  style="width:100%;position: absolute;bottom:0;">
      <IndexFooter></IndexFooter>
    </footer>
    <!-- {{message}} <a href="javascript:void(0);" @click="go404">go 404</a> -->
  </div>
</template>
<script>
  import IndexTop from './index/index-top.vue'
  import IndexSlider from './index/index-slider.vue'
  import IndexSlider2 from './index/index-slider2.vue'
  import IndexSlider3 from './index/index-slider3.vue'
  import IndexFooter from './index/index-footer.vue'
  import IndexProduct from './index/index-product.vue'
  import IndexProduct2 from './index/index-product2.vue'
  import IndexMountain from './index/index-mountain.vue'
  import IndexMap from './index/index-map.vue'
  import IndexImg from './index/index-img.vue'
  import IndexNews from './index/index-news.vue'
  export default {
    data() {
      return {
        message: 'Here is a message!',
        productStyle: '',
        newsStyle: ''
      }
    },
    methods: {
      getProduct() {
        if(window.innerWidth > 1440){
          this.productStyle = 'width:100%;position: relative;top:451px;'
        }else{
          this.productStyle = 'width:100%;position: relative;top:451px;'
        }
      },
      getNews() {
        if(window.innerWidth > 1440){
          this.newsStyle = 'width:100%;position: relative;top:458px;'
        }else{
          this.newsStyle = 'width:100%;position: relative;top:458px;'
        }
      },
      load() {
        // ajax request
        setTimeout(() => {
          this.message = 'load over!'
        }, 5000)
      },
      go404() {
        this.$router.push({ path: '/404' })
      }
    },
    mounted() {
      this.getProduct(),
      this.getNews(),
      this.load()
    },
    beforeDestroy() {
    },
    components: {
      IndexTop,
      IndexSlider,
      IndexSlider2,
      IndexSlider3,
      IndexFooter,
      IndexProduct,
      IndexProduct2,
      IndexMountain,
      IndexMap,
      IndexImg,
      IndexNews
    }
  }
</script>
<style scoped>

</style>