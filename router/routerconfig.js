import Vue from 'vue'
import VueRouter from "vue-router";

import Login from "../components/Loginuser.vue";
import Index from "../components/Index.vue";

Vue.use(VueRouter)

export  default  new VueRouter({
  routes:[
    {path:"/",redirect:'index'},
    {path:"/login",component:Login,name:"logins", meta: { requiresAuth: true }},
    {path:"/index",component:Index,name:"indexs", meta: { requiresAuth: true }},
  ]
})
