<template>
    <div style="height:2700px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云网络入侵防御系统NGIPS</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>安数云网络入侵防御系统NGIPS（以下简称安数云IPS），是一个深入应用层的网络安全设备，能够实时检测和防御包括拒绝服务、缓冲区溢出、
                        木马蠕虫、CMS、WEBSHELL等多种网络攻击行为，及时将安全威胁隔离在企业网络之外。安数云IPS同时具备上网行为管理功能，
                        能够识别即时通信软件、网络游戏、P2P软件、网络多媒体、证券软件等网络应用，并能对这些应用进行有效管控。
                        可以帮助用户解决各类网络及应用安全问题，同时满足等级保护、行业规范等政策法规的安全建设要求。</p>
                    <img src="static\images\p5.png"/>
                    <h4 class="title3">产品特性:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon1">主要功能</h5>
                    <p>丰富的DOS/DDOS防御规则，能够有效防御各种DOS/DDOS攻击；</p>
                    <p>专业的WEB服务安全规则，能够有效阻断针对服务器的非法访问和恶意扫描攻击；</p>
                    <p>丰富的特征库，能够有效检测并阻断各种漏洞、木马、蠕虫、缓冲区溢出等攻击行为；</p>
                    <p>可以识别各种即时通信软件、网络游戏、P2P软件下载等上网行为，并拥有灵活的管理规则，能够对上网行为进行有效管控；</p>
                    <p>强大的邮件过滤能力和灵活的邮件过滤规则，能够有效阻断各种垃圾邮件攻击；</p>
                    <p>强大的病毒防御能力，能够有效识别并过滤各种主流的病毒攻击行为；</p>
                    <p>强大的XSS/SQL攻击防御能力，能够有效阻断针对服务器的各种XSS/SQL攻击行为。</p>
                    
                    <h5 class="title3 icon1">可靠性</h5>
                    <p>冗余电源设计，电源故障自动告警；</p>
                    <p>软件BYPASS，软件故障或极限流量时自动启动；</p>
                    <p>硬件BYPASS，硬件故障或设备重启时自动启用；</p>
                    <p>支持双机热备。</p>

                    <h5 class="title3 icon1">交互</h5>
                    <p>简单直观的WEBUI界面，便于理解和操作；</p>
                    <p>报表图形化，提高信息传达效率；</p>
                    <p>全面完善的日志信息，提供全方位审计；</p>
                    <p>支持SNMP、SYSLOG和邮件告警。</p>
                    
                    <h4 class="title3">典型案例:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon1">某房产互联网公司企业网络</h5>
                    <p>该公司网络结构简单，公司人员流动量大，移动办公人员相对较多，员工安全意识薄弱，整个网络安全生态环境恶劣，
                        主要安全隐患来自员工自带的笔记本、移动智能设备、U盘等内部因素。
                        而公司服务系统存有大量客户数据以及业务信息，需要进行综合性安全防护。</p>
                    <p>经过客户充分对比考虑，最终选择安数云入侵防御系统对服务器进行安全加固。</p>
                    <img src="static\images\p7.png"/>

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

