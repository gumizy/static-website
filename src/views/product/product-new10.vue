<template>
    <div style="height:2800px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <hr class="half">
            <div class="title2 center">安数云，让信息安全无懈可击<br><br><br></div>
            <div >
                <div class="body">
                    <div class="item">
                        <p>随着云计算市场的快速增长，云计算产品的日趋成熟，云资源成为黑客攻击的又一主要目标。面对日趋复杂的网络环境，单一的网站漏扫、系统漏扫产品已经无法应对漏洞危机带来的新威胁。信息专家呼吁，全方位、多层级、智能化、一体化的综合漏洞管理系统才能防御无处不在的安全威胁。</p>
                        <p>以2016年推出的“安数云综合安全检查评估系统”为例。据安全专家推荐，该系统是一款“全生命周期漏洞管理与等级保护检查评估系统”。该系统包括资产管理、系统漏扫、网站漏扫、数据库漏扫、基线配置核查、木马病毒扫描、弱口令扫描、网站恶意代码扫描、实时在线的网站监控预警
                            （含可用性、安全漏洞、篡改、敏感内容、网马、暗链、钓鱼等）、等级保护检查评估等功能，一揽子解决了用户信息化环境下，所有应用设备及信息系统的漏洞管理、监测预警、定级评估等问题，实现了等保合规化与扫描结果的综合分析与可视化展示。真正做到了“一切皆可视，一切皆安全”。这也是让众多用户认可与好评的主要原因。</p>
                        <p>据了解，安数云综合安全检查评估系统是基于漏洞知识库，通过采集信息、执行漏洞检测脚本对指定的远程计算机系统、应用程序、数据库、中间件、网站、网络设备、安全设备以及虚拟化设备等的安全脆弱性进行检测，
                            发现可被利用漏洞、不安全配置并实时预警的一款主动防御产品。从网络安全、主机安全、应用安全、数据安全等多个层面对基础信息系统进行深度检测，形成整体风险报告。</p>
                        <p> 业内及用户之所以称安数云综合安全检查评估系统是一款“全生命周期漏洞管理”系统，是因为，该系统的漏洞检测、结果分析、漏洞预警、漏洞修补、修复验证几个环节，可以高效、准确、全方位的检测各类脆弱性风险，提供专业、有效的修补建议，通过及时预警督促安全管理人员修复漏洞，形成漏洞管理闭环。</p>
                        <p>“网络信息系统的发展日新月异，相伴而来的就是层出不穷的网络信息安全问题。” 据综合安全检查评估系统研发负责人介绍，安数云必须未雨绸缪，不断丰富自己的产品、提升自己的服务。不久的将来，安数云综合安全检查评估系统还将进一步增加WIFI检测、工控漏扫、物联网漏扫、
                            大数据系统漏扫、云系统漏扫、代码审计等需求旺盛的强大功能，并积极预测可能出现的新问题，为网络时代保驾护航，让信息安全无懈可击。</p>
                        <br>
                        <br>
                        <img src="static\images\new10.jpg" >
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