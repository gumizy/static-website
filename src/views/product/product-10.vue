<template>
    <div style="height:2800px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云网站安全检查系统</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>
                        安数云网站安全检查系统是一款专门针对WEB应用开发的自动化评估工具，旨在帮助用户了解WEB以及WEB应用的脆弱性情况，作出安全防护建议，
                        提升WEB可靠性。系统全面支持OWASP TOP 10漏洞检测；覆盖了论坛、内容管理系统（CMS）和电子商务应用系统等平台。
                        弥补了传统漏洞扫描系统不能深度扫描WEB应用漏洞的缺陷，同时针对每条漏洞提供详细的描述和修复建议，协助用户修补漏洞。
                        从而帮助用户充分了解WEB应用存在的安全隐患，建立更加安全可靠的WEB应用服务。
                    </p>
                    <img src="static\images\p10.png"/>
                    <h4 class="title3">产品特性:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon1">全面的漏洞覆盖</h5>
                    <p>
                        凭借公司强大且不断更新的漏洞库支撑，安数云网站安全检查系统全面支持OWASP TOP 10等主流安全漏洞（WASP TOP 10包括：注入攻击、跨站脚本（XSS）、
                        失效的认证和会话管理、不安全的直接对象引用、跨站请求伪造、安全配置错误、限制URL访问失败、尚未认证的重定向和转发、不安全的密码储藏、传输层保护不足），
                        可以对网站漏洞进行全面的检测。
                    </p>

                    <h5 class="title3 icon2">深入的漏洞检测</h5>
                    <p>安数云网站安全检查系统全面支持WEB2.0技术,支持对各类JavaScript脚本、Flash的解析，
                        能识别多种编程语言，可以实现对主流数据库、CMS系统、框架进行深入的漏洞检测。</p>

                    <h5 class="title3 icon3">灵活的扫描配置</h5>
                    <p>安数云网站安全检查系统可以随时根据用户需要自定义扫描任务，通过各种参数的灵活配置，实现按需扫描。
                        可配置参数包括：扫描资产、基本配置参数、HTTP链接参数、爬行参数、扫描参数、扫描周期、扫描目标（漏洞内容）等。</p>

                    <h5 class="title3 icon4">丰富的扫描报表</h5>
                    <p>安数云网站安全检查系统可以根据漏洞类型与漏洞危险等级形成相应的图行化报表，对相关的漏洞进行详细的内容展示以及漏洞介绍说明，
                        并给出修复建议，帮助用户了解并修复风险漏洞。同时系统可以根据用户需要以PDF/WORD/HTML等方式导出报表。</p>
                    <h4 class="title3">产品部署:</h4>
                    <div class="line"></div>
                    <p>安数云网站安全检查系统使用方便，操作简单。用户只要将其安装在一台Windows机器上，接入网络即可正常使用。</p>
                    <img src="static\images\p102.png"/>

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

