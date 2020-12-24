<template>
  <div>
    <main_head></main_head>
    <div style="padding: 170px 80px 60px 80px">

      <h2 style="color: #3e3f5e;font-size: 30px;font-family: 新宋体;margin: 0px 0px 50px 0px;">订单支付</h2>

      <div style="border: 1px solid darkgrey;height: 185px;padding: 35px 15px 0px 15px">
        <h2 class="addressH2">选择收获地址</h2>
        <el-row :gutter="20">
          <!--收货地址信息框-->
          <el-col :span="6" v-for="a in address">
            <div class="useressDiv" name="useressDiv" @click="selectAddrss($event)">
              <p>收货人：<span>{{a.name}}</span></p>
              <p>联系电话：<span>{{a.phone}}</span></p>
              <p>收货地址：<span>{{a.merchants.mddress}}</span></p>
            </div>
          </el-col>

          <!--添加收货地址框-->
          <el-col :span="6" :style="'display:' + display">
            <div class="addressDiv">
              <i class="el-icon-plus addressI"></i>
            </div>
          </el-col>
        </el-row>
      </div>

      <div style="border: 1px solid darkgrey;padding: 35px 15px 15px 15px;margin-top: 80px;">
        <h2 class="addressH2">我的订单</h2>
        <table class="gooodsPayTable">
          <tr>
            <td></td>
            <td>产品</td>
            <td>数量</td>
            <td>小计</td>
          </tr>
          <tr>
            <td>
              <el-image src="../images/baicai.jpg" style="width: 100px;height: 100px;"></el-image>
            </td>
            <td>白菜</td>
            <td>1</td>
            <td>16</td>
          </tr>
          <tr style="background: #e6e6e6">
            <td style="padding: 15px 0px;color: #3e3f5e;">
              <el-select v-model="yhj" placeholder="我的优惠卷" @change="selectyhj">
                <el-option label="暂无优惠卷" :value=0></el-option>
              </el-select>
            </td>
            <td></td>
            <td style="padding: 15px 0px;color: #3e3f5e;font-weight: bold;font-size: 18px;font-family: 黑体">总计</td>
            <td style="padding: 15px 0px;color: #3e3f5e;font-weight: bold;font-size: 18px;font-family: 黑体">￥16</td>
          </tr>
        </table>
      </div>

      <div style="border: 1px solid darkgrey;padding: 35px 15px 15px 15px;margin-top: 80px;">
        <h2 class="addressH2">付款</h2>
        <div>
          <p style="color: #8d9aa8">附加信息 (可选)</p>
          <textarea style="min-height: 100px;max-height: 200px;min-width:420px;max-width: 420px;padding: 15px 25px;outline: none;
                          font-size: 16px;border: 1px solid lightgrey;border-radius: 15px;color: grey;font-family: 新宋体"
                    placeholder="有关订单的注释，例如，交货的特殊注释。"></textarea>
        </div>
        <div style="text-align: right;margin-top: -60px">
          <el-button style="background: #f55d2c;color: #FFFFFF" @click="goPay">立即付款</el-button><br>
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
        yhj: '',
        address: [],
        display: 'none',
        ischecked:false
      }
    },
    methods: {
      selectAddrss(e) {
        // 获取绑定事件的DOM元素。
        var ee = e.currentTarget;
        if (ee.className == "useressDiv newUseressDiv") {
          ee.className = "useressDiv";
          return;
        }
        var eename = document.getElementsByName("useressDiv");
        for (var i = 0; i <= eename.length - 1; i++) {
          eename[i].className = "useressDiv";
        }
        ee.className += " newUseressDiv";
      },
      selectyhj() {
        if (this.yhj == 0) {
          this.yhj = '';
        }
      },
      //获取用户的收货地址
      getAddress() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("uaccount", sessionStorage.getItem('uaccount'));
        this.$axios.post("/queryAddByUid.action", params).then(function (result) {
          if (result.data.length < 4) {
            _this.display = 'inline';
          }
          _this.address = result.data;
        }).catch(function (error) {
          alert(error)
        });
      },
      //勾选条框
      checked(e){
        this.ischecked = e;
      },
      //去付款
      goPay(){
        //判断是否勾选
        if(!this.ischecked){
          this.$message({
            message: '请勾选并同意网站条约',
            type: 'info'
          });
          return;
        }
        //判断是否选择了收货地址
        var eename = document.getElementsByClassName("newUseressDiv");
        if(eename.length < 1){
          this.$message({
            message: '请选择一个收获地址',
            type: 'info'
          });
          return;
        }
        //去支付
        this.$message({
          message: '支付',
          type: 'success'
        });
      }
    },
    components: {
      mian_bottom,
      main_head
    },
    created() {
      this.getAddress();
    }
  }
</script>

<style scoped>
  .gooodsPayTable {
    width: 100%;
    border-collapse: collapse;
  }

  .gooodsPayTable tr td {
    width: 25%;
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
