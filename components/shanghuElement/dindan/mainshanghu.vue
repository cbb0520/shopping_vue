<template>
    <div>
   <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="darkgrey"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="padding: 10px 0px">
        <el-row :gutter="10">
          <el-col :span="4">
            <el-menu-item index="1" style="text-align: center">
              <el-button circle @click="editmerchantble = true"><img src="../../../images/touxiang.jpg" style="width:40px;height: 40px;"></el-button>
            </el-menu-item>
          </el-col>
          <el-col :span="4">
            <el-submenu index="2">
              <template slot="title">我的优惠信息</template>
              <el-menu-item index="2-1">红包:&nbsp;0</el-menu-item>
              <el-menu-item index="2-2">店铺优惠券:&nbsp;0</el-menu-item>
              <el-menu-item index="2-3">辛选积分:&nbsp;409</el-menu-item>
            </el-submenu>
          </el-col>
          <el-col :span="4">
            <el-menu-item index="3" style="text-align: center">我的店铺</el-menu-item>
          </el-col>
          <el-col :span="4">
            <el-menu-item index="4" style="text-align: center">我的支付宝</el-menu-item>
          </el-col>
        </el-row>
      </el-menu>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="white"
        text-color="black"
        active-text-color="#ffd04b">
        <el-tabs v-model="activeName" @tab-click="handleClick" style="padding: 0px 70px">
          <el-tab-pane label="全部订单" name="first" style="text-align: center;">
            <alldingdan></alldingdan>
          </el-tab-pane>
          <el-tab-pane label="待发货" name="second" style="text-align: center">
            <stayshipments></stayshipments>
          </el-tab-pane>
          <el-tab-pane label="待收货"  style="text-align: center">
            <daishouhuo></daishouhuo>
          </el-tab-pane>
          <el-tab-pane label="待提货" name="third" style="text-align: center">
            <staytihuo></staytihuo>
          </el-tab-pane>
          <el-tab-pane label="已提货" name="fourth" style="text-align: center">
            <alreadyfahuo></alreadyfahuo>
          </el-tab-pane>
        </el-tabs>
      </el-menu>
      <el-dialog title="编辑商户资料" :visible.sync="editmerchantble" width="60%">
        <editmerchant ref="child02"></editmerchant>
        <span slot="footer" class="dialog-footer">
                    <el-button @click="editmerchantble = false">取 消</el-button>
                    <el-button type="primary" @click="editmerchant">确 定</el-button>
            </span>
      </el-dialog>
    </div>
</template>

<script>
  import Editmerchant from "../shanghuweihu/editmerchant"
  import Alldingdan from "../dindan/alldingdan"
  import Stayshipments from "../dindan/stayshipments"
  import Staytihuo from "../dindan/staytihuo"
  import Alreadyfahuo from "../dindan/alreadyfahuo"
  import Daishouhuo from "../dindan/daishouhuo"

    export default {
      data() {
        return {
          activeName: 'second',
          editmerchantble: false
        }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        editmerchant(event) {
          var _this = this;
          /*var params = new URLSearchParams();
          params.append("sname",this.$refs.child02.merchants.sname);
          params.append("mname",this.$refs.child02.merchants.mname);
          params.append("certificate",this.$refs.child02.merchants.certificate);
          params.append("phone",this.$refs.child02.merchants.phone);
          params.append("mtype",this.$refs.child02.merchants.mtype);
          params.append("mimgs",this.$refs.child02.merchants.mimgs);
          params.append("mddress",this.$refs.child02.merchants.mddress);
          params.append("mddress",this.$refs.child02.provincecode);
          params.append("mddress",this.$refs.child02.citycode);
          params.append("mddress",this.$refs.child02.areacode);*/
          _this.$refs.child02.merchants.provincecode = _this.$refs.child02.provincecode;
          _this.$refs.child02.merchants.citycode = _this.$refs.child02.citycode;
          _this.$refs.child02.merchants.areacode = _this.$refs.child02.areacode;
          event.preventDefault();
          let formData = new FormData();
          // formData.append("img",this.addform.img);
          //将需要提交的表单数据 快速组装为H5定义的类型FormData
          Object.keys(_this.$refs.child02.merchants).forEach((key) => {
            formData.append(key, _this.$refs.child02.merchants[key]);
          });
          this.$axios({
            method: 'post',
            url: 'updateMerchants.action',
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (result) {
            _this.$message({
              message: result.data.msg,
              type: 'success'
            });
            _this.editmerchantble = false;
          }).catch(function (error) {
            _this.$message({
              message: '编辑失败',
              type: 'success'
            });
          });
        }
      },
      components: {
        editmerchant: Editmerchant,
        alldingdan: Alldingdan,
        stayshipments: Stayshipments,
        staytihuo: Staytihuo,
        alreadyfahuo: Alreadyfahuo,
        daishouhuo: Daishouhuo
      }
    }
</script>

<style scoped>

</style>

