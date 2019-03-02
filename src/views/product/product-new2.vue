<template>
    <div style="height:2600px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <hr class="half">
            <div class="title2 center">传统WAF存瓶颈 安数云 RASP WAF系统强势登场<br><br><br></div>
            <div >
                <div class="body">
                    <div class="item">
                        <p>一个水桶, 底部只要有一个洞，水就会全部流光。在网络安全领域，Web 安全同理。</p>
                        <p>网络社交、网络购物以及网络游戏等一大批互联网产品的出现让人们的生活变得更加便捷、有趣，但是如影随形的网络安全问题也变得日益突出。以Web2.0、网络社交、微博等新型互联网平台为例，
                            常有黑客和恶意攻击者以挂马、SQL 注入、XSS 跨站、Struts2 漏洞的方式对Web 服务器进行攻击，从而窃取平台和用户数据，以此来非法获利。再加之Web 应用攻击的技术门槛不高以及网站开发人员大多缺乏网络安全意识等原因，Web安全问题也成为了很多企业发展的痛点之一。</p>
                    </div>
                    <div class="item">
                        <h4 class="title3">传统WAF作用瓶颈趋于明显</h4>
                        <div class="line"></div>
                        <p>针对Web安全问题，行业通常是采用WAF系统对Web 应用程序进行保护，因此，在很长的一段时间内，WAF成为了Web 应用程序主流的保护系统。WAF通常部署在Web服务器前面，拦截并分析所有交互数据，如果其中存在与某种攻击模式相匹配的内容，则报警和阻止攻击，从而保护Web应用和用户数据的安全。</p>
                        <p>但是，如今的网络攻防就好像猫鼠游戏，入侵者总想利用各种方法绕过网络和应用保护设施。尽管WAF产品多年来也取得了很多发展和技术突破，但目前看有些问题还是不容易解决，这和WAF的部署位置和基本的检测机理有关。传统WAF是部署在边界，通过分析应用流量来分析是否存在攻击，
                            对所保护的Web应用缺乏了解，无法判断哪些数据能真正对Web应用造成威胁，所以只能对所有可能造成威胁的数据都进行检测和防御，不可避免会产生一些误报。并且，网络传输的应用数据很多都进行编码，或者攻击者有意进行各种混淆和逃逸，WAF产品很难对这种数据都进行正确处理并检测，因此不可避免会有漏报。尽管传统WAF通过和Web扫描器结合以及自学习等技术，能解决部分问题，但很难做到完全精确检测和防御。</p>
                        <p>为了解决传统WAF的种种缺陷问题，以安数云为代表的一批安全厂商开始了对新的安全系统的研发与探究。通过多年Web应用防护技术的沉淀，安数云推出了RASP WAF系统，成为国内较早成功发布RASP WAF系统的安全厂商之一。</p>
                        <h4 class="title3">RASP WAF强势登场</h4>
                        <div class="line"></div>
                        <p>RASP技术被全球最具权威的 IT 研究与顾问咨询公司Gartner 所推崇，并在2016年应用安全报告里将RASP列为应用安全领域的十大关键技术之一，与此同时，RASP技术也在最近几年的RSA创新沙盒上入选Top10，备受全球安全行业关注。</p>
                        <p>RASP是Runtime Application Self-Protection的简称， 即为“应用实时自我保护“。和传统WAF不同的是，RASP WAF运行在应用程序的内部，它的安全保护控制点通常放在应用程序和其他系统的交互连接点上，包括和用户、数据库、网络以及文件系统的连接点，从而实时监测并拦截漏洞攻击。</p>
                        <p>和传统WAF相比，RASP WAF 在技术上优势更为明显。只有真正触发关键检测点的数据才被检测，这样就避免了其他数据受到干扰，误报次数极大减少;由于可以直接获得应用处理的参数，这些数据都是解码后的数据，避免了各种数据编码等绕过技术，因此，漏报率也是极低的。传统WAF在技术方面的不足，都可以被RASP WAF完美解决。</p>

                        <h4 class="title3">RASP WAF系统和传统WAF的区别</h4>
                        <div class="line"></div>
                        <p>传统WAF和安数云RASP WAF是两种不同的应用程序保护系统，其本质区别又表现在哪里呢?安数云RASP WAF系统研发负责人打了个比方：“我们可以将人们对Web 服务器的攻击比作是病毒，而传统的WAF就是封闭式的防化服，在人们接触病毒时防化服就可以阻止部分病毒接触人体，
                            但却不能完全阻断病毒进入人体。一旦病毒突破防化服，他们对人体的防护作用就会同时失效。而安数云RASP WAF相当于一种直接注射进人体的接种疫苗，使人体具备自我保护和自我免疫能力，即使病毒已经进入，也能保护人体免受病毒侵蚀。更为智能的是安数云RASP WAF，可以精准识别频繁且不造成影响的垃圾病毒，对一些‘虚假招式’带来的繁重而无意义的工作，直接屏蔽，力争做到‘0漏报、0误报’“。</p>
                        <p>也正是基于RASP 技术这种独特的优势，安数云RASP WAF产品也受到了越来越多行业专家和企业的认可，就像 Gartner 分析师 Feiman 所表述的，改变我们的观点，尝试 RASP，让它成为安全防御体系中最难以逾越的一层。</p>
                        
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