<template>
    <div style="height:2100px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <div >
                <div class="body">
                    <div class="item">
                        <h3>安数云具备超强的信息安全产品研制与专业安全定制化能力,在提供标准化网络安全产品的同时,
                            也能深入垂直行业,为行业用户提供定制化安全服务</h3>
                            <p>&nbsp;</p>
                        <img src="static\images\customization.png"/>
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