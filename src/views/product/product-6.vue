<template>
    <div style="height:2900px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云WEB应用防火墙系统WAF</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>安数云WEB应用防火墙是北京安数云信息技术有限公司结合多年在应用安全领域理论研究与攻防实践经验积累的基础上，
                        自主研发的新一代应用级综合防护系统。保护您的WEB网站免受众多已知或未知的应用层攻击，
                        诸如SQL注入、XSS跨站、木马上传、CC攻击等。安数云WEB应用防火墙能够帮助用户解决目前所面临的各类常见及最新的应用安全问题，
                        同时满足等级保护、行业规范等政策法规的安全建设要求。</p>
                        <p>安数云WEB应用防火墙拥有多种不同硬件型号，充分满足各种类型客户需求，
                            提高WEB业务的可用性和安全性，确保WEB业务能够快速、安全、可靠交付。</p>
                    <img src="static\images\p5.png"/>
                    <h4 class="title3">产品特性:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon1">深度防御</h5>
                    <p>对HTTP/HTTPS流量解析，全方面检查网络中的攻击；</p>
                    <p>依据HTTP协议和WEB应用相关协议规范，对WEB应用的访问请求和应答进行深入分析和细粒度检查，阻止常见的WEB攻击；</p>
                    <p>高效的内容解析引擎对访问数据流进行协议检查，可屏蔽服务器指纹探测、阻断扫描、防止服务器敏感信息泄露；</p>
                    <p>对能够“绕过”传统防火墙与IPS的攻击方法和手段，可以精准阻断；</p>
                    <p>智能学习、分析应用业务流程和用户访问流程， 构建主动防御模型，杜绝未知攻击及合法用户的非法操作；</p>
                    <p>整理、分析、分类网络攻击特征，对网络中的流量进行攻击判断；</p>
                    <p>对访问来源或者访问资源进行单点控制，避免超出阈值的流量到达WEB服务器。</p>
                    <h5 class="title3 icon1">高可用性</h5>
                    <p>软件BYPASS，避免由于产品性能问题而影响用户网络中的业务；</p>
                    <p>硬件BYPASS，避免由于产品硬件故障导致用户的网络不可用；</p>
                    <p>双机热备，确保主设备故障下备机接管网络安全防护工作。</p>

                    <h5 class="title3 icon1">用户交互</h5>
                    <p>系统的操作流程简单，符合人性化设计；</p>
                    <p>分类记录攻击行为后形成详细的统计及24小时攻击趋势列表；</p>
                    <p>支持SYSLOG日志服务器、SNMP服务器、邮件服务器对攻击日志和运行日志的采集；</p>
                    <p>审计报表为系统的安全审计提供详细的数据，为管理者提供可靠的决策依据，降低应用系统的管理维护复杂度。</p>
           
                    <h4 class="title3">典型案例:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon1">北京某高效教育网络WEB服务加固部分</h5>
                    <p>该校网络复杂，信息系统相对完善，除学校对外发布的官网外，
                        还有校园论坛、学分系统、图书系统等大量教务系统都承载在HTTP/HTTPS协议上。
                        原有的WEB防护产品功能性能都无法满足学校信息化的发展，学校急需要功能强大性能优越的WEB防火墙产品进行。</p>
                    <p>经过客户充分对比考虑，最终选择安数云WEB应用防火墙进行加固改造。</p>
                    <img src="static\images\p6.png"/>

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
  import ProductLeft from './product-left.vue'
  import IndexFooter from '../index/index-footer.vue'
export default {
    components:{
      ProductMain,
      ProductLeft,
      IndexFooter
  }
}
</script>

