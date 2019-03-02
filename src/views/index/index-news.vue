<template>
<div style="height:660px;">
	<br><br>
	<img style="width:100%" src="static\images\newsTitle.png"/>
  <div class="container"> 
    <!-- <h2 class="line center"> <span>Best features!</span></h2> -->
	<div class="center">
		<p>&nbsp;</p>
	</div>
	<!-- START MARKETING DIV-->
	<div class="marketing">
		<el-row :gutter="50">
			<el-col :span="8"><div class="grid-content bg-purple">
			<a href="javascript:void(0);" @click="goNews(28)">
			<img class="productImg" src="static\images\news\27-8.jpg" >
			<!-- <i class="fa-icon-tint fa-icon-xxlarge main-color"></i> -->
			<h3 class="features-title"> <span class="firstword"></span>习近平总书记关于网络安全和信息化工作重要论述综述</h3>
			</a>
			<p>党的十八大以来，习近平总书记以马克思主义政治家的深刻洞察力，就网络安全和信息化工作作出一系列重大决策、提出一系列重大举措，形成了关于网络强国的重要思想…</p>
			<el-button @click="goNews(28)">了解详情</el-button>
			<br>
			<br>
		</div></el-col>
			<el-col :span="8"><div class="grid-content bg-purple">
			<a href="javascript:void(0);" @click="goNews(27)">
			<img class="productImg" src="static\images\news\27-1.jpg" >
			<!-- <i class="fa-icon-fullscreen fa-icon-xxlarge main-color"></i> -->
				<h3 class="features-title"> <span class="firstword"></span>政企网安新标准•可信可控云安全 ——安数云可控云安全研讨会圆满召开</h3>
			</a>
			<p>2018年10月21日，济南教育信息化协会·安数云可控云安全技术研讨会在济南成功举行。来自山东省网信办、公安、疾控中心、各高校、农林局、邮电等…</p>
			<el-button @click="goNews(27)">了解详情</el-button>
			<br>
			<br>
		</div></el-col>
			<el-col :span="8"><div class="grid-content bg-purple">
			<a href="javascript:void(0);" @click="goNews(26)">
			<img class="productImg" src="static\images\news\26-1.jpg" >
			<!-- <i class="fa-icon-thumbs-up fa-icon-xxlarge main-color"></i> -->
			<h3 class="features-title"> <span class="firstword"></span>广州网络安全建设 安数云肩扛企业担当</h3>
			</a>
			<br>
			<p>2018年9月18日，“2018国家网络安全宣传周暨第五届网络安全博览会”在广州省中国国际进出口贸易展会中心震撼召开。“国家网络安全宣传周”…</p>
			<el-button @click="goNews(26)">了解详情</el-button>
			<br>
			<br>
		</div></el-col>
	</el-row>
  </div>
  </div>
</div>
</template>
<script>
export default {
	 methods: {
	  goNews(num) {
		  this.$router.push({ path: `/product-new${num}` });
			window.scrollTo(0,document.body.scrollHeight); 
			window.scrollTo(0,0);
		}
  }
}
</script>
<style scoped>
.productImg {
	padding:45px 25px 0px 25px;
	height: 129px;
	width: 220px;
}
.container {
	width: 50%;
}
.marketing a,.marketing p{
		text-decoration: none;
		color: black;
}
.marketing h3{
		line-height:22px;
		margin:20px 20px 
}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: white;
  }
  .bg-purple {
    background: white;
  }
  .bg-purple-light {
    background: white;
  }
  .grid-content {
		box-shadow: 5px 3px 10px #e8e8ec;
    border-radius: 4px;
		min-height: 36px;
		height: 460px;
		width: 270px;
	}
	.grid-content p {
		margin:0px 36px 20px 36px;
	}
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>


