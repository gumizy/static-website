<template>
    <div style="height:2400px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox" >
            <div class="title2 center">安数云云安全池</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <p>安数云云安全池（中间件）是为了解决传统及云环境下的安全问题而提出的整体解决方案。
                        其中包括：安数云Zstack、云安全池统一管理平台、网络控制平台、虚拟化平台。
                        通过导流、SDN控制等技术，融合各类信息安全技术及资源，形成云安全池系统，解决云的安全问题。</p>
                    <p>随着云计算从概念到趋势，传统IT行业慢慢过渡到云计算大数据的时代，随之而来的是计算资源池、网络资源池、存储资源池、安全资源池等概念的出现。
                        在这种全新IT环境下，安全问题也随之带来了新挑战。安数云云安全调度运维管理平台系统作为云安全的有效解决方案，主要通过把虚拟机流量牵引到云池中进行流量清洗，从而实现安全保障。</p>                
                </div>
                <div class="item">
                    <h4 class="title3">云安全池解决方案是安数云的核心竞争力，其特色优势主要表现为以下八个方面：</h4>
                    <div class="line"></div>
                    <p>1、安数云云安全池使用自有导流、SDN控制等技术，可以灵活部署池内的虚拟网络，融合各类信息安全技术及资源，形成云安全池系统，一站式解决云的安全问题。</p>  
                    <p>2、安数云云安全池可以解决虚拟网络东西向、南北向网络安全问题，通过导流方案把虚拟网络引入到云安全池中。</p>                  
                    <p>3、安数云云安全池提供多种自有安全服务，如WAF、IPS、数据库审计与风险控制系统、综合安全检查评估系统、RASP WAF 、CASB、大数据态势感知系统等，
                        用户可以自由灵活的选择对应的安全服务；同时，云安全池也可基于安数云提供的接口进行二次开发，降低用户运维成本。</p>
                    <p>4、安数云云安全池系统可以和公有云、私有云进行无缝对接，支持的公有云如：阿里云、华为云、亚马逊云等。支持的私有云，如Openstack、Zstack、Vmware。</p>
                    <p>5、安数云云安全池系统可以作为完整的独立系统直接接入云平台系统；可以把导流、SDN控制技术作为中间件，把虚拟化安全服务直接融入到云平台系统中；
                        也可以直接部署到传统网络环境中使用。</p>
                    <p>6、安数云云安全池部署方式简单灵活，可以不破坏用户原有的组网，进行云安全池部署，以确保网络安全。也可以弹性部署，根据业务的具体大小随时调整云安全池的规模，方便用户随时扩展。</p>
                    <p>7、安数云云安全池具有自动按需分配安全资源、负载分配、旁路流量审计等功能，根据业务不同使流量进入不同的安全资源中。</p>
                    <p>8、安数云云安全池具有主备模式，可在设备故障、链路故障、主控故障等多种情况下进行业务的快速切换，可靠性强。</p>
                </div>
                <div class="item">
                    <div class="line"></div>
                    <table border="2">
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>特点</th>
                                <th>核心竞争力</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width:100px;">云安全池统一管理平台</td>
                                <td style="width:325px;">
                                    <p>完全自主研发，有独立的知识产权</p>
                                    <p>1、在虚拟环境下提供云安全服务，其中包括近二十种安全服务。</p>
                                    <p>2、用户根据自己的需求创建，部署安全服务的实例</p>
                                    <p>3、安全服务管理调度能力</p>
                                    <p>4、日志事件告警能力</p>
                                    <p>5、灵活的配置策略的能力</p>
                                </td>
                                <td>
                                    <p>兼容华为、阿里、腾讯、亚马逊公有云，兼容各种私有云平台如openstack、vmware等。提供多项虚拟化安全服务。</p>
                                </td>
                            </tr>
                            <tr>
                                <td>网络控制平台（中间件）</td>
                                <td>
                                    <p>1、拥有自己SDN控制器</p>
                                    <p>2、拥有自己的导流器</p>
                                    <p>3、可以灵活定制安全APP的网络策略</p>
                                </td>
                                <td>
                                    <p>通过网络控制平台的支撑，可以将安数云平台及第三方云平台的业务流量引入云池，按定制的策略进行流量清洗。</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

