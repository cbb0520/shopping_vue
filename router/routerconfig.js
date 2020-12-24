import Vue from 'vue'
import VueRouter from "vue-router";

import Login from "../components/Loginuser.vue";
import Index from "../components/Index.vue";
import Register from "../components/Register.vue";
import GoodsMessage from "../components/GoodsMessage.vue";
import Mycenter from "../components/Mycenter.vue";
import Shanghu3 from "../components/Shanghu3.vue";

Vue.use(VueRouter)

export  default  new VueRouter({
  routes:[
    {path:"/",redirect:'index'},
    {path:"/login",component:Login,name:"logins", meta: { requiresAuth: true }},
    {path:"/index",component:Index,name:"indexs", meta: { requiresAuth: true }},
    {path:"/register",component:Register,name:"registers", meta: { requiresAuth: true }},
    {path:"/goodsMessage",component:GoodsMessage,name:"goodsMessage", meta: { requiresAuth: true }},
    {path:"/mycenter",component:Mycenter,name:"mycenters", meta: { requiresAuth: true }},
    {path:"/shanghu3",component:Shanghu3,name:"shanghu3", meta: { requiresAuth: true }},
  ]
})
