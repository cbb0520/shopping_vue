import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//异步配置
import Axios from 'axios'
Axios.defaults.baseURL = "http://localhost:8080/crmsystem_web"
// 将API方法绑定到全局
Vue.prototype.$axios = Axios

//将路由的配置js引入进来
import Router from   '../router/routerconfig.js'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router:Router
})
