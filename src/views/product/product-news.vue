<template>
    <div style="height:6300px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <hr class="half">
            <div class="title2 center">新闻动态<br><br><br></div>
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(23)">应央企所需 助央企发展——安数云亮相“2018中央企业网络安全与工业互联网交流研讨大会”</a></h3>
                 <p>2018年7月5日，一年一度的“中央企业网络安全与工业互联网交流研讨大会”（以下简称“央企研讨会”）在北京成功举办。本届央企研讨会主题由公安部网络安全保卫局、国家网络与信息安全信息通报中心、国务院国有资产监督管理委员会综合局指导，中央企业网络与信息安全信息通报秘书处组织主办。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(22)">安数云让云端安全——可视、可用、可信、可控</a></h3>
                 <p>云计算行业呈现出爆发性增长的趋势，全球IT企业都在向云计算转型，面对发展同样迅猛的国内云计算市场，工信部印发《云计算发展三年行动计划》，并提出从提升技术水平、增强产业能力、推动行业应用、保障网络安全、营造产业环境等多个方面，推动云计算健康快速发展，推进 “政务上云”、“企业上云”。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(21)">安数云：打造安全服务链机制 修筑云安全堡垒</a></h3>
                 <p>网络信息安全问题已经上升到国家的高度，面对层出不穷的网络安全威胁，传统单功能信息安全设备存在资源浪费、运维复杂、数据浪费等弊端，集多种功能于一体的软硬件集成开发类产品和系统应运而生。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(20)">聚焦中国网络安全大会| 云安全新思路—“软件定义服务（SDS）”首次亮相</a></h3>
                 <p>2018年6月13日，第六届中国网络安全大会（NSC2018）在北京国家会议中心盛大召开。公安部网络安全保卫局副局长钟忠出席会议并致辞，中国工程院院士倪光南、中国科学院院士王小云等嘉宾分别作了主题演讲。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(19)">“2018中国云安全最佳解决方案奖”得主已揭晓</a></h3>
                 <p>6月6日，2018（第三届）中国网络信息安全峰会在京隆重举行。中央网信办、工信部网络安全管理局、中国工程院院士、中国科学院院士、国家信息中心、公安部网络安全保卫局、
                            国家信息技术安全研究中心等嘉宾出席会议</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(18)">安数云等十余家网安企业表白4.29，点燃首都网络安全日如火激情</a></h3>
                 <p>为保障互联网经济健康、平稳发展，促进网络安全行业发展，不断提升首都的网络安全能力和水平,第五届“4.29首都网络安全日”系列活动于2018年4月26日至28日在北京展览馆举行。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(17)">数据中心云安全整体解决方案登陆深圳</a></h3>
                 <p>2018年4月26日，第六届亚洲数据中心博览会在深圳召开。来自中国、美国、德国、日本、意大利等多个国家的品牌机构、
                    IDC企业、云计算安全服务提供商齐聚深圳大中华国际交易中心，就数据中心的未来发展、先进技术、安全方案等展开深入探讨与交流。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(16)">边界网络安全：混合才是未来</a></h3>
                 <p>边界防御的出现，跟服务器本身一样古老。说出边界防御这词儿，脑海中就会自然浮现这么一幅图景：上锁的房间中，一排排超大型机柜在嗡嗡作响，还有防火墙将机器与外部世界隔离开。
                    但除非你在为CIA干活，否则这场景不太可能是你的日常所见。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(15)">漏洞预警|请注意，又有漏洞出没！</a></h3>
                 <p>GoAhead服务器远程命令执行漏洞(CVE-2017-17562)......</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(14)">关于安全云服务的资源池化和虚拟化</a></h3>
                 <p>云计算的核心理念就是通过互联网络为用户提供按需的IT资源服务。为了达到这个目标，云服务提供商首先要保证拥有一个容量充足的资源池以满足在并发的业务高峰时刻仍能满足用户的服务要求，
                    这就是云服务的资源池化，而这个容量充足、可扩展的资源池也就是按需业务提供的基础。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(13)">高校仍在泄露个人信息，如何拧紧保护个人隐私这根“弦“？</a></h3>
                 <p>11月27日，中华人民共和国教育部针对“个别省份和学校公示受助学生信息，严重侵害学生权益”的事件，进行了严厉整改，并印发了《关于全面清理和规范学生资助公示信息的紧急通知》
                    （以下简称“通知”）。通知明确规定，一、全面清理超过期限的学生资助公示信息。</p>
                 </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(12)">云端数据的安全保障</a></h3>
                 <p>网络安全问题，自其诞生之日起就随着网络信息技术水平的不断进步而水涨船高。伴随着攻击手段的愈加复杂化，安全边界逐渐模糊，更加难以定义，新的信息安全问题开始显现。基于漏洞规则、特征匹配、
                    签名匹配的传统安全防护模式已经不再适应当前的安全需求。仅仅依靠传统防火墙、安全防护软件等简单堆叠的手段，早已无法自如应对网络安全问题。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(10)">安数云，让信息安全无懈可击</a></h3>
                 <p>随着云计算市场的快速增长，云计算产品的日趋成熟，云资源成为黑客攻击的又一主要目标。面对日趋复杂的网络环境，单一的网站漏扫、系统漏扫产品已经无法应对漏洞危机带来的新威胁。
                    信息专家呼吁，全方位、多层级、智能化、一体化的综合漏洞管理系统才能防御无处不在的安全威胁。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(11)">云服务日益普及，安数云云安全整体解决方案捍卫企业云安全</a></h3>
                 <p>网络安全问题，自其诞生之日起，便随着网络信息技术水平的不断进步以及网络信息产品的丰富而愈演愈烈。伴随着攻击手段的愈加复杂化，安全边界逐渐模糊，更加难以定义，
                    新的信息安全问题开始显现。基于漏洞规则、特征匹配、签名匹配的传统安全防护模式已经不再适应当前的安全需求。仅仅依靠传统防火墙、安全防护软件等简单堆叠的手段，
                    早已无法自如应对日益严峻的网络安全问题。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(9)">云服务日益普及,安数云云安全整体解决方案捍卫企业云安全</a></h3>
                 <p> 近年来，随着云计算市场应用的快速增长，越来越多的企业进入到云领域，受市场需求驱动，云计算产品及解决方案日趋丰富和成熟。但云计算数据资源具有规模化和集中化特征，
                    一旦遭遇破坏和故障，影响巨大。今年五月以来爆发的勒索病毒便给众多企事业机构和个人计算机用户带来巨大的数据安全威胁。血的教训在呼吁，
                    保障行业云计算安全迫在眉睫。当“云安全”概念被广泛关注，各大主流企业也纷纷加快布局到云安全解决方案中，这其中不乏一些行业佼佼者。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(8)">安数云:未来信息安全的主场必定在云端</a></h3>
                 <p> 当平台即服务成为一种新的理念，各种云平台也如雨后春笋般迅速发酵和成长。一份数据显示，从2015年到2026年，全球公有云市场规模将保持20%的复合增长率，
                    2026年达4930亿美元，其中，PaaS、SaaS、IaaS的年度复合增长率分别为36%、18%和19%。公有云曾被外界视为“烧钱”的业务，
                    但是随着基础设施逐步完善与技术水平的不断进步，越来越多的企业开始重视云端服务，并尝试使用公有云服务以降低IT投入成本和维护成本，
                    云端服务广阔的市场前景逐渐凸显。足以预见，未来信息安全的主场必定在云端。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(1)">安数云—云与大数据安全整体解决方案及服务提供商</a></h3>
                <p>经过三个阶段的发展，目前，安数云已经形成以云安全池及大数据产品及服务为主打，
                    以RASP WAF 、CSRB等创新安全产品、综合安全检查评估系统等为核心，以定制化安全服务为支撑的全方位产品系统，
                    力求为用户构建一个先进、统一的信息安全保障体系。                                                  
                </p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(2)">传统WAF存瓶颈 安数云 RASP WAF系统强势登场</a></h3>
                <p>和传统WAF不同的是，RASP WAF运行在应用程序的内部，它的安全保护控制点通常放在应用程序和其他系统的交互连接点上，
                包括和用户、数据库、网络以及文件系统的连接点，从而实时监测并拦截漏洞攻击。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(3)">IT国产化时代来临 安数云RASP WAF系统崭露头角</a></h3>
                <p>2017年，基于多年的WEB应用防护经验，安数云成功推出一款可以有效弥补传统WAF系统漏报、误报问题的Web应用程序保护系统RASP WAF，
                跻身国内较早成功发布RASP WAF系统的三家安全厂商之列，成为了应用安全领域的一匹黑马，备受国内外关注。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(4)">RASP WAF与传统WAF特性对比 结果却出乎意料</a></h3>
                <p>近几年，国内互联网的迅猛发展让一些创业者看到了新的机遇，这也使得互联网企业雨后春笋般在全国范围内出现，与此同时，
                    与企业相关的网络安全产品也逐渐变得紧俏起来。作为国内应用安全领域两款主流的Web 应用程序保护技术，RASP WAF 和传统WAF一直备受国内企业和个人网站用户的关注，
                    对于这两种技术的区别，有知名机构进行了详细的测评，结果却出人意料，到底这两种技术又有哪些区别呢，跟着小编一起来看看吧！</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(5)">安数云RASP  WAF贴近用户实际需求打造用户放心产品</a></h3>
                <p>网络不断改变人类的生活，在带来便利的同时，网络攻击，数据泄露等安全问题开始频繁出现，仅2016年被泄露数据总量就已超过42亿条。 
                    2017年仍是“战事不断”，今年2月，俄罗斯黑客“Rasputin”利用SQL注入漏洞获得了系统的访问权限，黑掉了60多所大学和美国政府机构的系统，并从中窃取了大量的敏感信息。
                           今年5月，勒索比特币的病毒“永恒之蓝”事件爆发，国内高校、政府，以及一些公司的计算机设备一度处于瘫痪状态，全球安全防御形势不容乐观。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(6)">安数云RASP WAP引领互联网技术安全新时代</a></h3>
                <p>随着云计算、大数据、人工智能飞速发展新一轮IT热潮来临，企业架构发生巨大改变，企业云平台、产品智能化等等，人们在享受着技术创新带来便利的同时，也被迫接受着网络安全的威胁，国际知名IT研究与顾问咨询公司Gartner指出，
                    新兴应用程序安全测试工具将成为信息安全产品和服务支出增长的一个重要的动力。Gartner曾预测，2017年全球信息安全产品和服务支出将达到864亿美元，比2016年增长了7%，预计2018年将增长到930亿美元。</p>
            </div>
            <hr class="half">
            <div class="search-result">
                <h3><a href="javascript:void(0);" @click="goNews(7)">WEB 应用漏洞百出 安数云新一代防护系统如何保护网站安全</a></h3>
                <p>黑客无孔不入，web应用漏洞问题频发，此前很多网站遭遇了挂马病毒的侵害，如一听音乐网,证劵之星等，不少用户访问这些网站后而导致隐私泄露，不仅如此大部分受害者的计算机上还被安装了多个恶意程序,
                           造成大规模的木马病毒传播，这对于网站安全以及客流量都造成了不同程度的影响。除了挂马病毒外，WEB应用常见漏洞还有访问控制、跨站点脚本攻击、注入式攻击、程序拒绝服务攻击等</p>
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
    data() {
        return {
            
        }
    },
    components:{
      ProductMain,
      IndexFooter
    },
    methods: {
        goNews(num) {
		    this.$router.push({ path: `/product-new${num}` });
			window.scrollTo(0,document.body.scrollHeight); 
			window.scrollTo(0,0);
		}
    }
}
</script>
<style scoped>
.search-result a{
    font-size: 18px;
}
</style>
