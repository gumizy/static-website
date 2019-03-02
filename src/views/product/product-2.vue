<template>
    <div style="height:4000px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft2>
            </ProductLeft2>       
        <div class="productBox">
            <div class="title2 center">综合安全检查评估系统</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <p>安数云综合安全检查评估系统，是一套完整的、全方位的漏洞管理与等级保护检查评估系统。
                        该系统包括资产管理、系统漏扫、网站漏扫、数据库漏扫、基线配置核查、木马病毒扫描、弱口令扫描、网站恶意代码扫描、实时在线的网站监控预警
                        （含可用性、安全漏洞、篡改、敏感内容、网马、暗链、钓鱼等）、等级保护检查评估等功能，一揽子解决了用户信息化环境下，
                        所有应用设备及信息系统的漏洞管理、监测预警、定级评估等问题，实现了等保合规化与扫描结果的综合分析与可视化展示。</p>
                    <p>未来，该系统将进一步增加WIFI检测、工控漏扫、物联网漏扫、大数据系统漏扫、云系统漏扫、代码审计等功能。</p>
                    <img src="static\images\p2.png" >
                    <br>
                    <h4 class="title3">产品功能:</h4>
                    <div class="line"></div>
                    <br>
                    <img src="static\images\p24.png" >
                    <br>
                    <h4 class="title3">我们的优势:</h4>
                    <div class="line"></div>
                    <br>
                    <img src="static\images\p21.png" >
                    <br>
                    <h4 class="title3">产品部署:</h4>
                    <div class="line"></div>
                    <br>
                    <h5 class="title3 icon1">1、企业结构比较简单，网络主机数量较少。</h5>
                    <img src="static\images\p22.png" >
                    <h5 class="title3 icon1">2、分公司或下属机构比较多，网络复杂。</h5>
                    <p>总部部署一台管理平台，各分公司或下属机构部署扫描引擎，总部下发扫描任务，各分公司扫描引擎执行扫描，并把扫描结果回传总部管理平台，
                        管理平台进行结果汇总分析。</p>
                    <img src="static\images\p23.png" >
                </div>
            </div>
        </div>
        </div>
        <footer class="footer"  style="width:100%;position: absolute;bottom:0;">
            <IndexFooter></IndexFooter>
        </footer>
    </div>
</template>
<script>
  import ProductMain from './product-main.vue'
  import ProductLeft2 from './product-left2.vue'
  import IndexFooter from '../index/index-footer.vue'
export default {
    components:{
      ProductMain,
      ProductLeft2,
      IndexFooter
  }
}
</script>

