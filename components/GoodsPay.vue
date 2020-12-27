<template>
  <div>
    <main_head></main_head>
    <div style="padding: 170px 80px 60px 80px;background: #FFFFFF">

      <h2 style="color: #3e3f5e;font-size: 30px;font-family: 新宋体;margin: 0px 0px 50px 0px;">订单支付</h2>

      <!--收货地址-->
      <div style="border: 1px solid darkgrey;height: 185px;padding: 35px 15px 0px 15px">
        <h2 class="addressH2">选择收获地址</h2>
        <el-row :gutter="20">
          <!--收货地址信息框-->
          <el-col :span="6" v-for="a in address">
            <div :class="'useressDiv '+a.isselect" name="useressDiv" @click="selectAddrss($event,a.aid)">
              <i class="el-icon-close removeAddr" @click="removeAddr($event,a.aid)"></i>
              <p>收货人：<span>{{a.name}}</span></p>
              <p>联系电话：<span>{{a.phone}}</span></p>
              <p>收货地址：<span>{{a.merchants.mddress}}</span></p>
            </div>
          </el-col>

          <!--添加收货地址框-->
          <el-col :span="6" :style="'display:' + display">
            <div class="addressDiv" @click="insertAddr">
              <i class="el-icon-plus addressI"></i>
            </div>
            <!--输入收货信息-->
            <div id="addressmsg">
              <el-form size="mini" class="demo-form-inline">
                <el-form-item>
                  <el-select placeholder="选择收货地址" v-model="mid" style="width: 100%;">

                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="收货人姓名" v-model="name" style="width: 60%;"></el-input>
                  <el-button style="float: right;width: 30%" @click="cancelMsg">取消</el-button>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="联系电话" v-model="phone" style="width: 60%;"></el-input>
                  <el-button style="float: right;background: #f55d2c;color: #FFFFFF;width: 30%" @click="okMsg">提交
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--订单数据-->
      <div style="border: 1px solid darkgrey;padding: 35px 15px 15px 15px;margin-top: 80px;">
        <h2 class="addressH2">我的订单</h2>
        <table class="gooodsPayTable">
          <tr>
            <td></td>
            <td>产品</td>
            <td>数量</td>
            <td>单价</td>
            <td>小计</td>
          </tr>
          <tr v-for="g in goodsCar">
            <td>
              <el-image :src="'http://localhost:8081/src/assets/'+g.gimgs"
                        style="width: 100px;height: 100px;"></el-image>
            </td>
            <td>{{g.gname}}</td>
            <td>{{g.count}}</td>
            <td>{{g.gprice}}</td>
            <td>{{g.gprice * g.count}}</td>
          </tr>
          <tr style="background: #e6e6e6">
            <td colspan="2" style="padding: 15px 0px;color: #3e3f5e;">
              <el-select v-model="yhj" placeholder="我的优惠卷" @change="selectyhj">
                <el-option label="暂无优惠卷" :value=0></el-option>
              </el-select>
            </td>
            <td></td>
            <td style="padding: 15px 0px;color: #3e3f5e;font-weight: bold;font-size: 18px;font-family: 黑体">总计</td>
            <td style="padding: 15px 0px;color: #3e3f5e;font-weight: bold;font-size: 18px;font-family: 黑体">
              ￥{{goodsCarSum}}
            </td>
          </tr>
        </table>
      </div>
      <!--支付-->
      <div style="border: 1px solid darkgrey;padding: 35px 15px 15px 15px;margin-top: 80px;">
        <h2 class="addressH2">付款</h2>
        <div>
          <p style="color: #8d9aa8">附加信息 (可选)</p>
          <textarea style="min-height: 100px;max-height: 200px;min-width:420px;max-width: 420px;padding: 15px 25px;outline: none;
                          font-size: 16px;border: 1px solid lightgrey;border-radius: 15px;color: grey;font-family: 新宋体"
                    placeholder="有关订单的注释，例如，交货的特殊注释。" v-model="payText"></textarea>
        </div>
        <div style="text-align: right;margin-top: -60px">
          <el-button style="background: #f55d2c;color: #FFFFFF" @click="goPay">立即付款</el-button>
          <br>
          <el-checkbox label="我已阅读并同意网站条款 *" name="type" @change="checked($event)"></el-checkbox>
        </div>
      </div>

    </div>

    <mian_bottom></mian_bottom>
  </div>
</template>

