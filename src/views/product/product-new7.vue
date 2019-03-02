<template>
    <div style="height:2100px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <hr class="half">
            <div class="title2 center">WEB 应用漏洞百出 安数云新一代防护系统如何保护网站安全<br><br><br></div>
            <div >
                <div class="body">
                    <div class="item">
                       <p>黑客无孔不入，web应用漏洞问题频发，此前很多网站遭遇了挂马病毒的侵害，如一听音乐网,证劵之星等，不少用户访问这些网站后而导致隐私泄露，不仅如此大部分受害者的计算机上还被安装了多个恶意程序,
                           造成大规模的木马病毒传播，这对于网站安全以及客流量都造成了不同程度的影响。除了挂马病毒外，WEB应用常见漏洞还有访问控制、跨站点脚本攻击、注入式攻击、程序拒绝服务攻击等，漏洞之多，
                           导致网站安全防不胜防，这就致使了一些网络安全公司不得不长期与这些不法黑客进行安全拉锯战，安数云就是成员公司之一。</p>
                    </div>
                    <div class="item">
                        <h4 class="title3">RASP WAF系统发展历程</h4>
                        <div class="line"></div>
                        <p>北京安数云在2008年成立公司初期时就明确，公司重点在于网络安全领域中的应用安全部分，在长达10年的沉淀与磨砺后，在今年成功研发了RASP WAF防御系统，系统一经推出赢得了行业和用户的高度认可。
                            RASP WAF防御系统之所以能收到业界与用户的如此认可，与公司的发展历程密不可分，公司发展历程大致可分为三个阶段，即沉淀期、成长期、发展期，沉淀期主要研究成果是WAF系统以及WEB扫描系统，
                            这对公司今后研发RASP WAF防御系统奠定了基础；成长期主要研究成果是虚拟化检测数据、仿真模拟检测，数据库扫描系统，这对今后研发RASP WAF防御系统提供了技术支持；发展期从2015至今，
                            公司利用原有的技术支持，再加之后期改进，最后设计出了这款明星产品 RASP WAF智能防御系统！</p>
                        <h4 class="title3">RASP WAF防御系统解读</h4>
                        <div class="line"></div>
                        <p>RASP WAF防御系统可以提高网站防御能力，很多网站之所以会遭受黑客的袭击是因为防御系统落后导致的问题，这些黑客通过各种手段， SQL注入，网站敏感文件扫描，获取系统管理员的账号和密码，
                            修改网站页面的内容，并向页面中加入恶意转向代码，这对于网站安全及客流量都将会造成巨大的损害，不得不重视。</p>
                        <p>安数云RASP WAF系统可以通过Web攻击防御、0 Day漏洞实时补丁修复、OWASP TOP10安全威胁精确防护、网页防篡改等全方位、多维度防护，实现了应用自防护，减小了其误报、漏报的问题，
                            通过人工智能等精准识别技术，其中WEB攻击实时防御可以有效地解决网站频繁受到攻击的问题，安数云RASP WAF系统具有更全面、更智能的数据库，可以有效防御SQL注入、XSS跨站脚本等问题，
                            从根源处抵御不法分子的入侵，对网站安全实行全方位的监控。</p>
                        <p>9月13日召开的第五届中国互联网安全大会上提到，截至上半年，我国网民规模达7.51亿，互联网普及率达54.3%。网络使用人群不断增多，随之而来的网络攻击也不断增加，目前我国网络攻击处于高发态势，
                            这就更需要用户提升网站的防御能力，减少不必要的损失，安数云紧跟网络安全局面，不断调整防护系统，提高网站御敌能力，力求做到完美。</p>
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