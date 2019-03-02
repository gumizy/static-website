<template>
    <div style="height:3300px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云网站监控预警系统</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>安数云网站监控预警系统是一款专门针对WEB应用而开发的实时监控预警系统，能够主动发现网站的漏洞、实时监控网站的安全状况、
                        实时预警，检查范围覆盖了论坛、内容管理（CMS）和电子商务应用等系统。全面支持OWASP TOP 10 漏洞检测，
                        如SQL注入、跨站脚本、文件包含、命令执行、信息泄漏等全部漏洞；支持检测网站可用性、网马和暗链、敏感内容以及实时监控网站是否被篡改。
                        实现对网站可用性监控、完整性校验、脆弱性评估并生成安全评估报告。7*24小时不间断监控WEB应用，发现漏洞威胁进行实时预警。</p>
                    <img src="static\images\p5.png"/>
                    <h4 class="title3">产品特性:</h4>
                    <div class="line"></div>
                    
                    <h5 class="title3 icon1">一键网站资产发现</h5>
                    <p>可发现指定资产中的Web服务；</p>
                    <p>可发现指定资产的地理位置。</p>

                    <h5 class="title3 icon20">实时可用性检测</h5>
                    <p>实时域名劫持检测；</p>
                    <p>可实时检测DNS解析时间、连接服务器时间、服务器响应时间等。</p>

                    <h5 class="title3 icon20">全方位WEB漏洞检查</h5>
                    <p>支持代理设置；</p>
                    <p>支持Basic认证；</p>
                    <p>支持Web2.0、Flash解析；</p>
                    <p>支持https，并支持证书上传；</p>
                    <p>扫描规则覆盖OWASP TOP 10 漏洞；</p>
                    <p>可扫描全部主流WEB服务器、各种编程语言、主流数据库、常见CMS、主流框架等。</p>

                    <h5 class="title3 icon20">实时篡改检测</h5>
                    <p>产品可以通过图片MD5比较、页面标题比较、新建或者删除连接提醒、页面相似度阀值设置等进行实时篡改检测。</p>

                    <h5 class="title3 icon20">实时敏感内容检测</h5>
                    <p>图片文字识别；</p>
                    <p>自定义敏感关键字；</p>
                    <p>身份证信息、银行卡信息识别。</p>

                    <h5 class="title3 icon20">预警系统</h5>
                    <p>产品7*24小时不间断监控Web应用，发现威胁可通过系统告警、电子邮件、短信发送等方式进行实时预警。</p>

                    <h5 class="title3 icon20">丰富的扫描报告</h5>
                    <p>可以根据漏洞类型展示风险状况；</p>
                    <p>可以根据危险等级展示风险情况；</p>
                    <p>提供详细的漏洞内容展示；</p>
                    <p>支持导出多种格式的报告，如pdf、word、html等。</p>

                    <h4 class="title3">典型案例:</h4>
                    <div class="line"></div>
                    <h5 class="title3">某药监局电子政务外网</h5>
                    <p>该单位计划分步骤实现等级保护三级标准，主链路基础安全防护相对完善。然后缺乏网络整体监控，
                        导致管理员的安全维护工作相当繁琐。为了实现等级保护以及简化管理员的工作，
                        该单位继续一款能对整个信息化系统进行全面安全检测的安全产品。</p>
                    <p>经过客户充分对比考虑，最终选择安数云网站监控防御系统对整个信息化资源进行安全检测并实现威胁预警。</p>
                    <img src="static\images\p14.png"/>

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
  import ProductLeft from './product-left2.vue'
  import IndexFooter from '../index/index-footer.vue'
export default {
    components:{
      ProductMain,
      ProductLeft,
      IndexFooter
  }
}
</script>

