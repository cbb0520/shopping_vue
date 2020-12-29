<template>
    <div id="mycenterbody1"
         class="mycenterbody1div1">
      <div style="width: 100%;text-align: center;padding-top: 30px">
        <el-avatar style="width: 90px;height: 90px" :src="myuimg"></el-avatar>
      </div>
      <div style="width: 100%;text-align: center">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
        >
          <el-tooltip effect="light" content="修改头像" placement="bottom">
            <el-button type="warning" size="mini" icon="el-icon-plus" circle></el-button>
          </el-tooltip>
        </el-upload>
        <h4>{{indexuaccount2}}</h4>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mycenterbody1",
      data(){
          return{
            indexuaccount2:sessionStorage.getItem('uaccount'),
            myuimg:'http://localhost:8081/src/assets/'+sessionStorage.getItem('uimg'),
            addform:{
              uaccount:sessionStorage.getItem('uaccount'),
              img:''
            }
          }
      },
      methods:{
        beforeAvatarUpload(file) {
          this.addform.img = file;
          var _this =this;

          //阻止元素发生默认的行为
         /* file.preventDefault();*/
          let  formData = new FormData();
          // formData.append("img",this.addform.img);
          //将需要提交的表单数据 快速组装为H5定义的类型FormData
          Object.keys(_this.addform).forEach((key) => {
            formData.append(key, _this.addform[key]);
          });

          //此处使用原生的axios，因为文件提交 要设置 类型Content-Type=multipart/form-data，切记，需要post提交
          //此处axios原生类似于 jquery的 原生  $.ajax 和 $.get  $.post
          this.$axios({
            method: 'post',
            url: 'uplodauimgByuaccount.action',
            data:formData,
            headers: {
              'Content-Type':'multipart/form-data'
            }
          })
            .then(function (response) {
              if (response.data.code=='1'){
             /*   alert('修改成功');*/
                sessionStorage.removeItem("uimg");
                _this.myuimg='http://localhost:8081/src/assets/'+file.name;
                sessionStorage.setItem("uimg", file.name);
                _this.$parent.$refs.mainHead.getUserData();
              }else {
                alert("修改失败");
              }

            })
            .catch(function (error) {
              alert(error);
            });
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
