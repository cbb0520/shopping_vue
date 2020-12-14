<template >
  <div id="logins">
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
            <h3 id="loginh3">Sgin In</h3>
          </div><br>
          <div>
            <el-form style="text-align:center ">
            <el-input
              prefix-icon="el-icon-user"
              placeholder="请输入账号"
              style="width:450px;"
            ></el-input><br><br>
              <el-input
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
                style="width:450px;"
              ></el-input><br><br>
              <el-button id="loginbtn1"  @click="loginbtn">登录</el-button><br><br>
              <a class="logina1likai" v-on:mouseover="flogina1jinru($event)" v-on:mouseout="flogina1likai($event)">没有账户?现在注册</a>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    name: 'logins',
    data() {
      return {
       url: 'images/logo.svg'
      }
    },
    methods:{
      flogina1jinru($event){
        $event.currentTarget.className="logina1jinru";
      },
      flogina1likai($event){
        $event.currentTarget.className="logina1likai";
      },
      loginbtn(){
        alert("denglu");
        this.$router.push({name:"indexs"})
      }
    }
  }
</script>

<style>
     body{
       background-color: #F5FBEF;
      }

      .demo-image{
        padding-top: 80px;
      }

     .box-card {
        margin-top: 45px;
       height:350px;

     }
    #loginh3{
      text-align: center;
    }
  #loginbtn1{
    background-color: #EF6521;
    width:450px;
    color: white;
  }
     .logina1jinru{
       color: #f55d2c;
       font-size: 15px;
     }
     .logina1likai{
       color: black;
       font-size: 15px;
     }
</style>
