<template>
  <div class="container">
    <div class="row-fluid">
      <div class="span12">
	  <div class="row-fluid">
      </div> 
	  </div>
    </div>
    <div class="row-fluid">
      <div class="span2">
        <h4 class="left standart-h4title"><span>服务与支持</span></h4>
        <ul class="footerlink left">
          <li><span>售前咨询热线</span></li>
          <li><span>010-62928890</span></li>
          <li><a href="javascript:void(0);" @click="goIntroduce">专业技术咨询</a></li>
          <li><a href="javascript:void(0);" @click="goIntroduce">售后服务咨询</a></li>
        </ul>
      </div>
      <div class="span2">
        <h4 class="left standart-h4title"><span>云安全解决方案</span></h4>
        <ul class="footerlink left">
          <li><a href="javascript:void(0);" @click="goProduct16">云安全整体解决方案</a></li>
          <li><a href="javascript:void(0);" @click="goProduct1">云安全池</a></li>
          <li><a href="javascript:void(0);" @click="goZstack">云平台</a></li>
        </ul>
      </div>
      <div class="span2">
        <h4 class="left standart-h4title"><span>云边界安全</span></h4>
        <ul class="footerlink left">
          <li><a href="javascript:void(0);" @click="goProduct15">云访问安全代理系统</a></li>
        </ul>
      </div>
      <div class="span2">
        <h4 class="left standart-h4title"><span>虚拟化安全服务</span></h4>
        <ul class="footerlink left">
          <li><a href="javascript:void(0);" @click="goProduct3">大数据态势感知系统(SAAS)</a></li>
          <li><a href="javascript:void(0);" @click="goProduct5">云边界安全系统(CASB)</a></li>
          <li><a href="javascript:void(0);" @click="goProduct4">RASP WAF(云)</a></li>
          <li><a href="javascript:void(0);" @click="goProduct9">用户实体行为分析系统(云)</a></li>
          <li><a href="javascript:void(0);" @click="goProduct2">综合安全检查评估系统(云)</a></li>
          <li><a href="javascript:void(0);" @click="goProduct6">WEB应用防火墙系统WAF(云)</a></li>
          <li><a href="javascript:void(0);" @click="goProduct7">网络入侵防御系统NGIPS(云)</a></li>
          <li><a href="javascript:void(0);" @click="goProduct8">数据库审计与风险控制系统(云)</a></li>
        </ul>
      </div>
      <div class="span2">
        <h4 class="left standart-h4title"><span>基础安全产品</span></h4>      
        <ul class="footerlink left">
          <li><a href="javascript:void(0);" @click="goProduct2">综合安全检查评估系统</a></li>
          <li><a href="javascript:void(0);" @click="goProduct6">WEB应用防火墙系统WAF</a></li>
          <li><a href="javascript:void(0);" @click="goProduct7">网络入侵防御系统NGIPS</a></li>
          <li><a href="javascript:void(0);" @click="goProduct8">数据库审计与风险控制系统</a></li>
        </ul>
      </div>
      <div class="span2">
        <h4 class="left standart-h4title"><span>关注安数云</span></h4>
        <ul class="footerlink left">
          <li><span>安数云公众号</span></li>
          <li>&nbsp;</li>
          <div style="width:100%;height:100%;">
            <img src="static\images\QRcode.png" alt="QRcode">
          </div>
        </ul>
      </div>
    </div>
    <hr class="half1 copyhr">
    <div class="row-fluid copyright">
      <div class="span12 center">&copy;2018 DataCloudSec www.datacloudsec.com</div>
      <div class="center">
          <img src="static\assets\ico\gh.png">
          京ICP备16038751号
      </div>
    </div>
  </div>
</template>
<style>
  .footerlink li a,.footerlink li span
{
  font-size: 12px;
	color:#2790B0;
}
</style>
<script>
export default {
  methods: {
	  goProduct1() {
        this.$router.push({ path: '/product-1' });
        window.scrollTo(0,document.body.scrollHeight); 
        window.scrollTo(0,0);
		},
		goProduct2() {
        this.$router.push({ path: '/product-2' });
        window.scrollTo(0,document.body.scrollHeight); 
        window.scrollTo(0,0); 
		},
		goProduct3() {
        this.$router.push({ path: '/product-3' });
        window.scrollTo(0,document.body.scrollHeight); 
        window.scrollTo(0,0);
		},
		goProduct4() {
        this.$router.push({ path: '/product-4' });
        window.scrollTo(0,document.body.scrollHeight); 
        window.scrollTo(0,0);
    },
    goProduct5() {
		    this.$router.push({ path: '/product-5' });
        window.scrollTo(0,document.body.scrollHeight); 
			  window.scrollTo(0,0);
    },
    goProduct6() {
        this.$router.push({ path: '/product-6' });
        window.scrollTo(0,document.body.scrollHeight); 
			  window.scrollTo(0,0);
    },
    goProduct7() {
        this.$router.push({ path: '/product-7' });
        window.scrollTo(0,document.body.scrollHeight); 
			  window.scrollTo(0,0);
    },
    goProduct8() {
        this.$router.push({ path: '/product-8' });
        window.scrollTo(0,document.body.scrollHeight); 
			  window.scrollTo(0,0); 
    },
    goProduct9() {
        this.$router.push({ path: '/product-9' });
        window.scrollTo(0,document.body.scrollHeight); 
			  window.scrollTo(0,0);
    },
    goProduct15() {
        this.$router.push({ path: '/product-15' });
        window.scrollTo(0,document.body.scrollHeight); 
			  window.scrollTo(0,0);
    },
    goProduct16() {
        this.$router.push({ path: '/product-16' });
        window.scrollTo(0,document.body.scrollHeight); 
			  window.scrollTo(0,0);
    },
    goZstack() {
        this.$router.push({ path: '/product-zstack' });
        window.scrollTo(0,document.body.scrollHeight); 
			  window.scrollTo(0,0);
    },
    goIntroduce() {
        this.$router.push({ path: '/introduce' });
        window.scrollTo(0,document.body.scrollHeight); 
        window.scrollTo(0,0);
    }
  }
}
</script>


