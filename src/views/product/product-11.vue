<template>
    <div style="height:2700px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云数据库安全检查系统</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>由于数据库存储着大量的重要信息和机密数据，而且在数据库系统中大量数据集中存放，供多用户共享，
                        因此，必须加强数据库系统本身的安全性以及数据库访问的控制，实现数据安全防护。</p>
                    <p>安数云数据库安全检查系统是安全专家在深入分析研究数据库典型安全漏洞以及流行的攻击技术基础上，
                        研发的一款数据库安全评估系统，是专门针对数据库应用的自动化安全检查系统，拥有强大的漏洞检测能力，
                        检测范围覆盖全面，包含提权漏洞、缓冲区溢出漏洞、访问控制漏洞、SQL注入漏洞、执行权限过大漏洞、
                        访问权限绕过漏洞等几千个检查项，能够主动发现数据库安全问题，并给出修复建议，实现数据库的安全管理。</p>
                    <img src="static\images\p11.png"/>
                    <h4 class="title3">产品特性:</h4>
                    <div class="line"></div>
                    
                    <h5 class="title3 icon1">多维度脆弱性覆盖</h5>
                    <p>凭借公司强大且不断更新的漏洞库支撑，安数云数据库安全检查系统支持缓冲区溢出、访问控制、权限提升、SQL注入、
                        过大权限、权限绕过等数据库漏洞，基本覆盖了已知的全部数据库漏洞，同时系统可以对不安全数据库信息进行检查，
                        最大限度的发现数据的脆弱性，为数据库加固提供依据。</p>

                    <h5 class="title3 icon2">全面的数据库类型支持</h5>
                    <p>安数云数据库安全检查系统作为专业的数据库扫描产品，全面支持市面上所有主流数据库的扫描，
                        包括Mysql、Oracle、DB2 v8/v9/v10、DB ZOS、Informix、SqlServer2000/2005/2008、Sybase等国外数据库，
                        以及DaMeng、Kingbase等国产数据库，满足用户原有数据库安全分析的同时，也为用户数据库国产化做好安全保障。</p>

                    <h5 class="title3 icon3">丰富的扫描结果呈现</h5>
                    <p>安数云数据库安全检查系统可以根据漏洞类型与漏洞危险等级形成相应的图行化报表，
                        对相关的漏洞进行详细的内容展示以及漏洞介绍说明，并给出修复建议，帮助用户了解并修复风险漏洞。
                        同时系统可以根据用户需要以PDF/WORD/HTML等方式导出报表。</p>

                    <h4 class="title3">产品部署:</h4>
                    <div class="line"></div>
                    <p>安数云数据库安全检查系统使用方便，操作简单。用户只要将其安装在一台机器上，接入网络即可正常使用。</p>
                    <img src="static\images\p112.png"/>

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

