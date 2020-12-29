<template>
  <div id="mycentertab1" style="margin-top: 5px;">
    <!--收货地址-->
    <div style="border: 2px solid grey;padding: 40px 25px 10px 25px;width: 90%;">
      <h2 class="addressH2">选择收获地址</h2>
      <el-row :gutter="40">
        <!--收货地址信息框-->
        <el-col :span="12" v-for="a in address">
          <div :class="'useressDiv '+a.isselect" name="useressDiv" @click="selectAddrss($event,a.aid,a.merchants.mid)">
            <i class="el-icon-close removeAddr" @click="removeAddr($event,a.aid)"></i>
            <p>收货人：<span>{{a.name}}</span></p>
            <p>联系电话：<span>{{a.phone}}</span></p>
            <p>收货地址：<span>{{a.merchants.mddress}}</span></p>
          </div>
        </el-col>

        <!--添加收货地址框-->
        <el-col :span="12" :style="'display:' + display">
          <div class="addressDiv" @click="insertAddr">
            <i class="el-icon-plus addressI"></i>
          </div>
          <!--输入收货信息-->
          <div id="addressmsg">
            <el-form size="mini" class="demo-form-inline">
              <el-form-item>
                <el-select placeholder="选择收货地址" v-model="mid" style="width: 100%;">
                  <el-option v-for="m in merchantsData" :label="m.mddress" :value="m.mid"></el-option>
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
  </div>
</template>

<script>
  export default {
    name: "mycentertab1",
    data(){
      return{
        address: [],  //地址集合
        display: 'none',  //是否显示添加地址信息
        name: '',  //添加姓名
        phone: '', //添加电话
        mid: '', //商户id
        merchantsData:[], //商户数据
      }
    },
    methods:{
      //获取所有商户数据
      getMerchantsData(){
        var _this = this;
        var params = new URLSearchParams();
        params.append("rows", 99);
        this.$axios.post("/queryCountMerchants.action", params).then(function (result) {
          _this.merchantsData = result.data.rows;
        }).catch(function (error) {
          alert(error)
        });
      },
      //点击收货地址执行方法
      selectAddrss(e, aid,mid) {
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
        params.append("mid", mid);
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
        this.mid = '';
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
        params.append("mid", this.mid);
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
    },
    created() {
      this.getMerchantsData();
      this.getAddress();
    }
  }
</script>

<style scoped>
  .addressH2 {
    color: #726D6D;
    position: absolute;
    font-size: 20px;
    font-family: 新宋体;
    background: #f7f7f7 !important;
    margin-top: -46px;
    padding: 0px 10px
  }

  .removeAddr {
    position: absolute;
    margin: 15px 0px 0px 370px;
    font-size: 22px;
    font-weight: bold;
  }

  .removeAddr:hover {
    cursor: pointer;
    color: red;
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

  #addressmsg {
    position: absolute;
    width: 370px;
    height: 120px;
    margin-top: -164px;
    border: 2px dashed orangered;
    background: white;
    padding: 20px;
    display: none
  }

  .useressDiv {
    border: 2px dashed grey;
    height: 160px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .useressDiv:hover {
    border: 2px solid #f55d2c;
  }

  .useressDiv p {
    margin: 16px;
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
