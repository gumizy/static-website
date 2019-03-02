import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  { path: '/', component: _import('index'), hidden: true },
  { path: '/index', component: _import('index'), hidden: true },
  { path: '/500', component: _import('500'), hidden: true },
  { path: '/error', component: _import('500'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  { path: '/401', component: _import('401'), hidden: true },
  { path: '*', redirect: '/404', hidden: true },
  { path: '/product-main', component: _import('product/product-main'), hidden: true },
  { path: '/product-1', component: _import('product/product-1'), hidden: true },
  { path: '/product-2', component: _import('product/product-2'), hidden: true },
  { path: '/product-3', component: _import('product/product-3'), hidden: true },
  { path: '/product-4', component: _import('product/product-4'), hidden: true },
  { path: '/product-5', component: _import('product/product-5'), hidden: true },
  { path: '/product-6', component: _import('product/product-6'), hidden: true },
  { path: '/product-7', component: _import('product/product-7'), hidden: true },
  { path: '/product-8', component: _import('product/product-8'), hidden: true },
  { path: '/product-9', component: _import('product/product-9'), hidden: true },
  { path: '/product-10', component: _import('product/product-10'), hidden: true },
  { path: '/product-11', component: _import('product/product-11'), hidden: true },
  { path: '/product-12', component: _import('product/product-12'), hidden: true },
  { path: '/product-13', component: _import('product/product-13'), hidden: true },
  { path: '/product-14', component: _import('product/product-14'), hidden: true },
  { path: '/product-15', component: _import('product/product-15'), hidden: true },
  { path: '/product-16', component: _import('product/product-16'), hidden: true },
  { path: '/product-zstack', component: _import('product/product-zstack'), hidden: true },
  { path: '/product-news', component: _import('product/product-news'), hidden: true },
  { path: '/product-new1', component: _import('product/product-new1'), hidden: true },
  { path: '/product-new2', component: _import('product/product-new2'), hidden: true },
  { path: '/product-new3', component: _import('product/product-new3'), hidden: true },
  { path: '/product-new4', component: _import('product/product-new4'), hidden: true },
  { path: '/product-new5', component: _import('product/product-new5'), hidden: true },
  { path: '/product-new6', component: _import('product/product-new6'), hidden: true },
  { path: '/product-new7', component: _import('product/product-new7'), hidden: true },
  { path: '/product-new8', component: _import('product/product-new8'), hidden: true },
  { path: '/product-new9', component: _import('product/product-new9'), hidden: true },
  { path: '/product-new10', component: _import('product/product-new10'), hidden: true },
  { path: '/product-new11', component: _import('product/product-new11'), hidden: true },
  { path: '/product-new12', component: _import('product/product-new12'), hidden: true },
  { path: '/product-new13', component: _import('product/product-new13'), hidden: true },
  { path: '/product-new14', component: _import('product/product-new14'), hidden: true },
  { path: '/product-new15', component: _import('product/product-new15'), hidden: true },
  { path: '/product-new16', component: _import('product/product-new16'), hidden: true },
  { path: '/product-new17', component: _import('product/product-new17'), hidden: true },
  { path: '/product-new18', component: _import('product/product-new18'), hidden: true },
  { path: '/product-new19', component: _import('product/product-new19'), hidden: true },
  { path: '/product-new20', component: _import('product/product-new20'), hidden: true },
  { path: '/product-new21', component: _import('product/product-new21'), hidden: true },
  { path: '/product-new22', component: _import('product/product-new22'), hidden: true },
  { path: '/product-new23', component: _import('product/product-new23'), hidden: true },
  { path: '/product-new24', component: _import('product/product-new24'), hidden: true },
  { path: '/product-new25', component: _import('product/product-new25'), hidden: true },
  { path: '/product-new26', component: _import('product/product-new26'), hidden: true },
  { path: '/product-new27', component: _import('product/product-new27'), hidden: true },
  { path: '/product-new28', component: _import('product/product-new28'), hidden: true },
  { path: '/banner1', component: _import('product/banner1'), hidden: true },
  { path: '/banner2', component: _import('product/banner2'), hidden: true },
  { path: '/banner3', component: _import('product/banner3'), hidden: true },
  { path: '/customization', component: _import('product/customization'), hidden: true },
  { path: '/job', component: _import('product/job'), hidden: true },
  { path: '/license', component: _import('product/license'), hidden: true },
  { path: '/upgrade', component: _import('product/upgrade'), hidden: true },
  { path: '/introduce', component: _import('product/introduce'), hidden: true }
]

export default new Router({
  // mode: 'history',  // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})