<template>
    <div style="height:2500px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云数据库审计与风险控制系统</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <h4 class="title3">产品介绍:</h4>
                    <div class="line"></div>
                    <p>安数云数据库审计系统是安数云推出的专门针对数据库访问、操作进行行为审计的系统，通过识别主流数据库协议，
                        全方位细粒度的监控用户的数据库操作行为，对访问数据库的用户、终端、工具以及操作行为等进行全面审计。
                        实现对数据库操作的实时监控、完整记录、还原审计，满足对数据库的运行检测和操作合规性要求，实现管理者以对业务系统的全局把控和调度。</p>
                    <img src="static\images\p5.png"/>
                    <h4 class="title3">产品特性:</h4>
                    <div class="line"></div>
                    <p>完整记录用户数据库会话细节，包括用户数据库登录行为、登出行为；</p>
                    <p>SQL操作用户名称、SQL操作源程序名称、SQL操作源终端名称；</p>
                    <p>SQL操作源终端登录用户名称、SQL会话参数设置；</p>
                    <p>SQL操作语句、SQL操作返回状态；</p>
                    <p>SQL操作涉及表组、字段、视图、索引、过程、函数、 SQLDML操作影响行数；</p>
                    <p>SQL语句执行时间、原始数据库记录包等。</p>
                    
                    <h5 class="title3 icon1">全面的数据库协议解析</h5>
                    <p>支持的国内外数据库审计，包括：oracle、mssql、DB2、Mysql、PostgreSQL、Informix、
                        SQL Server、Kingbase、达梦、神通等多个数据库系统，满足不同用户对数据库审计的需求。</p>

                    <h5 class="title3 icon1">实时告警</h5>
                    <p>提供实时告警，包括异常告警、策略告警；</p>
                    <p>多形式的实时告警方式：当检测到可以操作或者违反审计规则的操作时，可以syslog 、snmp、邮件以及web告警。</p>

                    <h5 class="title3 icon1">丰富的规则策略</h5>
                    <p>内置了多种规则策略，降低了管理员对于配置审计策略的复杂难度，减轻管理员的工作量。</p>

                    <h5 class="title3 icon1">丰富的审计报表</h5>
                    <p>可根据数据库地址、数据库名称、访问的ip地址、用户名称、源程序等统计和报表，
                        可生成年报、季报、月报、周报和日报，可对特定的数据库、用户名进行报表统计；</p>
                    <p>能够形成符合等保、SOX的综合性报表。统计报表以饼状图、柱状图、表格的形式输出，可以生成HTML/PDF/EXCEL等报表文件。</p>
                    <h4 class="title3">产品部署:</h4>
                    <div class="line"></div>
                    <img src="static\images\p8.png"/>

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

