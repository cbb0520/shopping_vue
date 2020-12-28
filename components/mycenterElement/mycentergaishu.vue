<template>
    <div id="mycentergaishu"  style="width: 900px;height:470px;background-color: #F7F9F9">
      <h3>Hello!{{dlzhanghao}}</h3>
      <el-row :gutter="20">
        <el-col :span="11"><div class="grid-content bg-purple">
          <el-card class="box-card" style="height: 250px;">
            <div slot="header" class="clearfix">
              <span>我的奖励</span>
            </div>
            <div class="text item">
              <span style="font-size: 25px">奖励</span><br><br>
              <el-button size="small " style="background-color: #F75211;color: white;width: 87px;height: 30px">赢2元</el-button>
              <el-button size="small " style="background-color: #F75211;color: white;width: 87px;height: 30px">满20减5</el-button>
              <el-button size="small " style="background-color: #F75211;color: white;width: 87px;height: 30px">免费</el-button>
              <a>更多优惠</a>
              <el-divider></el-divider>
              <a>奖励和细节 >></a>
            </div>
          </el-card>
        </div></el-col>
        <el-col :span="11"><div>
          <el-card class="box-card" style="height: 250px;">
            <div slot="header" class="clearfix">
              <span>我的订单</span>
            </div>
            <div class="text item">
              <span style="font-size: 25px">最近购买</span><br><br>
              <span><strong>2件</strong></span>&#12288;&#12288;&#12288;&#12288;
              <span style="color: #F75211"><strong>在路上</strong></span>&#12288;&#12288;&#12288;&#12288;
              <span><strong>$22</strong></span>
              <el-divider></el-divider>
              <a>更多订单 >></a>
            </div>
          </el-card>
        </div></el-col>
        <el-col :span="22"><div><br>
          <el-card class="box-card" style="height: 250px;">
            <div slot="header" class="clearfix">
              <span>我的钱包</span>
            </div>
            <div class="text item">
              <span style="font-size: 25px">贷款500元</span><br><br>
              <i class="el-icon-mobile"></i><span>支付方式</span>&#12288;&#12288;&#12288;&#12288;&#12288;
              <i class="el-icon-coin"></i><span>积分支付</span>&#12288;&#12288;&#12288;&#12288;&#12288;
              <i class="el-icon-present"></i><span>赢代金券</span>
              <el-divider></el-divider>
              <a>奖励和细节 >></a>
            </div>
          </el-card>
        </div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "mycentergaishu",
      data(){
          return{
            dlzhanghao:sessionStorage.getItem('uaccount'),
          }
      }
    }
</script>

<style scoped>

   .bg-purple {
     background: white;
     height: 250px;
   }
</style>
