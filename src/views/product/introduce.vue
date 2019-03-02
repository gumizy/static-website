<template>
    <div style="height:2100px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">关于安数云：</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <p>北京安数云信息技术有限公司（Beijing Datacloudsec Information Technology Co.,Ltd.）是一家技术领先的云及云安全整体解决方案与服务提供商。
                        公司成立于2007年，致力于为用户提供可信、可控、可视、可用的云及云安全调度运维管理服务。</p>
                    <p>目前，安数云已经形成以擎安云（基于openstack的云平台），云安全调度运维管理平台、擎安保·等保一体机、安全大数据监控运维平台为核心，
                        以综合安全检查评估系统、DPI（全流量深度检测与威胁分析系统）、RASP WAF（运行时应用程序自我保护系统）、CASB（云安全访问代理系统）、
                        UEBA（用户与实时行为分析系统）、邮件安全解决方案、WAF(WEB应用防火墙)、NGIPS（网络入侵防御系统）、数据库审计与风险控制系统为主打，
                        以定制化安全服务为支撑的整体安全产品矩阵，力求为用户构建一个合规、领先、统一的信息安全保障体系。</p>
                    <p>作为国家高新技术企业之一，安数云秉承“科技立司·产品兴司”的宗旨，采用“独创”的研发模式激发技术人员高效创新，目前，已经在北京、重庆、西安成立三大研发中心。</p>
                    <p>依托多年的深厚积累，安数云已经具备专业的信息安全产品研发及定制化能力，在提供标准化网络安全产品的同时，能够深入垂直行业，为行业用户提供定制化安全服务。</p>
                    <p>“半外企”式“短、平、快”的管理模式是公司多年来稳步发展的关键。安数云采用“独有”的营销、服务模式，在全国主要省会城市成立营销及技术服务中心，
                        以便响应及时到位，为用户提供及时高效的本地化技术服务。</p>
                    <p>凭借丰富的产品体系，卓越的产品技术和成熟可靠的企业服务，安数云已经为千余家企业提供信息安全产品及服务，帮助政府、教育、军队军工、医疗、建筑、电力、
                        移动等运营商构建和运维可信、可控、高效的信息安全服务。</p>
                    <p>“安网安国安天下，云程发轫志远大，数载倾注守初心”。多年来，安数云始终坚持用户需求为导向，合规安全为目标，自主研发为宗旨，
                        力争成为云及云安全领域提供商与服务商的“前三甲”企业，为用户便捷、安全地使用网络资源保驾护航。</p>
                </div>
                <div class="item">
                    <h4 class="title3">联系我们:</h4>
                    <div class="line"></div>
                    <p>电话：010-62928890</p>
                    <p>网址：www.datacloudsec.com</p>
                    <p>公司地址：北京市海淀区安宁庄西路9号院25号楼iMOMA大厦3层3-307</p>
                    <p>通信地址：北京市海淀区安宁庄西路9号院25号楼iMOMA大厦U106-1   邮编：100085</p>
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

