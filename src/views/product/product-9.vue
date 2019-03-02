<template>
    <div style="height:2300px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云用户实体行为分析系统UEBA（云）</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>UEBA/UBA收集并利用网络设备、系统、应用、数据库、和用户等多个节点产生的信息，创建一条基线以确定各种不同情况下的正常状态。
                        跟进聚合数据，评估新事件在上下文中是否不正常，以及不正常程度的深浅，并排序事件的重要性及可能的业务影响，
                        输出评估分析结果，为安全操作员提供确定是否采取行动的判断依据，以及安排响应行为的能力。</p>
                    <p>在安全领域，UBA/UEBA关注的是人而不是物。它通过机器学习来发现高级威胁，实现了自动化的建模，
                        相比于传统的(安全管理中心)SOC/(安全信息与事件管理)SIEM，其在发现异常用户行为、用户异常行为等方面具备了非常高的“命中率”。</p>
                    <img src="static\images\p5.png"/>
                    <h4 class="title3">业界动态:</h4>
                    <div class="line"></div>
                    <p>是近年RSA大会热点</p>
                    <p>基于数据流分析技术，区别于传统的深度包检测技术，是当前安全分析的突破口</p>
                    <p>规则检测是目前比较有效方式</p>
                    <p>大数据建模和分析是未来发展方向</p>
                    
                    <h4 class="title3">产品示意图:</h4>
                    <div class="line"></div>
                    <img src="static\images\p9.png"/>

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

