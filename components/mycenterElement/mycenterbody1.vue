<template>
    <div id="mycenterbody1"
         class="mycenterbody1div1">
      <div style="width: 100%;text-align: center;padding-top: 30px">
        <el-avatar style="width: 90px;height: 90px" src="images/img-5.jpg"></el-avatar>
      </div>
      <div style="width: 100%;text-align: center">
        <el-tooltip effect="light" content="修改头像" placement="bottom">
          <el-button type="warning" size="mini" icon="el-icon-plus" circle></el-button>
        </el-tooltip>
        <h4>{{indexuaccount2}}</h4>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mycenterbody1",
      data(){
          return{
            indexuaccount2:sessionStorage.getItem('uaccount')
          }
      }
    }
</script>

<style scoped>
  .mycenterbody1div1{
    position: absolute;
    padding-top: 80px;
    width: 100%;
    height: 270px;
    background: url("../../images/mycenter5.jpg");
    background-size: cover;

  }
</style>
