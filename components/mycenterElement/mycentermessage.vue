<template>
    <div id="mycentermessage" style="width: 900px;height:470px;background-color: white">
      <br>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>账号:</strong></label>
      <el-divider></el-divider>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>密码:</strong></label>
      <el-divider></el-divider>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>姓名:</strong></label>
      <el-divider></el-divider>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>电话号码:</strong></label>
      <el-divider></el-divider>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <label><strong>家庭地址:</strong></label>
      <el-divider></el-divider><br>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
      <el-button type="warning" @click="edituserVisible=true">修改信息</el-button>

      <el-dialog title="修改个人信息" :visible.sync="edituserVisible" width="50%">
        <mycenteredituser></mycenteredituser>
        <span slot="footer" class="dialog-footer">
            <el-button @click="edituserVisible = false">取 消</el-button>
            <el-button type="primary">确 定</el-button>
          </span>
      </el-dialog>
    </div>

</template>

<script>
  import Mycenteredituser from "../mycenterElement/mycenteredituser"
    export default {
        name: "mycentermessage",
      data(){
          return{
            edituserVisible:false
        }
      },
      components:{
        mycenteredituser:Mycenteredituser
      }
    }
</script>

<style scoped>

</style>
