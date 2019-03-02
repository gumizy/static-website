<template>
    <div style="height:2400px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox spanred">
        <div class="title" style="text-align:center;">
            <p>朋友，你好！</p>
            <p>期待你与安数云一路同行！</p>
            <p>祝愿你在安数云成就自我！</p>
            <p>&nbsp;</p>
            <p>安数云，绵延着信息安全圈儿未来发展的脉搏</p>
            <p>紧跟<span>最迫切</span>的安全需求</p>
            <p>研发<span>最前沿</span>的安全技术</p>
            <p>服务<span>最高端</span>的企业客户</p>
            <p>肩负<span>最挑战</span>的安全使命</p>
            <p>实现<span>最至臻</span>的人生追求</p>
            <p>&nbsp;</p>
            <p>如果你为实现自我价值、共筑安全梦想而来</p>
            <p>安数云将给你</p>
            <p>更高的地点</p>
            <p>更广的天地</p>
        </div>
        <div>
            <table class="group-name">
                <colgroup><col width=""/><col width="115"/><col width="200"/><col width="50"/></colgroup>
                <tr><td>安全研究员</td><td>人数：1人</td><td>工作地点：北京</td><td><div class="btn"></div></td></tr>
            </table>
            <div class="resume">
                <h4>岗位职责</h4>
                <ul>
                    <li>跟踪国内外信息安全动态，编写安全策略</li>
                    <li>挖掘WEB程序中的安全漏洞，并提出加固建议；</li>
                    <li>主要负责主机、应用安全检查和渗透测试等工作，并编写报告和漏洞检测插件；</li>
                    <li>进行安全攻防技术研究；</li>
                </ul>
                <h4>岗位要求</h4>
                <ul>
                    <li>熟悉Linux/Unix操作系统和MySQL、MSSQL、Oracle等主流数据库的结构及安全漏洞，能够熟练sqlmap进行注入测试；</li>
                    <li>熟悉常见脚本、PHP、JAVA语言及数据库，能够熟练应用基本的WEB渗透手法如：sql注入、xss、文件上传、文件包含、命令执行、目录列表等弱点进行渗透测试及恶意代码检测和分析；</li>
                    <li>熟悉基础的代码安全审计，并且能够提供详尽的安全解决方案；</li>
                    <li>熟悉渗透测试的步骤、方法、流程，能够使用metasploit等工具进行安全攻防测试，并熟练使用常见的Web应 用漏洞测试工具，了解其工作原理；</li>
                    <li>基本的Webshell获取，掌握主流CMS漏洞利用以及如WP、Joomla、DZ等含漏洞插件找寻；</li>
                    <li>熟悉各类主流、非主流WAF或防火墙，并能够有针对性的绕过安全防护类防护软件，最好能了解蜜罐技术和反蜜罐技术；</li>
                    <li>熟悉国内主流系统、WEB应用的漏洞情况；</li>
                    <li>对Linux、apache、mysql、php等安全漏洞与攻防技术精通者优先；</li>
                    <li>对工控安全、物联网安全有涉猎者加分。</li>
                </ul>
            </div>
            <table class="group-name">
                <colgroup><col width=""/><col width="115"/><col width="200"/><col width="50"/></colgroup>
                <tr><td>会计</td><td>人数：2人</td><td>工作地点：北京</td><td><div class="btn"></div></td></tr>
            </table>
            <div class="resume">
                <h4>岗位要求</h4>
                <ul>
                    <li>财会相关专业本科以上学历，具备中级会计资格及以上资格；</li>
                    <li>有一般纳税人企业三年以上工作经验，有高新技术软件行业从业经历者优先；</li>
                    <li>熟悉国家财务、税收政策法规、企业财务制度及工作流程，有股改上市的经验优先；</li>
                    <li>熟练使用“用友”财务软件，及Office办公软件；</li>
                    <li>具有良好的组织、协调、沟通能力，和团队协作精神，能承受较大工作压力；</li>
                    <li>工作细心，有高度的责任心。</li>
                </ul>
            </div>
            <div class="desct">
                <div>简历发送至：hr@datacloudsec.com</div>
                <div>在邮件标题中注明所要申请的职位，格式为：“您的姓名+应聘+具体职位”，例如：“张某 应聘 安全工程师”。</div>
                <div>请勿重复投递简历或者以附件形式发送简历；</div>
                <div>请注明该招聘信息来源于www.datacloudsec.com</div>
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
    },
    mounted() {
        $('.group-name .btn').click(function(){
            if($(this).hasClass('open')){
                $(this).removeClass('open');
                $(this).closest('table').next('.resume').hide();
            }else{
                $(this).addClass('open')
                $(this).closest('table').next('.resume').show();
            }
        });
    }
}
</script>
<style>
.group-name{font-size:14px;font-weight:bold;color:#2F8FFD;margin-top:20px;background:#F2F2F2;width:100%;height:40px;line-height:40px;}
.group-name td{padding:0 10px;}
.group-name .btn{cursor:pointer;width:6px;height:7px;background:url('/static/images/picon.png') no-repeat 0 -512px;}
.group-name .btn.open{background-position:0 -528px;}

.resume{padding:0 10px 0 20px;display:none;}
.resume h4{font-size:12px;color:#2F8FFD;padding:20px 0 10px 0;margin:0;}
.resume ul{list-style-type:decimal;margin-left:40px;}

.desct{font-weight:bold;margin:20px 0 30px 0;line-height:25px;}

.spanred span{color: red;}
</style>


