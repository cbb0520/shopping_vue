<template>
  <el-card class="box-card" body-style="border-radius: 4px"  style="width: 900px;height: 470px;background-color: white">
      <br>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>账号:</strong></label>&#12288;&#12288;&#12288;&#12288;&#12288;
      <span>{{myuaccount}}</span>
      <el-divider></el-divider>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>密码:</strong>&#12288;&#12288;&#12288;&#12288;&#12288;
      </label><span>{{myupassword}}</span>
      <el-divider></el-divider>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>姓名:</strong>&#12288;&#12288;&#12288;&#12288;&#12288;
      </label><span>{{myuname}}</span>
      <el-divider></el-divider>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>电话号码:</strong>&#12288;&#12288;&#12288;&#12288;&#12288;
      </label><span>{{myphone}}</span>
      <el-divider></el-divider>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>家庭地址:</strong></label>&#12288;&#12288;&#12288;&#12288;&#12288;
      <span>{{myaddress}}</span>
      <el-divider></el-divider><br>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <el-button type="warning" @click="edituserVisible=true">修改信息</el-button>

      <el-dialog title="修改个人信息" :visible.sync="edituserVisible" width="40%">
        <mycenteredituser ref="mycentereditusers"></mycenteredituser>
        <span slot="footer" class="dialog-footer">
            <el-button @click="edituserVisible = false">取 消</el-button>
            <el-button type="primary" @click="edituserbtn">确 定</el-button>
          </span>
      </el-dialog>
  </el-card>

</template>

<script>
  import Mycenteredituser from "../mycenterElement/mycenteredituser"
    export default {
        name: "mycentermessage",
      data(){
          return{
            edituserVisible:false,
            myuaccount:'',
            myupassword:'',
            myuname:'',
            myphone:'',
            myaddress:''
        }
      },
      methods:{
          getdluser(){
            var _this=this;
            var params=new URLSearchParams();
            params.append("uaccount",sessionStorage.getItem('uaccount'));
              this.$axios.post("queryByuaccount.action",params)
              .then(function (result) {
               _this.myuaccount=result.data.uaccount;
                _this.myupassword=result.data.upassword;
                _this.myuname=result.data.uname;
                _this.myphone=result.data.phone;
                _this.myaddress=result.data.address;

              }).catch(function (error) {
              alert(error);
            });
          },
          edituserbtn(){
             var _this=this;
            _this.$refs.mycentereditusers.editForm.provincecode = _this.$refs.mycentereditusers.provincecode;
            _this.$refs.mycentereditusers.editForm.citycode = _this.$refs.mycentereditusers.citycode;
            _this.$refs.mycentereditusers.editForm.areacode = _this.$refs.mycentereditusers.areacode;
            let formData = new FormData();

            Object.keys(_this.$refs.mycentereditusers.editForm).forEach((key) => {
              formData.append(key, _this.$refs.mycentereditusers.editForm[key]);
            });
            this.$axios({
              method: 'post',
              url: 'updatauser.action',
              data: formData,
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(function (result) {
                _this.$message({
                  message: result.data.msg,
                  type: 'success'
                });
                _this.edituserVisible = false;
                //刷新数据
                _this.getdluser();
              }).catch(function (error) {
              _this.$message({
                message: error,
                type: 'success'
              });
            });
        }
      },
      created() { //钩子函数  vue对象初始化完成后  执行
        this.getdluser();
      },
      components:{
        mycenteredituser:Mycenteredituser
      }

    }
</script>

<style scoped>

</style>
