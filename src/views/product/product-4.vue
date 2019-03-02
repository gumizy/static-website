<template>
    <div style="height:2900px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云WEB应用实时防护系统RASP WAF（云）</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <p>安数云RASP WAF系统是北京安数云信息技术有限公司（以下简称“安数云”）成功研发的一款运行时御敌，超精准识别，力求实现0误报、0漏报的应用程序自我防护系统。
                        是安数云在沉淀了多年的WEB应用防护经验技术上，根据国内外的安全需求热度做出的创新与提升，是新一代应用漏洞得超级克星。</p>
                    <p>安数云RASP WAF系统通过Web攻击防御、0 Day漏洞实时补丁修复、OWASP TOP10安全威胁精确防护、网页防篡改等全方位、多维度防护，提升了应用程序的自动免疫能力。相对传统WAF而言，RASP WAF解决了其误报、漏报的问题，通过人工智能等精准识别技术，
                        在运行时监控和保护应用，解决了用户网站防护的困扰。由于在系统中，将RASP与SAST完美结合，即便黑客攻击已渗入应用程序内部，RASP WAF也能力缆狂澜，从容应对。</p>
                </div>
                <div class="item">
                    <h4 class="title3">产品优势：</h4>
                    <div class="line"></div>
                    <p>1、实时御敌  无懈可击</p>  
                    <p>（1）专业研发团队，多年安全积累，精准的算法模型、行为数据模型，大幅提升了识别率。</p>                  
                    <p>（2）智能锁定攻击者，支持网页防篡改，全方位防护网站安全。</p>
                    <p>2、百步穿杨  策无遗算</p>
                    <p>（1）系统以探针形式嵌入应用程序，不依赖用户的网络环境。</p>
                    <p>（2）基于模块式的高效策略处理引擎。</p>
                    <p>（3）防御模型数量对性能影响接近0损耗。</p>
                    <p>3、一键部署  事半功倍</p>
                    <p>（1）一键部署，即可防御，一键卸载，解除防御。</p>
                    <p>（2）自适应不同场景及部署方式，满足企业应用安全防护需求。</p>
                    <p>4、运筹帷幄  无所遁形</p>
                    <p>（1）一旦发现攻击行为，毫秒级能对攻击进行实时自我防护。</p>
                    <p>（2）追根溯源，记录完成攻击路径，并可分析至代码级，降低修复难度。</p>
                    <p>（3）探针保护程序和应用程序融合为一体，避免额外调用和通讯消耗，对应用程序性能和用户体验影响小；</p>

                    <h4 class="title3">功能简介：</h4>
                    <div class="line"></div>
                    <p>1、WEB攻击实时防御</p>                    
                    <p>有效防御SQL注入、XSS跨站脚本、木马上传、防扫描、防STRUTS2攻击、防命令注入、防任意文件删除、防任意文件读取、防任意文件上传、防CSRF攻击等，
                        实现了HTTP协议校验、XPATH注入防护、SSRF命令注入防护、反序列化攻击防护等、 敏感信息泄露、cookie安全防护、错误页面安全防护、请求方法限制防护等。</p>
                    <p>2、智能精准实时防控</p>
                    <p>安数云RASP WAF采用B/S架构，提供了简单易用WebUI操作界面，用户登录之后能够对RASP WAF进行详细的配置管理，
                        能够添加、编辑及删除被防护主机及对应的安全策略，能够管理系统统计日志及报表，能够实现对系统的远程管理及维护。</p>
                    
                    <h4 class="title3">使用场景：</h4>
                    <div class="line"></div>
                    <p>政企网站防护—— 网页内容防篡改 为政企官网品牌及名誉保驾护航</p>                    
                    <p>金融交易类网站防护——拦截恶意攻击及异常访问，保护用户信息不外泄</p>
                    <p>电商网站防护——接近0误报 0漏报，智能过滤垃圾访问，保障正常访问业务流程，解决抢购场景下网站防护问题。</p>

                </div>
                <div class="item">
                    <h4 class="title3">安数云多维度WEB安全智能防护管家”防御拓补图</h4>
                    <div class="line"></div>
                    <img src="static\images\new1.jpg"/>
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

