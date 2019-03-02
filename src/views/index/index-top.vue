<template>
<div class="nav-reaction">
  <!-- v-bind:style="bgimg" -->
    <div class="navbar navbar-static-top "> 
      <div class="container ">
        <router-link to="index">
        <a class="brand"><img style="height:60px;" src="static\assets\ico\logo.png"><span></span></a>
        </router-link>
    <div style="width:100%;position: relative;left:230px;top:10px;">
  <el-menu :default-active="activeIndex" class="el-menu-demo touMingDiv" background-color="white" mode="horizontal" @select="handleSelect">
  <!-- <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"> -->
    <router-link to="index">
    <el-submenu index="1">
      <template slot="title"><span>首页</span></template>
      <router-link to="introduce"><el-menu-item index="1-1">关于安数云</el-menu-item></router-link>
      <router-link to="product-news"><el-menu-item index="1-2">新闻动态</el-menu-item></router-link>
      <router-link to="license"><el-menu-item index="1-3">荣誉资质</el-menu-item></router-link>
      <router-link to="job"><el-menu-item index="1-4">人才招聘</el-menu-item></router-link>
      <router-link to="introduce"><el-menu-item index="1-5">联系我们</el-menu-item></router-link>
      <router-link to="upgrade"><el-menu-item index="1-5">产品升级</el-menu-item></router-link>
    </el-submenu>   
    </router-link>
    <el-submenu index="2">
      <template slot="title"><span>云安全解决方案</span></template>
      <router-link to="product-16"><el-menu-item index="2-1">云安全整体解决方案</el-menu-item></router-link>
      <router-link to="product-1"><el-menu-item index="2-2">云安全池</el-menu-item></router-link>
      <router-link to="product-zstack"><el-menu-item index="2-3">云平台</el-menu-item></router-link>
    </el-submenu>
    <router-link to="product-15">
    <el-menu-item index="3"><span>云边界安全</span></el-menu-item>
    </router-link>
    <el-submenu index="4">
      <template slot="title"><span>虚拟化安全服务</span></template>
      <router-link to="product-3"><el-menu-item index="4-1">安数云大数据态势感知系统(SAAS)</el-menu-item></router-link>
      <router-link to="product-5"><el-menu-item index="4-2">安数云云边界安全系统(CASB)</el-menu-item></router-link>
      <router-link to="product-4"><el-menu-item index="4-3">安数云RASP WAF（云）</el-menu-item></router-link>
      <router-link to="product-9"><el-menu-item index="4-4">安数云用户实体行为分析系统UEBA(云)</el-menu-item></router-link>
      <router-link to="product-2"><el-menu-item index="4-5">安数云综合安全检查评估系统(SAAS)</el-menu-item></router-link>
      <router-link to="product-6"><el-menu-item index="4-6">安数云WEB应用防火墙系统WAF(云)</el-menu-item></router-link>
      <router-link to="product-7"><el-menu-item index="4-7">安数云网络入侵防御系统NGIPS(云)</el-menu-item></router-link>
      <router-link to="product-8"><el-menu-item index="4-8">安数云数据库审计与风险控制系统(云)</el-menu-item></router-link>
      <a href="http://ddos.datacloudsec.com:8055"><el-menu-item index="4-9">安数云抗DDOS平台</el-menu-item></a>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title"><span>基础安全产品</span></template>
      <router-link to="product-2"><el-menu-item index="5-1">安数云综合安全检查评估系统</el-menu-item></router-link>
      <router-link to="product-6"><el-menu-item index="5-2">安数云WEB应用防火墙系统WAF</el-menu-item></router-link>
      <router-link to="product-7"><el-menu-item index="5-3">安数云网络入侵防御系统NGIPS</el-menu-item></router-link>
      <router-link to="product-8"><el-menu-item index="5-3">安数云数据库审计与风险控制系统</el-menu-item></router-link>
    </el-submenu>
    <router-link to="customization">
    <el-menu-item index="6"><span>定制化安全服务</span></el-menu-item>
    </router-link>
  </el-menu>
</div>
</div>
</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      bgimg: ''
    };
  },
  mounted() {
    // this.getBgimg();
  },
  methods: {
     handleSelect(key, keyPath) {
        // console.log(key, keyPath);
    },
    // getBgimg() {
    //   if(window.innerWidth > 1680){
    //     this.bgimg = 'background:url(static/images/top.png);background-size:100% 80px;'
    //   }else{
    //     this.bgimg = 'background:url(static/images/1440top.png);background-size:100% 80px;'
    //   }
    // }
  }
}
</script>
<style scoped>
/* .el-submenu { background-color:#282c3d !important } */

.el-menu-demo span{
color: black;
}
.navbar .nav li.dropdown > .dropdown-toggle .mycaret  /* 下拉箭头设置 */
{ 
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: top;
  border-top: 4px solid #000000;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  content: "";
	border-bottom-color: #ffffff;
  border-top-color: #ffffff;
  margin-top: 6px;
  
}
/*背景颜色!!!*/
/* .navbar .navtest > li > a:hover, .navbar .navtest > li > a:hover, .navbar .navtest >.sfHover > a
{
	background: red;  
	color: #fff;
	text-shadow: none;
} */
/*字体颜色!!!*/
/* .navbar .navtest > li > a
{
	color: #ffffff;  
	font-weight: 400;
	text-shadow: none;
	text-transform: uppercase;
} */
/* .navbar .navtest > li > a
{
	background: none;
	float: none;
	font-weight: 600;
	moz-transition: all 0.3s ease-in-out;
	ms-transition: all 0.3s ease-in-out;
	o-transition: all 0.3s ease-in-out;
	padding: 50px 20px 30px 20px;
	text-shadow: none;
	transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
}
.navbar-test {
  min-height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fafafa;
  background-image: -moz-linear-gradient(top, #ffffff, #f2f2f2);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#f2f2f2));
  background-image: -webkit-linear-gradient(top, #ffffff, #f2f2f2);
  background-image: -o-linear-gradient(top, #ffffff, #f2f2f2);
  background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff2f2f2', GradientType=0);
  *zoom: 1;
} */
.touMingDiv{  
    color:#fff;  
    background:rgba(0,0,0,0);  
    background:#000 9;/*CSS Hack,只能对ie9以下浏览器ie6,ie7,ie8有效，否侧ie10,FF,Cherome会失去透明效果*/  
    filter:Alpha(opacity=0);/*只对ie7,ie8有效*/  
}  
.touMingDiv p,  
.touMingDiv div,  
.touMingDiv img{  
    position:relative;  
    /*或者是absolute，都可以使文字不透明，这样做还是为了  
    兼容ie9,ie8,ie7下背景透明而而背景上的文字不透明的效果*/  
}  
.touMingDiv a {
  text-decoration: none;
}
</style>