<script>
  import main_head from "./indexElement/main_head";
  import mian_bottom from "./indexElement/mian_bottom";

  export default {
    name: "GoodsPay",
    data() {
      return {
        yhj: '', //优惠卷
        address: [],  //地址集合
        display: 'none',  //是否显示添加地址信息
        ischecked: false, //是否勾选条约
        goodsCar: [], //订单集合
        goodsCarSum: 0, //订单总价
        name: '',  //添加姓名
        phone: '', //添加电话
        mid: '选择收货地址', //商户id
        payText: '',   //商品附加信息
      }
    },
    methods: {
      //点击收货地址执行方法
      selectAddrss(e, aid) {
        // 获取绑定事件的DOM元素。
        var ee = e.currentTarget;
        if (ee.className == "useressDiv newUseressDiv") {
          //取消选择地址，移除class
          var params = new URLSearchParams();
          params.append("uaccount", sessionStorage.getItem('uaccount'));
          this.$axios.post("/removeAddClass.action", params).then(function (result) {
          }).catch(function (error) {
            alert(error)
          });
          ee.className = "useressDiv";
          return;
        }
        //先清除其他地址的class
        var eename = document.getElementsByName("useressDiv");
        for (var i = 0; i <= eename.length - 1; i++) {
          eename[i].className = "useressDiv";
        }
        //选择地址，添加class
        ee.className += " newUseressDiv";
        var params = new URLSearchParams();
        params.append("aid", aid);
        params.append("uaccount", sessionStorage.getItem('uaccount'));
        this.$axios.post("/insertAddClass.action", params).then(function (result) {
        }).catch(function (error) {
          alert(error)
        });
      },
      //获取用户的收货地址
      getAddress() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("uaccount", sessionStorage.getItem('uaccount'));
        this.$axios.post("/queryAddByUid.action", params).then(function (result) {
          if (result.data.length < 4) {
            _this.display = 'inline';
          } else {
            _this.display = 'none';
          }
          _this.address = result.data;
        }).catch(function (error) {
          alert(error)
        });
      },
      //显示添加收货地址
      insertAddr() {
        document.getElementById("addressmsg").style.setProperty('display', 'inline')
      },
      //取消添加收货信息
      cancelMsg() {
        this.name = '';
        this.phone = '';
        this.mid = '选择收货地址';
        document.getElementById("addressmsg").style.setProperty('display', 'none')
      },
      //确认提交收货地址
      okMsg() {
        if (this.name == '' || this.phone == '') {
          this.$message({
            message: '信息有误',
            type: 'info'
          });
          return;
        }

        var _this = this;
        var params = new URLSearchParams();
        params.append("uaccount", sessionStorage.getItem('uaccount'));
        params.append("mid", 17);
        params.append("name", this.name);
        params.append("phone", this.phone);
        this.$axios.post("/insertAddress.action", params).then(function (result) {
          _this.$message({
            message: result.data.msg,
            type: result.data.type
          });
          _this.cancelMsg()
          _this.getAddress();
        }).catch(function (error) {
          alert(error)
        });
      },
      //删除一个地址信息
      removeAddr(e, aid) {
        //阻止冒泡事件
        window.event ? window.event.cancelBubble = true : e.stopPropagation();
        this.$confirm('确认删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var _this = this;
          var params = new URLSearchParams();
          params.append("aid", aid);
          this.$axios.post("/removeAddr.action", params).then(function (result) {
            _this.$message({
              message: result.data.msg,
              type: result.data.type
            });
            _this.getAddress();
          }).catch(function (error) {
            alert(error)
          });
        }).catch(() => {
        });
      },
      //加载我的购物车，生成订单表
      getMyGoodsCarData() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("uaccount", sessionStorage.getItem('uaccount'));
        this.$axios.post("/queryGoodsCarByUid.action", params).then(function (result) {
          if (result.data.list == null) {
            _this.$router.push({name: 'indexs'});
            return;
          }
          _this.goodsCar = result.data.list;
          _this.goodsCarSum = result.data.sum
        }).catch(function (error) {
          alert(error)
        });
      },
      //我的优惠卷
      selectyhj() {
        if (this.yhj == 0) {
          this.yhj = '';
        }
      },
      //勾选条框
      checked(e) {
        this.ischecked = e;
      },
      //生成订单号
      createOrder() {
        var vNow = new Date();
        var sNow = "";
        sNow += String(vNow.getFullYear());
        sNow += String(vNow.getMonth() + 1);
        sNow += String(vNow.getDate());
        sNow += String(vNow.getHours());
        sNow += String(vNow.getMinutes());
        sNow += String(vNow.getSeconds());
        sNow += String(vNow.getMilliseconds());
        return sNow;
      },
      //去付款
      goPay() {
        //判断是否勾选
        if (!this.ischecked) {
          this.$message({
            message: '请勾选并同意网站条约',
            type: 'info'
          });
          return;
        }
        //判断是否选择了收货地址
        var eename = document.getElementsByClassName("newUseressDiv");
        if (eename.length < 1) {
          this.$message({
            message: '请选择一个收获地址',
            type: 'info'
          });
          return;
        }
        //再次刷新订单列表
        this.getMyGoodsCarData();
        if (this.goodsCar.length > 0) {

          //测试支付宝支付
          var _this = this
          //添加数据到支付类,生成订单(待付款)-待支付
          var params = new URLSearchParams();
          params.append("uaccount", sessionStorage.getItem('uaccount'));
          params.append("price", this.goodsCarSum);
          params.append("text", this.payText);
          this.$axios.post("/insertDeliverPay.action", params).then(function (result) {
            //添加订单成功,去支付宝扫码付款
            //组装商品信息
            var goodsMsg = "";
            _this.goodsCar.forEach((item, index, ary) => {
              goodsMsg += ",  " + item.gname + "*" + item.count;
            })
            alert(goodsMsg.substr(2));
            if (result.data > 0) {
              location.href = "http://localhost:8080/crmsystem_web/payJsp/alipay.trade.page.pay.jsp?" +
                "WIDout_trade_no=" + _this.createOrder() + "&WIDtotal_amount="+_this.goodsCarSum+"&WIDsubject="+goodsMsg.substring(1)+"&WIDbody="+_this.payText;
            } else {
              //添加订单失败
              _this.$message({
                message: '订单有误,请重试',
                type: 'error'
              });
            }
          }).catch(function (error) {
            alert(error)
          });


          //去支付
          // var _this = this;
          // this.$confirm('是否支付?', '提示', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   type: 'warning'
          // }).then(() => {
          //   var params = new URLSearchParams();
          //   params.append("uaccount", sessionStorage.getItem('uaccount'));
          //   params.append("price", _this.goodsCarSum);
          //   params.append("text", _this.payText);
          //   this.$axios.post("/insertDeliver.action", params).then(function (result) {
          //     _this.$message({
          //       message: result.data.msg,
          //       type: result.data.type
          //     });
          //     _this.getMyGoodsCarData();
          //   }).catch(function (error) {
          //     alert(error)
          //   });
          // }).catch(() => {
          //   _this.$message({
          //     type: 'info',
          //     message: '已取消删除'
          //   });
          // });
        } else {
          this.$message({
            message: '你的商品信息错误，请重新刷新',
            type: 'error'
          });
        }
      }
    },
    components: {
      mian_bottom,
      main_head
    },
    created() {
      this.getAddress();
      this.getMyGoodsCarData();
    }
  }
