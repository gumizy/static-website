<template>
  <div style="height:660px;">
    <div style="position: relative;top:0;z-index:3;">
      <img src="static\images\创新安全产品标题.png"/>
    </div>
    <div style="position: relative;top:-85px;z-index:2;">
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <el-carousel trigger="click" :interval="5000" height="660px">
        <el-carousel-item v-for="(item,index) in imgdata" :key="index">
          <div style='text-align:center;overflow;hidden;height:100%;' class="sliderDiv">
            <a v-on:click = 'toProduct(item.url)'><img :src="item.src"></a>                             
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      imgdata: [{ src: 'static/images/RASP-1920.png',url:'1'},
      { src: 'static/images/UEBA-1920.png',url:'2' },
      { src: 'static/images/等保一体机-1920.png',url:'3'},
      { src: 'static/images/CASB-1920.png',url:'4'}]
      }
  },
  mounted() {
    //   this.getImgdata();
  },
  methods: {
    // getImgdata() {
    //   if(window.innerWidth < 1600){
    //     this.imgdata = [{ src: 'static/images/1440banner1.png',url:'1'},
    //       { src: 'static/images/1440banner2.png',url:'2' },
    //       { src: 'static/images/1440banner3.png',url:'3'}];
    //   }
    // },
    toProduct(value) {
      if(value == '1') {
        this.goBanner1();
      }
      if(value == '2') {
        this.goBanner2();
      }
      if(value == '3') {
        this.goBanner3();
      }
      if(value == '4') {
        this.goBanner4();
      }
    },
	goBanner1() {
      this.$router.push({ path: '/product-4' });
      window.scrollTo(0,document.body.scrollHeight); 
			window.scrollTo(0,0);
		},
	goBanner2() {
      this.$router.push({ path: '/product-9' });
      window.scrollTo(0,document.body.scrollHeight); 
			window.scrollTo(0,0);
	  },
    goBanner3() {
      this.$router.push({ path: '/product-2' });
      window.scrollTo(0,document.body.scrollHeight); 
			window.scrollTo(0,0);
    },
    goBanner4() {
      this.$router.push({ path: '/product-5' });
      window.scrollTo(0,document.body.scrollHeight); 
			window.scrollTo(0,0);
    }
  }
}
</script>
<style scoped>
.sliderDiv img{
	width: 100%;
  	height: 100%;
	background-color:#f4f5f9;
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