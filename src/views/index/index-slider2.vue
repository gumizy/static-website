<template>
  <div style="height:520px;">
    <div style='text-align:center;overflow;hidden;height:100%;' class="sliderDiv">
    <div style="position: relative;top:0;z-index:3;">
      <br>
      <img src="static\images\视频标题.png"/>
    </div>
    <el-row :gutter="0">
        <el-col :span="6" class="instructions">
          <div class="grid-content bg-purple">
            <div><br><br></div>
          <video id="my_video_1" class="" width="100%" height="100%"
                controls preload="none" poster="static\images\xuanchuanTitle.png"
                data-setup='{ "aspectRatio":"479:200", "playbackRates": [1, 1.5, 2] }'>
            <source src="static/video/xuanchuan.mp4" type='video/mp4' />
            </video>
            <h4 class="center">北京安数云公司宣传片</h4>
          </div>
        </el-col>
        <el-col :span="6" class="instructions">
          <div class="grid-content bg-purple">
            <div><br><br></div>
            <video id="my_video_2" class="video-js vjs-default-skin" width="100%" height="100%"
                controls preload="none" poster="static\images\videoNews.png"
                data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
            <source src="static/video/shenzhen.mp4" type='video/mp4' />
            </video>
            <h4 class="center">北京安数云公司新闻采访</h4>
          </div>
        </el-col>
        <el-col :span="6" class="instructions">
          <div class="grid-content bg-purple">
            <div><br><br></div>
            <video id="my_video_3" class="video-js vjs-default-skin" width="100%" height="100%"
                controls preload="none" poster="static\images\429title.png"
                data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
            <source src="static/video/429.mp4" type='video/mp4' />
            </video>
            <h4 class="center">北京安数云表白429活动</h4>
          </div>
        </el-col>
        <el-col :span="6" class="instructions">
          <div class="grid-content bg-purple">
            <div><br></div>
            <img src="static\images\daoliu.gif" style="width:100%;height:70%;"/>
            <h4 class="center">云安全整体解决方案流量动态展示图</h4>
          </div>
        </el-col>
    </el-row>
    </div>
  </div>
</template>
<script type="text/javascript">
import IndexVideo from './index-video.vue'
// import video from 'static/video/js/video.js'
// import index from 'static/video/js/index.js'
// import prefixfree from 'static/video/js/prefixfree.min.js'
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  },
  components: {
      IndexVideo
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

.instructions {  text-align: center; }
  
  /* Show the controls (hidden at the start by default) */
  .video-js .vjs-control-bar { 
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  /* Make the demo a little prettier */
  body {
    margin-top: 20px;
    background: #222;
    text-align: center; 
    color: #aaa;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: radial-gradient(#333, hsl(200,30%,6%) );
  }

  a, a:hover, a:visited { color: #76DAFF; }
   .bg-purple {
    background: white;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
		box-shadow: 5px 3px 10px #e8e8ec;
    border-radius: 4px;
		min-height: 36px;
		height: 300px;
		width: 360px;
    margin: 30px 56px;
	}
  .grid-content:hover {
		box-shadow: 0px 0px 0px #e8e8ec;
    border-radius: 0px;
		min-height: 36px;
		height: 340px;
		width: 400px;
	}
</style>