</script>

<style scoped>
  .removeAddr {
    position: absolute;
    margin: 15px 0px 0px 230px;
    font-size: 22px;
    font-weight: bold;
  }

  .removeAddr:hover {
    cursor: pointer;
    color: red;
  }

  #addressmsg {
    position: absolute;
    width: 230px;
    height: 120px;
    margin-top: -164px;
    border: 2px dashed orangered;
    background: white;
    padding: 20px;
    display: none
  }

  .gooodsPayTable {
    width: 100%;
    border-collapse: collapse;
  }

  .gooodsPayTable tr td {
    width: 20%;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    color: #726D6D;
    font-size: 17px;
    padding: 8px 0px;
  }

  .gooodsPayTable tr:first-child td {
    color: #3e3f5e;
    font-size: 20px;
    font-family: 黑体;
    padding: 8px 0px;
    font-weight: 600;
    border: 0px;
  }

  .addressDiv {
    border: 2px dashed grey;
    height: 160px;
    text-align: center;
    line-height: 155px;
    cursor: pointer;
    font-weight: bold;
    font-size: 50px;
    color: #8d9aa8;
  }

  .addressDiv:hover {
    color: #f55d2c;
    border: 2px dashed #f55d2c;
  }

  .addressH2 {
    color: #726D6D;
    position: absolute;
    font-size: 20px;
    font-family: 新宋体;
    background: #FFFFFF;
    margin-top: -46px;
    padding: 0px 10px
  }

  .useressDiv {
    border: 2px dashed grey;
    height: 160px;
    cursor: pointer;
  }

  .useressDiv:hover {
    border: 2px solid #f55d2c;
  }

  .useressDiv p {
    margin: 13px;
    font-size: 16px;
    color: #3e3f5e;
  }

  .useressDiv p span {
    margin: 8px;
    font-size: 14px;
    color: #726D6D;
  }

  .newUseressDiv {
    border: 2px solid #f55d2c;
    background: #f7f7f7 !important;
  }
</style>
