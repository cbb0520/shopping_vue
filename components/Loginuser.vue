<template >
  <div id="logins">
    <el-row>
      <el-col span="4" push="10">
        <div class="demo-image">
                   <el-image style="width: 150px; height: 52px;cursor: pointer"
                     :src="url" @click="goIndex">
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
              style="width:450px;" v-model="uaccount"
            ></el-input><br><br>
              <el-input type="password"
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
                style="width:450px;" v-model="upassword"
              ></el-input><br><br>
              <el-button id="loginbtn1"  @click="loginbtn">登录</el-button><br><br>
              <a class="logina1likai" v-on:mouseover="flogina1jinru($event)" v-on:mouseout="flogina1likai($event)" @click="loginzcbtn">没有账户?现在注册</a>
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
        url: 'images/logo.svg',
        uaccount:'',
        upassword:''
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
        var _this=this;
        if (this.uaccount=='' || this.upassword==''){
          this.$message({
            message: '账号或密码不能为空',
            type: 'warning'
          });
        }else {
          var params=new URLSearchParams();
          params.append("uaccount",_this.uaccount);
          params.append("upassword",_this.upassword);
          this.$axios.post("loginUser.action",params)
            .then(function (result) {
              if (result.data.code == "0") {
                //登录成功  跳转 首页
              _this.$message({
                  message:result.data.msg,
                  type:'success'
                });
                //将登录成功的用户名存入store中
                sessionStorage.setItem("uaccount", result.data.uaccount);
                sessionStorage.setItem("uid", result.data.uid);
                sessionStorage.setItem("uimg", result.data.uimg);
                _this.$router.push("/index");
              } else {
                //弹出消息  停留在该页面
                _this.$message.error(result.data.msg);
              }
            }).catch(function (error) {
            alert(error);
            console.log(error)
          });
        }

      },
      goIndex() {
        this.$router.push({name: 'indexs'});
      },
      loginzcbtn(){
        this.$router.push("/register");
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
