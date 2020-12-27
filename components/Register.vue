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
            <el-form style="text-align:center " :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
              <el-form-item prop="uname">
              <el-input prefix-icon="el-icon-s-check"
                        placeholder="请输入真实姓名"
                        style="width:450px;"
                        v-model="ruleForm.uname"></el-input>
            </el-form-item>
              <el-form-item prop="phone">
              <el-input prefix-icon="el-icon-mobile-phone"
                        placeholder="请输入电话号码"
                        style="width:450px;"
                        v-model.number="ruleForm.phone"></el-input>
            </el-form-item>
              <el-form-item prop="pass">
                <el-input type="password" prefix-icon="el-icon-lock"
                          placeholder="请输入密码"
                          style="width:450px;"
                          v-model="ruleForm.pass"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input type="password"  prefix-icon="el-icon-lock"
                          placeholder="确认密码"
                          style="width:450px;"
                          v-model="ruleForm.checkPass"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-button id="zhuchebtn1" @click="registerbtn">注册</el-button><br><br>
              <a class="zhucea1likai" v-on:mouseover="fzhuchea1jinru($event)" v-on:mouseout="fzhuchea1likai($event)" @click="registerdlbtn">已有账户?现在登录</a>
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      var checkUname = (rule, value, callback) => {
        if (!value){
          return callback(new Error('不能为空'));
        }else{
          const reg = /^[\u0391-\uFFE5A-Za-z]+$/;
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入中文或字母'));
          }
        }
      };
      return {
        url: 'images/logo.svg',
        ruleForm: {
          uname:'',
          phone:'',
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [
            { required: true, message: '请设置登录密码', trigger: 'blur' },
            { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          uname: [
            {validator: checkUname, trigger: 'blur'},
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          phone: [
            {validator: checkPhone, trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      fzhuchea1jinru($event){
        $event.currentTarget.className="zhucea1jinru";
      },
      fzhuchea1likai($event){
        $event.currentTarget.className="zhucea1likai";
      },
      registerdlbtn(){
        this.$router.push("/login");
      },
      registerbtn(){
        var _this=this;
        this.$axios.get("registerUser.action", {params: {upassword:_this.ruleForm.pass,uname: _this.ruleForm.uname, phone: _this.ruleForm.phone}})
          .then(function (result) {
            if (result.data.code == "0") {
              //注册成功  跳转 首页
              _this.$message({
                message:result.data.msg,
                type:'success'
              });
              //将注册成功的用户名存入store中
              sessionStorage.setItem("uaccount", result.data.uaccount);
              sessionStorage.setItem("uimg", 'img-5.jpg');
              _this.$router.push("/index");
            } else {
              //弹出消息  停留在该页面
              _this.$message.error(result.data.msg);
            }
          }).catch(function (error) {
          console.log(error)
        });
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
       height:450px;

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
