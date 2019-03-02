<template>
    <div style="height:2700px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云系统安全检查系统</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>安数云系统安全检查系统是安数云结合多年的漏洞挖掘实践经验，自主研发的新一代漏洞管理系统，
                        漏洞库包括将近50000条漏洞规则，覆盖了缓冲区溢出漏洞、拒绝服务攻击漏洞、弱口令、信息泄露漏洞等全部常见漏洞；
                        检测覆盖操作系统、应用程序、WEB服务器、数据库、网络设备、安全设备、虚拟化设备等，对多维度信息资产进行纵深漏洞扫描；
                        高效、准确的对网络脆弱性进行评估，同时针对每一条漏洞提供详细的描述和修复建议，
                        从而帮助用户充分了解整个信息系统存在的安全隐患，并修补漏洞，建立更加安全可靠的现代化信息系统。</p>
                    <img src="static\images\p5.png"/>
                    <h4 class="title3">产品特性:</h4>
                    <div class="line"></div>
                    
                    <h5 class="title3 icon1">多维度脆弱性覆盖</h5>
                    <p>凭借公司超过50000条的超大漏洞库支撑，安数云系统安全检查系统覆盖缓冲区溢出漏洞、拒绝服务攻击漏洞、
                        信息泄露漏洞等已知的漏洞，同时系统可以对弱口令等不安全信息进行检查，从多维度发现系统的脆弱性，为系统加固提供依据。</p>

                    <h5 class="title3 icon2">全面的信息资产支持</h5>
                    <p>安数云系统安全检查系统全面支持对包括Windows、Unix、Linux在内的各种系列的操作系统的脆弱性检测，
                        同时支持交换机、路由器、防火墙等网络以及网络安全产品安全检测，检测深度更是覆盖到操作系统、应用程序、中间件等。
                        帮助用户对信息系统资产进行大范围的健康体检。</p>

                    <h5 class="title3 icon3">多视角检测方式</h5>
                    <p>产品设计基于不同客户环境的安全需求，支持多种检测方式，包括SSH登录扫描、SMB登陆扫描、EXSI登陆扫描等，
                        可以根据客户情况选择合适的扫描方式；产品可以实现真正的安全扫描，扫描过程不会影响服务或者进程的正常运行。</p>

                    <h5 class="title3 icon4">丰富的扫描结果呈现</h5>
                    <p>安数云系统安全检查系统可以根据漏洞类型与漏洞危险等级形成相应的图行化报表，对相关的漏洞进行详细的内容展示以及漏洞介绍说明，
                        并给出修复建议，帮助用户了解并修复风险漏洞。同时系统可以根据用户需要以PDF/WORD/HTML等方式导出报表。</p>
                    <h4 class="title3">典型案例:</h4>
                    <div class="line"></div>
                    <p>某地人防部门内网信息资产比较全面，网络也有了基础安全防护，由于缺乏有效的安全集中管理，信息资产，
                        特别是计算机、服务器等网络单元缺乏统一安全检测。</p>
                    <img src="static\images\p12.png"/>

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

