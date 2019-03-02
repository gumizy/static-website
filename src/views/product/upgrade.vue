<template>
    <div style="height:2100px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">产品升级</div>
            <div class="line"></div>
            <div class="body">
                <br><br>
                <div class="item">
                    <h4 class="title3">WAF最新特征库下载:</h4>
                    <a href="http://www.datacloudsec.com/upgrade/waf/lib0/wafLatestLib.dat"><p>点此下载</p></a>
                </div>
                <div class="item">
                    <h4 class="title3">IPS最新特征库下载:</h4>
                    <a href="http://www.datacloudsec.com/upgrade/ips/lib0/ipsLatestLib.dat"><p>点此下载</p></a>
                </div>
                <div class="item">
                    <h4 class="title3">态势感知最新情报库下载:</h4>
                    <a href="http://www.datacloudsec.com/upgrade/sa/lib0/malicious_lib.dat"><p>点此下载</p></a>
                </div>
                <div class="item">
                    <h4 class="title3">综合安全检查评估系统最新漏洞库下载:</h4>
                    <p>版本:1.0.1.6</p>
                    <p>漏洞库更新，新增ThinkPHP 5.1-5.2 全版本远程代码执行漏洞</p>
                    <a href="http://www.datacloudsec.com/upgrade/scan/scan_update_last.update"><p>点此下载</p></a>
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

