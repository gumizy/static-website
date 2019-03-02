<template>
    <div class="leftTree" id="leftTree">
        <h3>云安全解决方案</h3>
        <ul>
            <router-link to="product-16">
                <li>云安全整体解决方案</li> 
            </router-link>        
            <router-link to="product-1">
                <li>云安全池</li>
            </router-link>
            <router-link to="product-zstack">
                <li>安数云云平台</li> 
            </router-link>
        </ul>
        <h3>云边界安全</h3>
        <ul>
            <router-link to="product-15">
                <li>云访问安全代理系统</li>
            </router-link>
        </ul>
        <h3>虚拟化安全服务</h3>
        <ul>
            <a href="javascript:void(0);" @click="goProduct3">
                <li>安数云大数据态势感知系统(SAAS)</li>
            </a>
            <a href="javascript:void(0);" @click="goProduct5">
                <li>安数云云边界安全系统(CASB)</li>
            </a>
            <a href="javascript:void(0);" @click="goProduct4">
                <li>安数云RASP WAF（云）</li>
            </a>    
            <a href="javascript:void(0);" @click="goProduct9">
                <li>安数云用户实体行为分析系统UEBA(云)</li>
            </a>    
            <a href="javascript:void(0);" @click="goProduct2">
                <li>安数云综合安全检查评估系统(SAAS)</li>
            </a>    
            <a href="javascript:void(0);" @click="goProduct6">
                <li>安数云WEB应用防火墙系统WAF(云)</li>
            </a>    
            <a href="javascript:void(0);" @click="goProduct7">
                <li>安数云网络入侵防御系统NGIPS(云)</li>
            </a>    
            <a href="javascript:void(0);" @click="goProduct8">
                <li>安数云数据库审计与风险控制系统(云)</li>
            </a>    
        </ul>
        <h3>基础安全产品</h3>
        <ul>
            <a href="javascript:void(0);" @click="goProduct2">
                <li>安数云综合安全检查评估系统</li>
            </a>
            <a href="javascript:void(0);" @click="goProduct6">
                <li>安数云WEB应用防火墙系统WAF</li>
            </a>
            <a href="javascript:void(0);" @click="goProduct7">
                <li>安数云网络入侵防御系统NGIPS</li>
            </a>
            <a href="javascript:void(0);" @click="goProduct8">
                <li>安数云数据库审计与风险控制系统</li>
            </a>
        </ul>
    </div>
</template>
<script>
export default {
  methods: {
	  goProduct1() {
		    this.$router.push({ path: '/product-1' });
		},
		goProduct2() {
		    this.$router.push({ path: '/product-2' });
		},
		goProduct3() {
		    this.$router.push({ path: '/product-3' });
		},
		goProduct4() {
		    this.$router.push({ path: '/product-4' });
        },
        goProduct5() {
		    this.$router.push({ path: '/product-5' });
        },
        goProduct6() {
            this.$router.push({ path: '/product-6' });
        },
        goProduct7() {
            this.$router.push({ path: '/product-7' });
        },
        goProduct8() {
            this.$router.push({ path: '/product-8' });
        },
        goProduct9() {
            this.$router.push({ path: '/product-9' });
        }
  }
}
</script>
