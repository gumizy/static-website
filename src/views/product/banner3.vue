<template>
    <div style="height:4200px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
        <div class="newsDiv">
            <hr class="half">
            <div class="title2 center">安数云大数据安全态势感知系统<br><br><br></div>
            <div >
                <div class="body">
                    <div class="item">
                        <p>安数云大数据态势感知系统，基于大数据技术，对企业全面的安全信息进行集中采集、存储和分析，利用人机交互分析引擎、
                            智能分析引擎和可视化等手段，结合丰富的威胁情报，对企业面临的外部攻击、内部违规行为和APT攻击进行检测和分析，
                            为企业建立快速有效的威胁检测、分析、处置和全网安全态势感知能力。是您身边的“全天候全方位安全监测预警专家”。</p>
                    </div>
                    <div class="item">
                        <h4 class="title3">核心优势：</h4>
                        <div class="line"></div>
                        <h5 class="title3 icon20">优势1</h5>
                        <p>全网数据、全网流量收集，单节点流量最高可达10GB；</p>
                        <h5 class="title3 icon20">优势2</h5>
                        <p>可输出、存储多种格式的原始包数据以及经过深度还原的常见应用层会话数据，为攻击检测分析，攻击溯源等功能提供完整可靠的数据源；</p>
                        <h5 class="title3 icon20">优势3</h5>
                        <p>把机器学习与人工智能技术应用于网络攻击检测中，检测范围更广、更快、更准确；</p>
                        <h5 class="title3 icon20">优势4</h5>
                        <p>支持与多种应用系统对接，如第三方数据库、OA、ERP、财务软件等；</p>
                        <h5 class="title3 icon20">优势5</h5>
                        <p>与安数云综合安全检查评估系统无缝对接，可直接展现扫描报告（第三方扫描系统可定制）；</p>
                        <h5 class="title3 icon20">优势6</h5>
                        <p>多维度可视化展现，多图形分析模块，可审计所有告警事件，快速生成处置报告，同时支持一键外发告警（web、邮件、短信、syslog）；</p>
                        <h5 class="title3 icon20">优势7</h5>
                        <p>具有智能关联分析引擎（数据规则分析引擎、 UEBA分析引擎、 威胁情报分析引擎、 AI智能学习引擎），内置超过100种数据分析模型；</p>
                        <h5 class="title3 icon20">优势8</h5>
                        <p>支持单机、分布式、多级部署。该系统基于云环境设计，具备虚拟化部署能力，扩展能力强。</p>
                        
                        <h4 class="title3">安数云诚邀精英企业试用</h4>
                        <div class="line"></div>
                        <p>您想要的安全，我必竭力守护！</p>
                        <p>安数云诚邀精英企业申领试用！</p>
                        <p>试用者，欢迎咨询安数云各营销办事处，信息如下：</p>
                        <table border="2">
                            <thead>
                                <tr>
                                    <th style="width:330px;">区域</th>
                                    <th style="width:330px;">负责人</th>
                                    <th style="width:330px;">联系方式</th>
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
                        <img src="static\images\banner3-1.png"/>
                        <img src="static\images\banner3-2.png"/>
                        <img src="static\images\banner3-3.png"/>
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