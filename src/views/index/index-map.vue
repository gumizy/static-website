<template>
  <div style="width:100%;">
      <div class="center ">
		  <br><br>
		  <img src="static\images\mapTitle.png"/>
	  </div>
      <div id="chinamap" style="width:100%;height:610px;position: relative;top:-50px;"></div>
  </div>
</template>
<script>
import 'echarts/map/js/china.js';
var echarts = require('echarts');
export default {
	methods:{
		// msg(params) {
		// 	var cnameMsg = params.dara.cname;
		// 	var phoneMsg = params.dara.phone;
		// 	var mailMsg = params.dara.mail;
		// 	var addrMsg = params.dara.addr;
		// 	return returnStr = cnameMsg + "<br>" + phoneMsg + "<br>" + mailMsg + "<br>" + addrMsg;
		// }
	},
	mounted(){
	  	var chinamap = echarts.init(document.getElementById('chinamap'));
	  	chinamap.setOption({
		tooltip: {
	        trigger:'item',
	        formatter:function (params){
				var typeMsg = params.data.type;
				var cnameMsg = params.data.cname;
				var phoneMsg = params.data.phone;
				var mailMsg = params.data.mail;
				var addrMsg = params.data.addr;
				// return returnStr = cnameMsg + "<br>" + phoneMsg + "<br>" + mailMsg + "<br>" + addrMsg;
				return typeMsg + "<br>" + "联系人:" + cnameMsg + "<br>" + "电话:" + phoneMsg + "<br>" + "mail:" + mailMsg + "<br>" + "地址:" + addrMsg;
			}
		},
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false,
			itemStyle: {
			normal: {
					// color: '#2790B0',
					color: '#87CEEB',
					borderColor: 'black'
				},
				emphasis: {
					label:{show:true}
				}
			}
			// itemStyle: {
			// 	normal: {
			// 		borderColor:'#999',
			// 		borderWidth:1,
			// 		label:{show:true,textStyle:{color:'black'}},
			// 		areaStyle:{
			// 			color:'white'
			// 		}
			// 	},
			// 	emphasis: {
			// 		label:{show:true}
			// 	}
			// }
		},
	    series: [
			{
				name:'服务网点',
				type: 'scatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					period:4,
					brushType: 'stroke',
					scale: 4
				},
				label: {
					normal: {
						show: true,
						position: 'right',						
						color:'red',
						offset:[-30, 20],
						formatter: '{b}',
						textStyle: {
							color:"red",
							fontSize:16,
							fontWeight:'bolder'
						}
					},
					emphasis: {
						show: true
					}
				},
				symbol: 'pin',
				symbolSize:30,
				itemStyle: {
					normal: {
						show: true,
						color: 'red'
					}
				},
				data: 
					[
						{name:'北京',value:[116.4551,40.2539],type:"寇塔空总部",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',fax:'010-62928890',addr:'北京市海淀区xxx'},
						{name:'重庆',value:[107.7539,30.1904],type:"重庆研发中心",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'重庆市九龙坡区石杨路2号xxx'},
						{name:'广州',value:[113.5107,23.2196],type:"广州服务网点",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'广州市天河区五山路xxx'},
						{name:'杭州',value:[119.5313,29.8773],type:"浙江寇塔空",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'杭州市下城区江南巷11号xxx'},
						{name:'郑州',value:[113.4668,34.6234],type:"河南寇塔空",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'郑州市金水区经三北路32号xxx'},
						{name:'济南',value:[117.1582,36.8701],type:"山东寇塔空",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'济南市历下区浆水泉路17号xxx'},
						{name:'西安',value:[109.1162,34.2004],type:"西安研发中心",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'西安市高新区科技一路xxx'},
						{name:'南昌',value:[116.0046, 28.6633],type:"江西寇塔空",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'南昌市高新区高新一路xxx'},						
						{name:'兰州',value:[103.5901,36.3043],type:"服务网点建设中",cname:'待定',phone:'待定',mail:'待定',addr:'待定'},
						{name:'成都',value:[103.9526,30.7617],type:"服务网点建设中",cname:'待定',phone:'待定',mail:'待定',addr:'待定'},
						{name:'昆明',value:[102.9199,25.4663],type:"服务网点建设中",cname:'待定',phone:'待定',mail:'待定',addr:'待定'}
						// {name:'呼和浩特',value:[111.4124,40.4901],type:"服务网点建设中",cname:'待定',phone:'待定',mail:'待定',addr:'待定'},
						// {name:'乌鲁木齐',value:[87.9236,43.5883],type:"服务网点建设中",cname:'待定',phone:'待定',mail:'待定',addr:'待定'},
					]
			},
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					period:4,
					brushType: 'stroke',
					scale: 4
				},
				label: {
					normal: {
						show: true,
						position: 'right',						
						color:'red',
						offset:[-45, 20],
						formatter: '{b}',
						textStyle: {
							color:"red",
							fontSize:16,
							fontWeight:'bolder'
						}
					},
					emphasis: {
						show: true
					}
				},
				symbol: 'pin',
				symbolSize:30,
				itemStyle: {
					normal: {
						show: true,
						color: 'red'
					}
				},
				data: 
					[
						{name:'乌鲁木齐',value:[87.9236,43.5883],type:"服务网点建设中",cname:'待定',phone:'待定',mail:'待定',addr:'待定'},
						{name:'呼和浩特',value:[111.4124,40.4901],type:"服务网点建设中",cname:'待定',phone:'待定',mail:'待定',addr:'待定'},
					]
			},
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					period:4,
					brushType: 'stroke',
					scale: 4
				},
				label: {
					normal: {
						show: true,
						position: 'right',						
						color:'red',
						offset:[0, 0],
						formatter: '{b}',
						textStyle: {
							color:"red",
							fontSize:16,
							fontWeight:'bolder'
						}
					},
					emphasis: {
						show: true
					}
				},
				symbol: 'pin',
				symbolSize:30,
				itemStyle: {
					normal: {
						show: true,
						color: 'red'
					}
				},
				data: 
					[
						{name:'南京',value:[118.8062,31.9208],type:"南京寇塔空",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'南京市六朝路9号xxx'},
						{name:'深圳',value:[114.5435, 22.5439],type:"深圳寇塔空",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'深圳市福田区福田接到福南社区深南中路xxx'},
						{name:'重庆',value:[106.7539,30.1904],type:"重庆寇塔空",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'重庆市北部新区星光大道62号xxx'}
					]
			},
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					period:4,
					brushType: 'stroke',
					scale: 4
				},
				label: {
					normal: {
						show: true,
						position: 'right',						
						color:'red',
						offset:[-38, 20],
						formatter: '{b}',
						textStyle: {
							color:"red",
							fontSize:16,
							fontWeight:'bolder'
						}
					},
					emphasis: {
						show: true
					}
				},
				symbol: 'pin',
				symbolSize:30,
				itemStyle: {
					normal: {
						show: true,
						color: 'red'
					}
				},
				data: 
					[
						{name:'哈尔滨',value:[127.9688,45.368],type:"哈尔滨服务网点",cname:'xxx',phone:'111-1111-1111',mail:'xxx@xxx.com',addr:'哈尔滨南岗区闽江路248号xxx'},
					]
			}
	    ]
	});
	window.onresize = chinamap.resize;
  }
}
</script>

