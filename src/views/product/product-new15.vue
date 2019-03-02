<template>
    <div style="height:3600px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <hr class="half">
            <div class="title2 center">漏洞预警|请注意，又有漏洞出没！<br><br><br></div>
            <div >
                <div class="body">
                    <div class="item">
                        <br>
                        <img src="static\images\news\15-1.jpg" >
                        <br>
                        <h4 class="title3">GoAhead服务器远程命令执行漏洞(CVE-2017-17562)</h4>
                        <p>1. 漏洞描述</p>
                        <p>Embedthis GoAhead是美国Embedthis软件公司的一款嵌入式Web服务器。</p>
                        <p>Embedthis GoAhead Web服务器3.6.5之前的版本中存在远程命令执行漏洞，该漏洞是由于当服务器初始化CGI时使用了HTTP 请求参数。
                            远程攻击者利用该漏洞执行任意代码。</p>
                        <p>2. 修复方案</p>
                        <p>目前厂商已发布升级补丁以修复漏洞，补丁获取链接：</p>
                        <p>https://github.com/embedthis/goahead/commit/6f786c123196eb622625a920d54048629a7caa74</p>
                        <p>3. 参考链接</p>
                        <p>http://www.cnvd.org.cn/flaw/show/CNVD-2017-37422</p>
                        <p>http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-17562</p>
                        <br>
                        <h4 class="title3">WebLogic WLS组件反序列化漏洞(CVE-2017-10271)</h4>
                        <p>1. 漏洞描述</p>
                        <p>Oracle Fusion Middleware（Oracle融合中间件）是美国甲骨文（Oracle）公司的一套面向企业和云环境的业务创新平台。
                            该平台提供了中间件、软件集合等功能。Oracle WebLogic Server是其中的一个适用于云环境和传统环境的应用服务器组件。</p>
                        <p>Oracle Fusion Middleware中的Oracle WebLogic Server组件的WLS Security子组件存在安全漏洞。攻击者可利用该漏洞控制组件，
                            影响数据的可用性、保密性和完整性。以下组版本受到影响：Oracle WebLogic Server 10.3.6.0.0版本，12.1.3.0.0版本，12.2.1.1.0版本，12.2.1.2.0版本。</p>
                        <p>2. 修复方案</p>
                        <p>目前厂商已发布升级补丁以修复漏洞，补丁获取链接：</p>
                        <p>http://www.oracle.com/technetwork/security-advisory/cpuoct2017-3236626.html</p>
                        <p>3. 参考链接</p>
                        <p>http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-10271</p>
                        <p>http://www.oracle.com/technetwork/security-advisory/cpuoct2017-3236626.html</p>
                        <br>
                        <h4 class="title3">安数云综合安全检查评估系统支持检测</h4>
                        <p>安数云综合安全检查评估系统已经更新了检查策略，可以通过在线升级功能将策略更新到最新版本，对以上漏洞进行检查。</p>
                        <p>1. GoAhead服务器远程命令执行漏洞检测</p>
                        <img src="static\images\news\15-2.jpg" >
                        <br>
                        <p>2.  WebLogic WLS组件反序列化漏洞</p>
                        <img src="static\images\news\15-3.jpg" >
                        <br>
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