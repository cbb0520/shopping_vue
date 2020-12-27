<template>
    <div id="Mycenter" class="mycenterdiv1">
        <mainHead ref="mainHead"></mainHead>
      <div  class="mycenterdiv2">
        <div style="padding-left: 100px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/index' }"><span style="color: #8d9aa8">首页</span></el-breadcrumb-item>
        <el-breadcrumb-item><span style="color: black"><strong>个人中心</strong></span></el-breadcrumb-item>
      </el-breadcrumb>
        </div><div style="width: 100%;height: 17px"></div>
        <mycenterbody1></mycenterbody1>

      </div>
      <div id="mycenterdiv3" style="color: #726D6D">
        <h2 style="padding-left: 400px;color: black">{{title}}</h2>
        <el-row class="tac">
          <el-col :span="5" push="1" >
            <el-menu>
              <el-menu-item v-for="menus in daohang" @click="addTab(menus.lables,menus.urls)">
                <i :class="menus.icond"></i>
                <span slot="title">{{menus.lables}}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="18" push="2">
            <div style="overflow-y: auto;overflow-x: auto;width: 965px;height: 480px">
              <component v-bind:is="center"></component>
            </div>
          </el-col>
        </el-row>
      </div>
      <mianbottom></mianbottom>
    </div>
</template>

<script>
  import MainHead from "../components/indexElement/main_head.vue";
  import Mycenterbody1 from "../components/mycenterElement/mycenterbody1.vue";
  import Mycenteraddress from "../components/mycenterElement/mycenteraddress"
  import Mycentermessage from "../components/mycenterElement/mycentermessage.vue"
  import Mianbottom from "../components/indexElement/mian_bottom.vue"
  import Mycentergaishu from "../components/mycenterElement/mycentergaishu.vue";
  import Mycenterorder from "../components/mycenterElement/mycenterorder.vue"
    export default {
        name: "Mycenter",
      data(){
        return {
          daohang:[
            {id:1,icond:'el-icon-menu',lables:'概述',urls:'mycentergaishu'},
            {id:2,icond:'el-icon-location',lables:'我的地址',urls:'mycenteraddress'},
            {id:3,icond:'el-icon-s-claim',lables:'我的订单',urls:'mycenterorder'},
            {id:4,icond:'el-icon-user-solid',lables:'我的信息',urls:'mycentermessage'},
          ],
          title:'概述',
          center:'mycentergaishu',
        }
      },
      methods:{
        addTab(lables,urls){
          this.title=lables;
          this.center=urls;
        }
      },
      components:{
        mainHead: MainHead,
        mycenterbody1:Mycenterbody1,
        mycenteraddress:Mycenteraddress,
        mycentermessage:Mycentermessage,
        mianbottom:Mianbottom,
        mycentergaishu:Mycentergaishu,
        mycenterorder:Mycenterorder

      }
    }
</script>

<style scoped>
  .mycenterdiv1 {
    position: absolute;
    top: 0;
    left: 0;
   width: 100%;
    /* height: 100%;*/

  }
  .mycenterdiv2{
    padding-top:140px;
    width: 100%;
    height: 30px;
  }
  #mycenterdiv3{
    background-color:#F7F9F9;
    width: 100%;
    height: 600px;
    padding-top: 400px;

   /* padding-top: 500px;*/
  }

  .mycenterlable .elt{
    font-size: 20px;
    color: #3e3f5e;
  }
</style>
