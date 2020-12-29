<!--主页头部-->
<template>
  <div style="position: fixed;width: 100%;z-index: 999;">
    <header style="">
      <el-menu class="el-menu-demo" mode="horizontal">

        <el-menu-item index="1">
          <el-image style="height: 45px;width: 135px" src="images/logo.svg" fit="scale-down"
                    @click="goIndex"></el-image>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-location-outline"></i>查看热门地址</template>
          <el-menu-item index="2-1"><i class="el-icon-location-outline"></i>上海</el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-location-outline"></i>北京</el-menu-item>
          <el-menu-item index="2-3"><i class="el-icon-location-outline"></i>长沙</el-menu-item>
          <el-menu-item index="2-3"><i class="el-icon-location-outline"></i>成都</el-menu-item>
        </el-submenu>

        <el-menu-item index="3">
          <el-input style="width: 300px" size="medium" v-model="search" placeholder="搜索产品" prefix-icon="el-icon-search"></el-input>
          <el-button size="medium" style="background: #f55d2c;color: white;" @click="searchBtn">
            <a href="#goclassify" style="text-decoration: none">搜索</a>
          </el-button>
        </el-menu-item>

        <el-submenu index="4" style="float: right;width: 155px;" v-if="indexuaccount != null">
          <template slot="title">
            <el-avatar size="small" :src="indexuimg"></el-avatar>
            <span>{{indexuaccount}}</span>
          </template>
          <el-menu-item index="4-1"><i class="el-icon-chat-line-square"></i>我的收藏</el-menu-item>
          <el-menu-item index="4-2"><i class="el-icon-star-off"></i>我的收藏</el-menu-item>
          <el-menu-item index="4-3"><i class="el-icon-coin"></i>我的钱包</el-menu-item>
          <el-menu-item index="4-4" @click="myaddress"><i class="el-icon-location-outline"></i>我的地址</el-menu-item>
          <el-menu-item index="4-5"><i class="el-icon-potato-strips"></i>优惠</el-menu-item>
          <el-menu-item index="4-6" @click="yanzheng"><i class="el-icon-warning-outline"></i>商户信息</el-menu-item>
          <!--<el-menu-item index="4-7" @click="loginout"><i class="el-icon-lock"></i>退出</el-menu-item>-->
          <el-menu-item index="4-6"><i class="el-icon-warning-outline"></i>常见问题</el-menu-item>
          <el-menu-item index="4-7" @click="loginout"><i class="el-icon-lock"></i>
            <span v-if="this.indexuaccount == undefined">登录</span>
            <span v-if="this.indexuaccount != undefined">退出</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="4" style="float: right" v-if="indexuaccount == null">
          <el-link icon="el-icon-user" :underline="false" @click="loginout">去登陆</el-link>
        </el-menu-item>

        <el-menu-item index="5" style="float: right">
          <el-badge :value="0" class="item">
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
      <el-menu class="el-menu-demo" mode="horizontal"
               style="border-bottom: solid 1px #e6e6e6;box-shadow: 3px 3px 3px rgba(2,2,2,0.1)">

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

        <el-menu-item index="7" class="shopping" @click="openShoping" style="float: right;background-color: #f55d2c">
          <i class="el-icon-shopping-cart-2" style="color: #FFFFFF;margin-right: 0px;"></i>
          <span style="color: #FFFFFF">购物车</span>
          <span style="margin-right: 20px;color: #FFFFFF">{{shoppingCarData.length}}</span>
          <i style="top:54%;color: #FFFFFF;font-size: 15px;" class="el-submenu__icon-arrow el-icon-arrow-down"></i>
        </el-menu-item>
      </el-menu>
    </header>

    <el-dialog title="注册商户" :visible.sync="dialogVisible" width="50%">
      <!-- 内容的主体区域 -->
      <adduser ref="child01"></adduser>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addtmerchant">确 定</el-button>
                </span>
    </el-dialog>

    <!--购物车查看-->
    <el-drawer title="我是标题" :visible.sync="drawer" :modal="false" direction="ltr" :with-header="false">
      <h2 class="shoppingTitle">
        <el-checkbox name="type" style="position: absolute;margin-left: -6px"
                     @change="selectAllShopping($event)"></el-checkbox>
        <span style="color: #f69733;padding-left: 28px;">我的购物车({{shoppingCarData.length}}件)</span>
        <i class="el-icon-close shopingIcon" @click="closeShoping"></i>
      </h2>
      <div v-if="shoppingCarData.length<1">
        <el-image src="../../images/car_null.jpg" style="width: 200px;height: 200px;"></el-image>
        <h2 style="color: #726D6D;font-family: 黑体;margin: -120px 0px 0px 210px;position: absolute">空空如也 ~_~</h2>
      </div>
      <template>
        <ul class="infinite-list shoppingUl" @v-infinite-scroll="load">
          <li v-for="goods in shoppingCarData" class="infinite-list-item showShopping">
            <el-row :gutter="20">
              <el-col :span="2">
                <el-checkbox name="type" style="line-height: 120px" v-model="goods.select"
                             @change="selectGoods($event,goods.gid)"></el-checkbox>
              </el-col>
              <el-col :span="8">
                <div style="border: 1px solid #f7f7f7">
                  <el-image :src="'http://localhost:8081/src/assets/'+goods.gimgs"
                            @click="goodsmsg(goods.gid)"></el-image>
                </div>
              </el-col>
              <el-col :span="14">
                <div>
                  <b @click="goodsmsg(goods.gid)">{{goods.gname}}</b>
                  <i class="el-icon-close movieShopping" @click="delShoppingCar(goods.gid)"></i>
                </div>
                <div style="margin-top: 60px;">
                  <el-input-number size="mini" v-model="goods.count" @change="selectCountGoods(goods.gid,goods.count)"
                                   :min=1 :max=99 style="width: 95px;"></el-input-number>
                  <span style="color: #f69733;float:right;">￥
                  <b>{{goods.count * goods.gprice}}</b></span>
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </template>
      <h3 style="line-height: 60px;background: #f7f7f7;margin: 0;padding: 10px 33px;border-bottom: 1px solid lightgrey">
        小计：
        <span style="color: #f69733;float:right;">￥
        <b>{{sumPrice}}</b></span>
      </h3>
      <div style="padding: 20px 33px;background: #f7f7f7;height: 150px;">
        <el-button style="background: #f69733;color: #FFFFFF;float: right" @click="goGoodsPay">进行结算</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
  import Adduser from "../shanghuElement/shanghuweihu/registermerchant"

  export default {
    data() {
      return {
        drawer: false,
        count: 0,
        num: 1,
        indexuaccount: sessionStorage.getItem('uaccount'),
        shoppingCarData: [],
        sumPrice: 0,
        dialogVisible: false,
        indexuid: sessionStorage.getItem('uid'),
        userData: {},
        indexuimg: '',
        search:''
      };
    },
    methods: {
      loginout() {
        sessionStorage.removeItem("uaccount");
        sessionStorage.removeItem("uimg");
        sessionStorage.removeItem("uid");
        this.$router.push({name: "logins"})
      },
      myaddress() {
        this.$router.push({name: "mycenters"})
      },
      closeShoping() {
        this.drawer = false;
      },
      openShoping() {
        if (this.indexuaccount == undefined) {
          this.$notify({
            title: '提示！',
            message: '请先登录，才可以加入购物车  $_$',
            position: 'top-right'
          });
          return;
        }
        this.getShoppingCarData();
        this.drawer = true;
      },
      load() {
        if (this.count == 10) {
          return
        }
        this.count += 1
      },
      handleChange(value) {
        console.log(value);
      },
      getShoppingCarData() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("uaccount", this.indexuaccount);
        this.$axios.post("/queryGoodsByUid.action", params).then(function (result) {
          _this.shoppingCarData = result.data;
          _this.eachShoppingCarData();
        }).catch(function (error) {
          alert(error)
        });
      },
      //计算购物车选中的商品总价
      eachShoppingCarData() {
        let sumPrice = 0;
        this.shoppingCarData.forEach((item, index, ary) => {
          if (item.select == true) {
            sumPrice += item.gprice * item.count;
          }
        })
        this.sumPrice = sumPrice;
      },
      //修改购物车复选框计算商品总价
      selectGoods(e, gid) {
        var _this = this;
        var params = new URLSearchParams();
        params.append("gid", gid);
        params.append("select", e);
        params.append("uaccount", this.indexuaccount);
        this.$axios.post("/changeSelect.action", params).then(function (result) {
          _this.eachShoppingCarData();
        }).catch(function (error) {
          alert(error)
        });
      },
      //全选购物车
      selectAllShopping(e) {
        //快速勾选
        this.shoppingCarData.forEach((item, index, ary) => {
          item.select = e;
        })

        var _this = this;
        var params = new URLSearchParams();
        params.append("select", e);
        params.append("uaccount", this.indexuaccount);
        this.$axios.post("/selectAllShopping.action", params).then(function (result) {
          _this.getShoppingCarData();
          _this.eachShoppingCarData();
        }).catch(function (error) {
          alert(error)
        });
      },
      //修改购物车数量并计算总价
      selectCountGoods(gid, count) {
        var _this = this;
        var params = new URLSearchParams();
        params.append("gid", gid);
        params.append("count", count);
        params.append("uaccount", this.indexuaccount);
        this.$axios.post("/selectCountGoods.action", params).then(function (result) {
          _this.eachShoppingCarData();
        }).catch(function (error) {
          alert(error)
        });
      },
      //删除购物车里的某项商品
      delShoppingCar(gid) {
        this.$confirm('前确认是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var _this = this;
          var params = new URLSearchParams();
          params.append("gid", gid);
          params.append("uaccount", this.indexuaccount);
          this.$axios.post("/delShoppingCar.action", params).then(function (result) {
            _this.getShoppingCarData();
            _this.eachShoppingCarData();
          }).catch(function (error) {
            alert(error)
          });
        })
      },
      goodsmsg(gid) {
        this.$router.push({name: 'goodsMessage', params: {gid: gid}})
      },
      goIndex() {
        this.$router.push({name: 'indexs'});
      },
      getUserData() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("uaccount", this.indexuaccount);
        this.$axios.post("/queryByuaccount.action", params)
          .then(function (result) {
            console.log(result.data);
            _this.userData = result.data
            _this.indexuimg = 'http://localhost:8081/src/assets/' + _this.userData.uimg;
          }).catch(function (error) {
          alert(error)
        });
      },
      yanzheng() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("uid", this.indexuaccount);
        this.$axios.post("/yanzhengUserById.action", params).then(function (result) {
          sessionStorage.setItem("mid", result.data.mid)
          console.log(result.data.state)
          if (result.data.state == '已同意') {
            _this.$router.push({name: "shanghu3"})

          } else if (result.data.state == '未同意') {
            _this.$message({
              message: '警告哦，正在审核中',
              type: 'warning'
            });
          } else if (result.data.state == '已拒绝') {
            _this.$message.error('警告哦，已拒绝你的商户申请');
          } else {
            _this.$confirm('你还不是商户, 是否申请成为商户?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              _this.dialogVisible = true;
            }).catch(() => {
              _this.$message({
                type: 'info',
                message: '已取消'
              });
            });
          }
        }).catch(function (error) {
          alert(error)
        });
      },
      addtmerchant() {
        var _this = this;
        var params = new URLSearchParams();
        console.log(sessionStorage.getItem('uid'))
        params.append("uid", sessionStorage.getItem('uid'));
        params.append("sname", this.$refs.child01.merchants.sname);
        params.append("phone", this.$refs.child01.merchants.phone);
        params.append("mtype", this.$refs.child01.merchants.mtype);
        params.append("mddress", this.$refs.child01.merchants.mddress);
        params.append("provincecode", this.$refs.child01.provincecode);
        params.append("citycode", this.$refs.child01.citycode);
        params.append("areacode", this.$refs.child01.areacode);
        this.$axios.post("/addMerchants2.action", params).then(function (result) {
          _this.$message({
            message: result.data.msg,
            type: 'success'
          });
          _this.dialogVisible = false;
        }).catch(function (error) {
          _this.$message({
            message: '添加失败',
            type: 'success'
          });
        });
      },
      //跳到支付页面
      goGoodsPay() {
        //判断是否有商品
        if (this.shoppingCarData.length < 1) {
          this.$message({
            message: '购物车没有商品，请先添加购物车',
            type: 'info'
          });
          return;
        }
        //判断是否选择了商品
        var i = 0;
        this.shoppingCarData.forEach((item, indec, row) => {
          if (item.select) {
            i = 1;
          }
        })
        if (i == 0) {
          this.$message({
            message: '请选择至少一个商品',
            type: 'info'
          });
          return;
          ;
        }
        this.$router.push({name: "goodsPay"})
      },
      //搜索商品
      searchBtn(){
        this.$parent.$refs.mainBody.getGoodsData();
      }
    },
    components: {
      adduser: Adduser
    },
    created: function () {
      this.getUserData();
      if (this.indexuaccount != undefined) {
        this.getShoppingCarData();
      }
    }
  }
</script>

<style>
  .v-modal {
    display: none;
  }

  .showShopping {
    list-style-type: none;
    height: 120px;
    border-bottom: 1px solid #efefef;
    padding: 15px;
    background: #FFFFFF;
  }

  .movieShopping {
    float: right;
    font-weight: bold;
    font-size: 18px
  }

  .movieShopping:hover {
    cursor: pointer;
    color: #f55d2c;
  }

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

  .shoppingTitle {
    font-size: 17px;
    font-weight: 500;
    background: #2b2f4c;
    color: white;
    padding-left: 20px;
    margin: 0;
    line-height: 50px
  }

  .shopingIcon {
    color: white;
    margin-left: 170px;
    font-size: 22px;
    font-weight: bold;
  }

  .shopingIcon:hover {
    color: #f69733;
    cursor: pointer;
  }

  .shoppingUl {
    overflow: auto;
    margin: 0;
    padding: 0;
    height: 450px;
    background: #f7f7f7
  }
</style>
