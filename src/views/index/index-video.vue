<template>
  <div style="height:450px;">
    <div style="position: relative;top:0;z-index:3;">
      <img src="static\images\videoTitle.png"/>
    </div>
    <el-row>
      <el-col :span="6"><div><br></div></el-col>
      <el-col :span="6" class="instructions">
        <video id="my_video_1" class="video-js vjs-default-skin" width="640px" height="267px"
            controls preload="none" poster="static\images\xuanchuanTitle.png"
            data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
          <source src="static/video/xuanchuan.mp4" type='video/mp4' />
        </video>
      </el-col>
      <el-col :span="6" class="instructions">
        <video id="my_video_2" class="video-js vjs-default-skin" width="640px" height="267px"
            controls preload="none" poster="static\images\videoNews.png"
            data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
          <source src="static/video/shenzhen.mp4" type='video/mp4' />
        </video>
      </el-col>
      <el-col :span="6"><div><br></div></el-col>
    </el-row>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      
    }
  }
}
</script>
<style scoped>
  .instructions { max-width: 640px; text-align: left; margin: 30px auto; }
  
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
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>