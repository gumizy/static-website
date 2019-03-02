<template>
  <div style="height:520px;">
      <el-carousel trigger="click" :interval="5000" height="520px">
        <el-carousel-item v-for="(item,index) in imgdata" :key="index">
          <div style='text-align:center;overflow;hidden;height:100%;'>
            <br>
            <img src="static\images\风采锦集标题.png"/>                         
            <el-row v-if="item.url==='1'" class="center">
              <el-col :span="4" class="grid-content" style="margin:30px 48px;">
                <br><br><br>
                <img src="static\images\fengcai\图片1.png" >
              </el-col>
              <el-col :span="4" class="grid-content">
                <br><br><br>
                <img src="static\images\fengcai\图片2.png" >
              </el-col>
              <el-col :span="4" class="grid-content">
                <br><br><br>
                <img src="static\images\fengcai\图片3.png" >
              </el-col>
              <el-col :span="4" class="grid-content">
                <br><br><br>
                <img src="static\images\fengcai\图片4.png" >
              </el-col>
              <el-col :span="4" class="grid-content">
                <br><br><br>
                <img src="static\images\fengcai\图片5.png" >
              </el-col>
            </el-row>
            <el-row v-if="item.url==='2'" class="center">
              <el-col :span="4" class="grid-content" style="margin:30px 48px;">
                <br><br><br>
                <img src="static\images\fengcai\图片6.png" >
              </el-col>
              <el-col :span="4" class="grid-content">
                <br><br><br>
                <img src="static\images\fengcai\图片7.png" >
              </el-col>
              <el-col :span="4" class="grid-content">
                <br><br><br>
                <img src="static\images\fengcai\图片8.png" >
              </el-col>
              <el-col :span="4" class="grid-content">
                <br><br><br>
                <img src="static\images\fengcai\图片9.png" >
              </el-col>
              <el-col :span="4" class="grid-content">
                <br><br><br>
                <img src="static\images\fengcai\图片10.png" >
              </el-col>
            </el-row>
            <el-row v-if="item.url==='3'" class="center">
              <el-col :span="6" class="grid-content2" style="margin:30px 107px;">
                <br><br><br>
                <img src="static\images\fengcai\图片11.png" >
              </el-col>
              <el-col :span="6" class="grid-content2">
                <br><br><br>
                <img src="static\images\fengcai\图片12.png" >
              </el-col>
              <el-col :span="6" class="grid-content2">
                <br><br><br>
                <img src="static\images\fengcai\图片13.png" >
              </el-col>
              <el-col :span="6" class="grid-content2">
                <br><br><br>
                <img src="static\images\fengcai\图片14.png" >
              </el-col>
            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      imgdata: [{url:'1'},
                {url:'2'},
                {url:'3'}]

    }
  },
  mounted() {
      // this.getImgdata();
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
  },
  components: {
  }
}
</script>
<style scoped>
  .grid-content {
		box-shadow: 5px 3px 10px #e8e8ec;
    border-radius: 4px;
		min-height: 36px;
		height: 320px;
		width: 320px;
    margin: 30px 20px;
    background-color: #f4f5f9;
	}
  .grid-content2 {
		box-shadow: 5px 3px 10px #e8e8ec;
    border-radius: 4px;
		min-height: 36px;
		height: 320px;
		width: 320px;
    margin: 30px 60px;
    background-color: #f4f5f9;
	}
  .grid-content:hover {
    box-shadow: 0px 0px 0px #e8e8ec;
    border-radius: 0px;
		height: 360px;
		width: 360px;
    background-color: #f4f5f9;
	}
  .grid-content2:hover {
    box-shadow: 0px 0px 0px #e8e8ec;
    border-radius: 0px;
		height: 360px;
		width: 360px;
    background-color: #f4f5f9;
	}
</style>