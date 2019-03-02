<template>
    <div style="height:2500px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云云安全访问代理系统CASB（云）</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>云计算是整个IT领域的一场变革，计算资源规模化、集约化使工作效率得到了极大提升，然而也带来了对企业资产、敏感数据等进行保护的新挑战，
                        在2016年RSA大会上，云安全联盟（CSA）报告上公布的12大云计算威胁中，数据泄露，弱身份信息和访问管理造成的威胁排列前名。
                        造成这些威胁的主要原因是我们正在使用的云服务对于租户来说是不透明的，且租户缺少对云服务的掌控力，
                        与此同时传统安全解决方案又难以部署在云服务之前。因此能否解决这些安全难题，成为企业向云迁移的先决条件之一。</p>
                    <p>安数云云访问安全代理网关(CASB)是公司针对云计算环境中企业资产、敏感数据等进行安全保护而开发的最新安全产品，
                        它帮助企业在使用云应用和服务（包括 SaaS 和 IaaS）时对数字资产先行进行保护，解决了用户使用云服务的安全问题</p>
                    <img src="static\images\p5.png"/>
                    <h4 class="title3">产品特性:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon1">数据安全</h5>
                    <p>由于数据安全防护的复杂性，云服务提供商往往不能绝对保障用户数据的安全，因此企业在使用云应用服务的过程中需要“自我保护”。
                        CASB设备提供透明加解密和阻断两种方式，保证用户数据安全，防止用户数据在云端“裸奔”。</p>

                    <h5 class="title3 icon1">可见性</h5>
                    <p>CASB系统可以对网络中的云应用流量进行分析，发现其中的异常流量以及异常行为，避免内部用户有意或无意地将公司敏感信息泄露出去。</p>

                    <h5 class="title3 icon1">威胁防护</h5>
                    <p>对网络中的流量进行深度解析，精准发现其中的云应用，实现云应用的可见性；</p>
                    <p>将“IP-MAC-应用账号”进行关联，实现内部用户和对应资产的可见性；</p>
                    <p>对云应用进行风险评级，为用户选择云应用提供参考，实现应用风险的可见性。</p>

                    <h5 class="title3 icon1">合规性</h5>
                    <p>企业在使用云应用的过程中，需要满足内部的安全管理要求，只有满足条件的文件才可以放在云上保存，或通过云应用传输。
                        CASB设备可以通过内置策略库或自定义策略对文件和内容进行筛选，满足策略要求的内容才允许迁移到云中。</p>

                    <h4 class="title3">产品部署:</h4>
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

