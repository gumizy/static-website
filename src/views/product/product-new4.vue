<template>
    <div style="height:2300px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <hr class="half">
            <div class="title2 center">RASP WAF与传统WAF特性对比 结果却出乎意料<br><br><br></div>
            <div >
                <div class="body">
                    <div class="item">
                       <p>近几年，国内互联网的迅猛发展让一些创业者看到了新的机遇，这也使得互联网企业雨后春笋般在全国范围内出现，与此同时，与企业相关的网络安全产品也逐渐变得紧俏起来。作为国内应用安全领域两款主流的Web 应用程序保护技术，RASP WAF 和传统WAF一直备受国内企业和个人网站用户的关注，对于这两种技术的区别，有知名机构进行了详细的测评，结果却出人意料，到底这两种技术又有哪些区别呢，跟着小编一起来看看吧！</p>
                    </div>
                    <div class="item">
                        <h4 class="title3">RASP WAF与 传统WAF 的特性对比</h4>
                        <div class="line"></div>
                        <p>在测试中发现，RASP WAF技术与传统 WAF 技术在特性方面有着诸多差别，主要表现在准确性、实时性、可靠性、平台关联性、可视性、网络协议、语言涵盖情况、维护等几个方面。比如，在准确性方面，RASP WAF技术只在可能发生攻击的关键函数调用处检查是否有恶意内容输入，
                            并且监视输入和输出数据以及整个数据逻辑流，而传统WAF过滤技术则是基于相对原始的模式匹配对所有输入内容均进行检测；在可靠性方面，RASP WAF技术不会在高负荷情况下进入“失效开放”状态——无论服务器的负载如何，总会对代码进行检测，而传统WAF技术会因为单一故障点可能会在高负荷情况下进入“失效开放”状态，使原本受到保护的 Web 应用程序处于攻击威胁之下。</p>
                        <h4 class="title3">威胁与漏洞检测能力对比</h4>
                        <div class="line"></div>
                        <p>在威胁与漏洞检测能力对比方面的区别，RASP WAF与传统 WAF 技术主要体现在攻击种类监测、攻击类型识别、未知漏洞监测、输入输出检测、规则配置这几个方面。</p>
                        <p>比如RASP WAF技术能检测出的攻击种类更多，而且可以提供非常有用的攻击信息和漏洞信息，大幅提高漏洞修补的效率，而传统WAF由于无法在应用程序级别进行检测，所以，某些攻击类型可能逃过检测；RASP WAF技术可以准确识别大多数攻击类型，传统WAF会产生误报，尤其是SQL注入检测；RASP WAF技术能检测出未知漏洞，而传统WAF技术无法检出代码中的未知漏洞，比如未经处理的异常；
                            RASP WAF在检查输入的同时也会检查输出，而传统WAF技术仅关注输入；RASP WAF没有精细的规则配置，传统WAF技术配置选项精细，实现复杂。</p>
                        <p>从整体的测评结果来看，RASP WAF的性能要优于传统 WAF，它可以对抗一些会被 传统WAF 漏过的漏洞类型，而且RASP WAF可以让人们深入了解它所保护的应用程序，在这方面远远超过了传统WAF。也正是基于RASP WAF在这方面的优势，包括安数云（北京安数云信息技术有限公司）在内的几家国内IT技术企业早在两年前便已展开对这项技术的研发和测试，其中安数云基于多年的WEB应用防护经验，
                            在2017年推出了RASP WAF系统，受到了市场和用户的认可，成为了国内较早成功发布RASP WAF系统的三大安全厂商之一。</p>
                        <p>有业内人士认为，虽然传统WAF系统仍然有一定的市场，但是RASP WAF技术已经成为了新的趋势，而且RASP WAF技术可以有效解决传统WAF技术漏报、误报的问题，可以为用户的网站保驾护航，而像安数云RASP WAF系统这样的产品最终会在应用安全市场占领优势地位，
                            对于普通用户来说，选择更为安全靠谱的安数云RASP WAF技术才是明智的选择。</p>
                        <h4 class="title3">IT国产化道路任重而道远</h4>
                        <div class="line"></div>
                        <p>某知名业内人士也认为，截止到目前为止，IT国产化已经取得了瞩目的成就，这已经成为了一个不可逆转的趋势，国产设备的性价比、本地化服务已经得到了市场认可，这样客户就很难再回到国外厂商的怀抱。尽管如此，他也承认，IT国产化这条道路存在诸多问题，比如国内IT企业主要发力于中低端市场，很难在高端市场与国际企业一较高下。</p>
                        <p>不过幸运的是，在如此有利的国内环境和政策背景下，像安数云这样在IT行业各细分领域沉淀多年的企业正在持续发力，这也促使整个IT产业链条逐渐被盘活，我们也有理由相信，在未来，更加有效的IT产品将不断涌现。</p>
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