<template>
    <div style="height:2900px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云基线配置核查系统</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>根据IT咨询公司 Enterprise Management Associates的数据，多达80%的网络问题都可以归结为配置错误。
                        然而传统的漏洞扫描系统，主要用于扫描操作系统以及其安装的第三方软件的漏洞，如缓冲区溢出漏洞、弱口令漏洞等，
                        却无法发现管理员疏忽造成的系统配置错误。系统、软件、服务等运行着不必要的服务、进程，
                        开启了不必要的端口等可能给系统带来更大的风险隐患。</p>
                    <p>安数云基线配置核查系统是一款专门针对系统、软件、服务中不安全配置的自动化检查系统，
                        包括对Windows、Linux、Unix、中间件、路由交换、防火墙等资产的管理和配置核查。
                        从而帮助用户充分了解资产存在的不安全配置，并协助用户修复建立更加安全可靠的IT基础架构。</p>
                    <img src="static\images\p5.png"/>
                    <h4 class="title3">产品特性:</h4>
                    <div class="line"></div>
                    
                    <h5 class="title3 icon1">扫描资产全面</h5>
                    <p>
                        <ul>
                            <li>
                                操作系统
                                <ul>
                                    <li>Windows系列: 2000，WinXP，Win2003，Win7，Win2008，Win10等；</li>
                                    <li>Linux系列: Redhat Linux，Ubuntu，Suse，Centos，Debian 等；</li>
                                    <li>Unix系列： AIX, Solaris, HP-UX等。</li>
                                </ul>
                            </li>
                            <li>
                                应用程序
                                <ul>
                                    <li>IIS、Apache、Tomcat、Nginx、Weblogic等。</li>
                                </ul>
                            </li>
                            <li>
                                虚拟化设备
                                <ul>
                                    <li>Xenserver、Exsi等。</li>
                                </ul>
                            </li>
                            <li>
                                网络及安全设备
                                <ul>
                                    <li>Cisco路由器、华为交换机、华三交换机、天融信防火墙等。</li>
                                </ul>
                            </li>
                        </ul>
                    </p>

                    <h5 class="title3 icon1">多种检测方式</h5>
                    <p>
                        <ul>
                            <li>
                                Windows
                                <ul>
                                    <li>SMB、Telnet远程检测；</li>
                                    <li>Agent检测（在Windows上运行绿色的客户端检测软 件，一键检测）；</li>
                                </ul>	
                            </li>
                            <li>
                                Linux、Unix、国产操作系统、虚拟化平台
                                <ul>
                                    <li>支持Telnet、SSH远程检测。</li>
                                </ul>	
                            </li>
                            <li>
                                路由交换防火墙
                                <ul>
                                    <li>Telnet、SSH远程检测；</li>
                                    <li>离线检测配置文件：支持上传配置文件进行离线检测。</li>
                                </ul>	
                            </li>
                            <li>
                                中间件
                                <ul>
                                    <li>Windows中间件：SMB、Telnet远程检测；</li>
                                    <li>Linux中间件：Telnet、SSH远程检测。</li>
                                </ul>	
                            </li>
                            <li>
                                数据库
                                <ul>
                                    <li>支持远程检测。</li>
                                </ul>	
                            </li>
                        </ul>
                    </p>

                    <h5 class="title3 icon2">丰富的扫描报告</h5>
                    <p>
                        <ul>
                            <li>可以根据漏洞类型展示风险状况；</li>
                            <li>可以根据危险等级展示风险情况；</li>
                            <li>提供详细的漏洞内容展示；</li>
                            <li>支持导出多种格式的报告，如pdf、word、html等。</li>
                        </ul>
                    </p>

                    <h4 class="title3">典型案例:</h4>
                    <div class="line"></div>
                    <h5 class="title3">某部队网络</h5>
                    <img src="static\images\p13.png"/>

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
  import ProductLeft from './product-left2.vue'
  import IndexFooter from '../index/index-footer.vue'
export default {
    components:{
      ProductMain,
      ProductLeft,
      IndexFooter
  }
}
</script>

