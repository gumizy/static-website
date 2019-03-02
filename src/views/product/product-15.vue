<template>
    <div style="height:2400px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">云边界安全</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <p>安数云·云访问安全代理系统（CASB）——您身边的云边界安全防护专家</p>
                    <p>安数云CASB系统是针对云计算环境中企业资产、敏感文件等进行安全保护而开发的最新安全产品。作为近年来RSA大会亮点技术之一，
                        CASB能解决使用云应用和服务（包括 SaaS 和 IaaS）所引发的一系列问题，特别是帮助公有云环境的用户解决数字资产先行保护的问题。</p>
                    <h4 class="title3">核心优势:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon20">1、深入到云应用</h5>
                    <p>传统产品只关注到http(s)层,CASB产品深入http(s)所封装的具体应用（如钉钉、百度云）</p>
                    <h5 class="title3 icon20">2、透明的文件加解密</h5>
                    <p>传统产品对违规的操作通常只有放行和阻断,CASB除了放行和阻断之外，还提供透明的文件加解密功能</p>

                    <h5 class="title3 icon20">3、专注https </h5>
                    <p>出于性能等原因考虑，传统产品对https的关注度不高,云服务中基本都是https传输，因此CASB对https的关注度非常高</p>

                    <h4 class="title3">功能亮点:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon20">1、云应用识别</h5>
                    <p>丰富的云应用库，涵盖国内外主流云应用</p>
                    <h5 class="title3 icon20">2、云应用告警及阻断</h5>
                    <p>基于云应用识别，准确度高，效果好</p>
                    <h5 class="title3 icon20">3、流量可见</h5>
                    <p>从用户，应用，流量类型等多个维度实现网络内http/https流量使用情况的可见性</p>
                    <h5 class="title3 icon20">4、文件传输透明加解密</h5>
                    <p>使用关键应用进行文件传输时，传出文件进行加密，接收文件进行自动解密，对内部用户透明加密密钥由客户输入的密钥种子生成，使密钥掌握在客户手中</p>
                    <h5 class="title3 icon20">5、身份设备信息关联</h5>
                    <p>实现用户(账号)、设备、应用及文件的全方位关联，以便溯源</p>
                    <h4 class="title3">科学部署:</h4>
                    <div class="line"></div>
                    <img src="static\images\p52.png"/>

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

