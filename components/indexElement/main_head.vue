<!--主页头部-->
<template>
  <div style="position: fixed;width: 100%;z-index: 999;">

    <header style="">
      <el-menu class="el-menu-demo" mode="horizontal">

        <el-menu-item index="1">
          <el-image style="height: 45px;width: 135px" src="images/logo.svg" fit="scale-down"></el-image>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-location-outline"></i>查看热门地址</template>
          <el-menu-item index="2-1"><i class="el-icon-location-outline"></i>上海</el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-location-outline"></i>北京</el-menu-item>
          <el-menu-item index="2-3"><i class="el-icon-location-outline"></i>长沙</el-menu-item>
          <el-menu-item index="2-3"><i class="el-icon-location-outline"></i>成都</el-menu-item>
        </el-submenu>

        <el-menu-item index="3">
          <el-input style="width: 300px" size="medium" placeholder="搜索产品" prefix-icon="el-icon-search"></el-input>
        </el-menu-item>

        <el-submenu index="4" style="float: right">
          <template slot="title">
            <el-avatar size="small" src="images/img-5.jpg"></el-avatar>
            <span>{{indexuaccount}}</span>
          </template>
          <el-menu-item index="4-1"><i class="el-icon-chat-line-square"></i>我的收藏</el-menu-item>
          <el-menu-item index="4-2"><i class="el-icon-star-off"></i>我的收藏</el-menu-item>
          <el-menu-item index="4-3"><i class="el-icon-coin"></i>我的钱包</el-menu-item>
          <el-menu-item index="4-4" @click="myaddress"><i class="el-icon-location-outline"></i>我的地址</el-menu-item>
          <el-menu-item index="4-5"><i class="el-icon-potato-strips"></i>优惠</el-menu-item>
          <el-menu-item index="4-6"><i class="el-icon-warning-outline"></i>常见问题</el-menu-item>
          <el-menu-item index="4-7" @click="loginout"><i class="el-icon-lock"></i>退出</el-menu-item>
        </el-submenu>

        <el-menu-item index="5" style="float: right">
          <el-badge :value="3" class="item">
            <el-button class="gwc" size="small"><i class="el-icon-star-off"></i></el-button>
          </el-badge>
        </el-menu-item>

        <el-menu-item index="6" style="float: right">
          <el-link icon="el-icon-question" :underline="false">帮助</el-link>
        </el-menu-item>

        <el-menu-item index="7" style="float: right">
          <el-link icon="el-icon-potato-strips" :underline="false">优惠</el-link>
        </el-menu-item>

        <el-menu-item index="8" style="float: right">
          <el-link icon="el-icon-phone" :underline="false">1800-000-000</el-link>
        </el-menu-item>

      </el-menu>
      <el-menu class="el-menu-demo" mode="horizontal" style="border-bottom: solid 1px #e6e6e6;box-shadow: 3px 3px 3px rgba(2,2,2,0.1)">

        <el-menu-item index="1" class="head_foot_type">
          <i class="el-icon-menu"></i>
          <span>选择类别</span>
        </el-menu-item>

        <el-menu-item index="2" style="margin-left: 20px;">
          <span>首页</span>
        </el-menu-item>

        <el-menu-item index="3">
          <span>新产品</span>
        </el-menu-item>

        <el-menu-item index="4">
          <span>特色产品</span>
        </el-menu-item>

        <el-menu-item index="5">
          <span>关于</span>
        </el-menu-item>

        <el-menu-item index="6">
          <span>联系我们</span>
        </el-menu-item>

        <el-menu-item index="7" class="shopping" style="float: right;background-color: #f55d2c">
          <i class="el-icon-shopping-cart-2" style="color: #FFFFFF;margin-right: 0px;"></i>
          <span style="color: #FFFFFF">购物车</span>
          <span style="margin-right: 20px;color: #FFFFFF">3</span>
          <i style="top:54%;color: #FFFFFF;font-size: 15px;" class="el-submenu__icon-arrow el-icon-arrow-down"></i>
        </el-menu-item>
      </el-menu>
    </header>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        indexuaccount:sessionStorage.getItem('uaccount')
      };
    },
    methods: {
      loginout(){
        sessionStorage.removeItem("uaccount");
        this.$router.push({name:"logins"})
      },
      myaddress(){
        this.$router.push({name:"mycenters"})
      }
    },
    created:function () {
    }
  }
</script>

<style>
  .homeWrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .el-badge__content.is-fixed {
    top: 15px;
  }

  .gwc {
    width: 38px;
    border-radius: 50%;
    background: bisque;
    border: 0px;
  }

  .el-button--small, .el-button--small.is-round {
    padding: 9px 8px;
  }

  .el-menu-item i {
    color: #f69733;
  }

  .el-link [class*=el-icon-] + span {
    margin-left: -2px;
  }

  .el-link--inner:hover {
    color: #f69733;
  }

  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 0px solid #FFF;
  }

  .head_foot_type {
    border-right: 1px solid lightgrey;
    width: 152px;
    text-align: center
  }
</style>
