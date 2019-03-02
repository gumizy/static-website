<template>
    <div style="height:3900px;position:relative;">
        <div>
            <ProductMain></ProductMain>
        </div>
        <div class="leftContainer">
            <ProductLeft>
            </ProductLeft>
        <div class="productBox">
            <div class="title2 center">安数云云平台</div>
            <div class="line"></div>
            <div class="body">
                <div class="item">
                    <p>安数云云平台是私有云的管理系统，基于B/S架构，为用户提供Iaas(基础设施即服务)能力，提供了对用户数据中心的计算、
                        存储、网络资源的管理和调度；并提供系统的HA等功能，保证系统的高可用性。</p>
                    <p>用户使用安数云云平台提供的“all in one安装包”可以快速搭建自己的云平台，通过云平台管理系统可以简单方便的完成虚拟机、
                        云盘的创建，迅速将用户的业务迁移到云平台。同时，又能与安数云的安全产品进行无缝对接，根据云平台的特点进行深度适配，
                        为用户提供一个安全可靠的云环境。同时，易可基于安数云提供的接口进行二次开发与合作，降低用户维护成本。</p>
                    <h4 class="title3">安数云云平台的架构特点:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon20">1、扩展性高:</h5>
                    <p>采用了全异步架构，可以轻松处理百万级API并发请求，管理上万台物理机及数万级别的虚拟机；</p>
                    <p>采用了无状态连接服务，可实现管理人员针对多台管理节点的部署与单台部署无异；</p>
                    <p>采用无锁架构，在业务逻辑层，并发与同步由消息队列来完成，可对请求的并发量进行控制。</p>
                    <h5 class="title3 icon20">2、伸缩性和灵活性高:</h5>
                    <p>采用进程内微服务架构，能够实现更快、更小、更强的API请求，降低了IaaS软件的复杂度，实现服务独立灵活扩展；</p>
                    <p>采用了全插件系统，不同的资源均可设计为插件模式进行实现，新增插件对其他插件及系统均无影响，且可随时删除或新增；</p>
                    <p>采用了基于工作流的回滚架构，工作流由xml或其他方法便捷控制，出错回滚机制，且工作流还可进一步降低业务逻辑间的耦合度；</p>
                    <p>采用标签系统，更易实现资源分类及搜索，并可与其他业务逻辑进行协作化处理；</p>
                    <p>采用了资源管理瀑布架构，资源操作及进行瀑布级的子集资源处理及资源可随时通过插件进行加入或删除资源瀑布列表，但对其他资源均无影响。 </p>
                    <h5 class="title3 icon20">3、易用性及可维护性高： </h5>
                    <p> 通过Ansible进行一键安装，无缝升级，灵活配置；</p>
                    <p>多样的API查询可快速定位问题</p>
                    <h5 class="title3 icon20">4、高可靠性 </h5>
                    <p>管理节点支持主备部署，在主节点故障后可以无缝切换到备节点，不影响业务使用</p>
                    <h5 class="title3 icon20">5、科学部署 </h5>
                    <p>支持的部署方式：支持单节点、多节点部署。</p>
                    <h4 class="title3">竞品分析:</h4>
                    <div class="line"></div>
                    <h5 class="title3 icon20">安数云云平台& OpenStack</h5>
                    <p>OpenStack服务之间不但有Http交互，也有RPC交互。整个系统错综复杂。另一方面，随着OpenStack的发展，修改代码有时候会变得不那么容易，
                        甚至不得不重构整个子系统的代码，就像Neutron已经重构了。反观基于Zstack开发的安数云云平台，服务之间的交互就简单明了多了，
                        所有交互统一走消息队列，整个拓扑结构不再紧密，实现星状的架构。</p>
                    <p>如下图所示：</p>
                    <img src="static\images\stack1.png"/>
                    <h6 style="text-align:center;">Open Stack微服务体系</h6>
                    <img src="static\images\stack2.png"/>
                    <h6 style="text-align:center;">安数云微服务体系</h6>
                    <p>OpenStack的微服务是以独立进程分散到各个节点，这在一定程度实现了负载均衡的效果，但存在以下问题：</p>
                    <p>1）服务边界扩大</p>
                    <p>2）给部署、升级、维护带来困难</p>
                    <p>3）纷杂凌乱的配置</p>
                    <p>4）增加额外的监控负担</p>
                    <p>5）当扩展时，会生成更多的微服务</p>
                    <p>鉴于以上原因，安数云云平台采取 all in one process 的实现方式，优势特点如下：</p>
                    <p>1）更简洁的依赖关系。所有微服务都集中在一个进程中，相关代码都在一个包里，给部署、升级、维护、扩展带来了极大的便利。</p>
                    <p>2）集中式的配置管理。OpenStack每个服务都有自己的配置，而且分散在不同的主机上，维护成本较大，
                        而安数云云平台采用集中式配置管理，容易管理，维护成本低。</p>
                    <p>3）微服务只需要关注自己的业务逻辑，高可用、负载均衡、监控都可以交管理节点来完成。</p>
                    <p>4）进程级的应用扩展。从代码层讲，安数云云平台的微服务都是一个个独立的JAR包，且有自己独立的API，
                        错误代码，全局配置，全局属性和系统标签。开发人员可以直接导入包，来实现自己的需要的功能。</p>
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

