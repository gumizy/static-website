<template>
    <div style="height:3000px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <hr class="half">
            <div class="title2 center">安数云综合安全检查评估系统诚邀您免费试用<br><br><br></div>
            <div >
                <div class="body">
                    <div class="item">
                        <p>安数云综合安全检查评估系统是一套完整的、全方位的漏洞管理与等级保护检查评估系统。</p>
                        <p>该系统包括资产管理、系统漏扫、网站漏扫、数据库漏扫、基线配置核查、木马病毒扫描、弱口令扫描、网站恶意代码扫描、
                            实时在线的网站监控预警（含可用性、安全漏洞、篡改、敏感内容、网马、暗链、钓鱼等）、等级保护检查评估等功能，
                            一揽子解决了用户信息化环境下，所有应用设备及信息系统的漏洞管理、监测预警、定级评估等问题，实现了等保合规化与扫描结果的综合分析与可视化展示。</p>
                        <p>未来，该系统将进一步增加WIFI检测、工控漏扫、物联网漏扫、大数据系统漏扫、云系统漏扫、代码审计等功能。</p>
                    </div>
                    <div class="item">
                        <h4 class="title3">关于功能:</h4>
                        <div class="line"></div>
                        <h5 class="title3 icon20">常规扫描</h5>
                        <p>操作系统、应用软件漏洞扫描、弱口令扫描</p>
                        <h5 class="title3 icon20">深入扫描</h5>
                        <p>木马病毒扫描、网站恶意代码检查</p>
                        <h5 class="title3 icon20">网站监控</h5>
                        <p>可用性+安全漏洞+篡改+敏感内容+网马+暗链+钓鱼</p>
                        <h5 class="title3 icon20">数据库扫描</h5>
                        <p>主流关系型数据库+国产数据库+NOSQL数据库</p>
                        <h5 class="title3 icon20">配置核查</h5>
                        <p>主机+中间件+数据库+网络设备+安全设备</p>
                        <h5 class="title3 icon20">等保合规</h5>
                        <p>结合工具检查、问卷调查等，对信息系统进行等级保护测评</p>
                        <h4 class="title3">产品亮点</h4>
                        <div class="line"></div>
                        <h5 class="title3 icon20">便捷</h5>
                        <p>一键扫描，一建关联</p>
                        <h5 class="title3 icon20">易用</h5>
                        <p>多种漏洞全面扫描，及时生成多角度、细粒度的统计报表</p>
                        <h5 class="title3 icon20">精准</h5>
                        <p>50000+漏洞库业内最全，重大、紧急漏洞规则及时更新</p>
                        <h5 class="title3 icon20">兼容</h5>
                        <p>支持国产操作系统及国产数据库</p>

                        <h4 class="title3">安数云诚邀精英企业试用</h4>
                        <div class="line"></div>
                        <p>您想要的安全，我必竭力守护！</p>
                        <p>安数云诚邀精英企业申领试用！</p>
                        <p>试用者，欢迎咨询安数云各营销办事处，信息如下：</p>
                        <table border="2">
                            <thead>
                                <tr>
                                    <th style="width:330px;">区域</th>
                                    <th style="width:330px;">负责人</th>
                                    <th style="width:330px;">联系方式</th>
                                </tr>
                            </thead>
                            <tbody style="text-align:center;">
                                <tr>
                                    <td>北京</td>
                                    <td>王海军</td>
                                    <td>13811555015</td>
                                </tr>
                                <tr>
                                    <td>郑州</td>
                                    <td>徐军伟</td>
                                    <td>15617737665</td>
                                </tr>
                                <tr>
                                    <td>济南</td>
                                    <td>丁塞北</td>
                                    <td>13156197088</td>
                                </tr>
                                <tr>
                                    <td>南京</td>
                                    <td>徐  靖</td>
                                    <td>13337705733</td>
                                </tr>
                                <tr>
                                    <td>杭州</td>
                                    <td>范丙华</td>
                                    <td>13958035161</td>
                                </tr>
                                <tr>
                                    <td>广州</td>
                                    <td>魏海霞</td>
                                    <td>13802512753</td>
                                </tr>
                                <tr>
                                    <td>深圳</td>
                                    <td>方楚庆</td>
                                    <td>13924646665</td>
                                </tr>
                                <tr>
                                    <td>哈尔滨</td>
                                    <td>张天明</td>
                                    <td>13104614321</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <img src="static\images\banner1-1.png"/>
                    </div>
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
import IndexFooter from '../index/index-footer.vue'
export default {
  components:{
      ProductMain,
      IndexFooter
  }
}
</script>