import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//将路由的配置js引入进来
import Router from   '../router/routerconfig.js'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router:Router,
})
