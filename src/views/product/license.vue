<template>
    <div style="height:2100px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">荣誉资质</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <p>本公司现有13款产品申请软著39项，均已通过权威机构检测，取得销售许可证、3C认证
                        公司已获得3项专利，10项专利技术正在申请中。</p>
                </div>
                <img src="static\images\license.png"/>
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

