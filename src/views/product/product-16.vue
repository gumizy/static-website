<template>
    <div style="height:2200px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox" >
            <div class="title2 center">云安全整体解决方案</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <p>安数云云安全调度运维管理平台系统作为云安全的有效解决方案，可以通过多种安数云自有安全服务及定制化服务，以云安全池为中间件，安数云云平台为基础平台，为第三方的私有云，
                        公有云提供各种安全服务及丰富灵活的安全方案；也可以通过安数云独有的导流技术将第三方云环境中的业务流引入到安全资源池中进行多种安全设备的清洗；同时，
                        NFV自动化部署方案为可以为用户提供更加易用可靠的安全解决方案，彻底解决传统环境及云环境下的安全问题。用户也可以根据需求自行定制安全服务。</p>                
                    <br>
                    <br>
                    <br>
                    <img src="static\images\product.jpg" >
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

