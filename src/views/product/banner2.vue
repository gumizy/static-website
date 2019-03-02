<template>
    <div style="height:2800px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <hr class="half">
            <div class="title2 center">安数云·云安全整体解决方案诚邀您免费试用<br><br><br></div>
            <div >
                <div class="body">
                    <div class="item">
                       <p>企业的发展离不开对市场需求的深入洞悉，在安数云看来，随着云计算市场应用越来越普及，传统IT行业在云市场的发展下发生了巨大变革，
                           产生了计算资源池，网络资源池、存储资源池、安全资源池等，而且可以随着业务的发展和需求的变化进行弹性扩展。
                           云安全需求给传统安全行业带来了新的挑战，同时也给安数云带来了新的机遇。安数云云安全调度运维管理平台系统作为云安全的有效解决方案，
                           主要通过把虚拟机流量牵引到云池中进行流量的清洗，从而达到安全的效果。</p>
                        <p>在安数云研发负责人看来，云安全池解决方案是安数云的核心竞争力，其特色优势主要表现为以下九个方面：</p>
                        <p>1、安数云使用自有导流、SDN控制等技术，可以灵活部署池内的虚拟网络，融合各类信息安全技术及资源，形成云安全池系统，解决云的安全问题；</p>
                        <p>2、安数云云安全池系统可以解决虚拟网络东西向、南北向网络安全问题，通过导流方案把虚拟网络引入到云安全池中； </p>
                        <p>3、安数云云安全池提供多种自有安全服务，如WAF、IPS、数据库审计与风险控制系统、综合安全检查评估系统、RASP WAF 、CASB、大数据态势感知系统等，用户可以自由灵活的选择对应的安全服务；</p>
                        <p>4、安数云云安全池系统可以和公有云、私有云进行无缝对接，支持的公有云如：阿里云、华为云、亚马逊等。支持的私有云，如Openstack、Zstack、vmware。</p>
                        <p>5、安数云云安全池系统可以作为完整的独立系统直接接入云平台系统；可以把导流、SDN控制技术作为中间件，把虚拟化安全服务直接融入到云平台系统中；也可以直接部署到传统网络环境中使用。</p>
                        <p>6、安数云云安全池部署方式简单灵活，可以不破坏用户原有的组网，进行云安全池部署，以确保网络安全。</p>
                        <p>7、安数云云安全池具有自动按需分配安全资源、负载分担、旁路流量审计等功能，根据业务不同使流量进入不同的安全资源中。</p>
                        <p>8、安数云云安全池具有主备模式，可在设备故障、链路故障、主控故障等多种情况下进行业务的快速切换，可靠性强。</p>
                        <p>9、安数云云安全池可以弹性部署，根据业务的具体大小随时调整云安全池的规模，方便用户随时扩展。</p>
                    </div>
                    <div class="item">
                        <h4 class="title3">安数云诚邀精英企业试用</h4>
                        <div class="line"></div>
                        <p>您想要的安全，我必竭力守护！</p>
                        <p>安数云诚邀精英企业申领试用！</p>
                        <p>试用者，欢迎咨询安数云各营销办事处，信息如下：</p>
                        <table border="2">
                            <thead>
                                <tr>
                                    <th style="width:325px;">区域</th>
                                    <th style="width:325px;">负责人</th>
                                    <th style="width:325px;">联系方式</th>
                                </tr>
                            </thead>
                            <tbody style="text-align:center;">
                                <tr>
                                    <td>北京</td>
                                    <td>王海军</td>
                                    <td>13811555015</td>
                                </tr>
                                <tr>
                                    <td>郑州</td>
                                    <td>徐军伟</td>
                                    <td>15617737665</td>
                                </tr>
                                <tr>
                                    <td>济南</td>
                                    <td>丁塞北</td>
                                    <td>13156197088</td>
                                </tr>
                                <tr>
                                    <td>南京</td>
                                    <td>徐  靖</td>
                                    <td>13337705733</td>
                                </tr>
                                <tr>
                                    <td>杭州</td>
                                    <td>范丙华</td>
                                    <td>13958035161</td>
                                </tr>
                                <tr>
                                    <td>广州</td>
                                    <td>魏海霞</td>
                                    <td>13802512753</td>
                                </tr>
                                <tr>
                                    <td>深圳</td>
                                    <td>方楚庆</td>
                                    <td>13924646665</td>
                                </tr>
                                <tr>
                                    <td>哈尔滨</td>
                                    <td>张天明</td>
                                    <td>13104614321</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <img src="static\images\banner2-1.png"/>
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