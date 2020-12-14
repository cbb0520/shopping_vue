<template >
  <div id="index">
    <el-row>
      <el-col span="4" push="10">
        <div class="demo-image">
                   <el-image style="width: 150px; height: 52px"
                     :src="url">
                   </el-image>
               </div>
      </el-col>
     </el-row>
      <el-row>
      <el-col span="9" push="7">
        <el-card class="box-card"  shadow="never">
          <div>
            <h3 id="zhucheh3">Sgin Up</h3>
          </div><br>
          <div>
            <el-form style="text-align:center ">
            <el-input
              prefix-icon="el-icon-mobile-phone"
              placeholder="请输入电话号码"
              style="width:450px;"
            ></el-input><br><br>
              <el-input
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
                style="width:450px;"
              ></el-input><br><br>
              <el-input
                prefix-icon="el-icon-lock"
                placeholder="确认密码"
                style="width:450px;"
              ></el-input><br><br>
              <el-button id="zhuchebtn1" >注册</el-button><br><br>
              <a class="zhucea1likai" v-on:mouseover="fzhuchea1jinru($event)" v-on:mouseout="fzhuchea1likai($event)">已有账户?现在登录</a>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    name: 'index',
    data() {
      return {
       url: 'images/logo.svg'
      }
    },
    methods:{
      fzhuchea1jinru($event){
        $event.currentTarget.className="zhucea1jinru";
      },
      fzhuchea1likai($event){
        $event.currentTarget.className="zhucea1likai";
      }
    }
  }
</script>

<style>
  .zhucea1jinru{
    color: #f55d2c;
    font-size: 15px;
  }
  .zhucea1likai{
    color: black;
    font-size: 15px;
  }
     body{
       background-color: #F5FBEF;
      }

      .demo-image{
        padding-top: 80px;
      }

     .box-card {
        margin-top: 45px;
       height:400px;

     }
    #zhucheh3{
      text-align: center;
    }
  #zhuchebtn1{
    background-color: #EF6521;
    width:450px;
    color: white;
  }
</style>
