<template>
  <div class="block">
    <!-- <span class="demonstration">Click 指示器触发</span> -->
    <el-carousel trigger="click" :interval="5000" height="400px">
      <el-carousel-item v-for="(item,index) in imgdata" :key="index">
        <div style='text-align:center;overflow;hidden;height:100%;' class="sliderDiv">
          <a v-on:click = 'toProduct(item.url)'><img :src="item.src"></a>                             
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      imgdata: [{ src: 'static/images/1920banner1.png',url:'1'},
      { src: 'static/images/1920banner2.png',url:'2' },
      { src: 'static/images/1920banner3.png',url:'3'}]
    }
  },
  mounted() {
      this.getImgdata();
  },
  methods: {
    getImgdata() {
      if(window.innerWidth < 1600){
        this.imgdata = [{ src: 'static/images/1440banner1.png',url:'1'},
          { src: 'static/images/1440banner2.png',url:'2' },
          { src: 'static/images/1440banner3.png',url:'3'}];
      }
    },
    toProduct(value) {
      if(value == '1') {
        this.goBanner3();
      }
      if(value == '2') {
        this.goBanner2();
      }
      if(value == '3') {
        this.goBanner1();
      }
    },
		goBanner1() {
      this.$router.push({ path: '/banner1' });
		},
		goBanner2() {
      this.$router.push({ path: '/banner2' });
	  },
    goBanner3() {
      this.$router.push({ path: '/banner3' });
    }
  }
}
</script>
<style scoped>
.sliderDiv img{
  width: 100%;
  height: 100%;
}
.el-carousel__item div {
  color: #475669;
  font-size: 14px;
  opacity: 1;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>