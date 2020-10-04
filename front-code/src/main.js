// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import Login from './view/login.vue'
import Fundtrade from './view/panels/fundtrade.vue'
import Recommendedcombination from './view/panels/recommendedcombination.vue'
Vue.use(ViewUI)
Vue.use(Router)

Vue.config.productionTip = false

/* eslint-disable no-new */
// 定义路由
const routes = [
  { path: '/login', component: Login },
  { path: '/fundtrade', component: Fundtrade },
  { path: '/recommendedcombination', component: Recommendedcombination }
]
// 创建router实例，然后传routes配置
const router = new Router({
  routes
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
