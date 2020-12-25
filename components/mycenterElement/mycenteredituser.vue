<template>
    <div id="mycenteredituser">
      <el-form style="text-align:center " :model="editForm" status-icon :rules="rules" ref="editForm">
        <el-form-item prop="uaccount">
          <label>账号:</label>&#12288;
          <el-input style="width:400px;"
                    v-model="editForm.uaccount"
                    readonly="readonly"></el-input>
        </el-form-item>
        <el-form-item prop="upassword">
          <label>密码:</label>&#12288;
          <el-input style="width:400px;"
                    v-model="editForm.upassword"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="uname">
          <label>姓名:</label>&#12288;
          <el-input style="width:400px;"
                    v-model="editForm.uname"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
            <label>电话号码:</label>
          <el-input style="width:400px;"
                    v-model.number="editForm.phone"></el-input>
        </el-form-item>
        <label>家庭地址:</label>
        <el-form-item>
        <select v-model="provincecode" @change="getcity"  style="height: 30px;width: 150px">
          <option  v-for="p in sheng"  :value="p.code">{{p.name}}</option>
        </select>
          <select v-model="citycode" @change="getarea" style="height: 30px;width: 150px">
            <option  v-for="c in city"  :value="c.code">{{c.name}}</option>
          </select>
          <select v-model="areacode" style="height: 30px;width: 150px">
            <option  v-for="a in area"  :value="a.code">{{a.name}}</option>
          </select>
        </el-form-item>
        <label>详细地址:</label>
        <el-input v-model="editForm.address" placeholder="请填写详细的地址"></el-input>

      </el-form>
    </div>
</template>

<script>
    export default {
        name: "mycenteredituser",
      data(){
        var checkPhone2 = (rule, value, callback) => {
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
        var checkUname2 = (rule, value, callback) => {
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
          return{
            sheng:[],
            city: [],
            area: [],
            provincecode:'',
            citycode:'',
            areacode:'',
            editForm: {
              uaccount:'',
              upassword: '',
              uname:'',
              phone:'',
              provincecode:'',
              citycode:'',
              areacode:'',
              address:''
            },
            rules: {
              upassword: [
                { required: true, message: '请设置登录密码', trigger: 'blur' },
                { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
              ],
              uname: [
                {validator: checkUname2, trigger: 'blur'},
                { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
              ],
              phone: [
                {validator: checkPhone2, trigger: 'blur'}
              ]
            }
          }

      },
      methods:{
        getdluser2(){
          var _this=this;
          var params=new URLSearchParams();
          params.append("uaccount",sessionStorage.getItem('uaccount'));
          this.$axios.post("queryByuaccount.action",params)
            .then(function (result) {
              _this.editForm.uaccount=result.data.uaccount;
              _this.editForm.upassword=result.data.upassword;
              _this.editForm.uname=result.data.uname;
              _this.editForm.phone=result.data.phone;
              var str = result.data.address.split("/");
              _this.editForm.useraddress = str[0];
              _this.method_sheng(str[0])
              _this.method_shi(str[1])
              _this.method_qu(str[1],str[2])
              _this.editForm.address = str[3];

            }).catch(function (error) {
            alert(error);
          });
        },
        method_sheng(sheng) {
          var _this = this;
          var params = new URLSearchParams();
          params.append("name", sheng)
          this.$axios.post("/queryProvinceName.action", params)
            .then(function (result) {
              _this.getcity2(result.data.code);
              _this.provincecode= result.data.code;
            })
            .catch(function (error) {
              //异步如果出现错误  触发catch里面的函数
              alert(error);
            });
        },
        method_shi(shi) {
          var _this = this;
          var params = new URLSearchParams();
          params.append("name", shi)
          this.$axios.post("/queryCityName.action", params)
            .then(function (result) {
              _this.getarea2(result.data.code);
              _this.citycode = result.data.code;
            })
            .catch(function (error) {
              //异步如果出现错误  触发catch里面的函数
              alert(error);
            });
        },
        method_qu(shi,qu) {
          var _this = this;
          var params = new URLSearchParams();
          params.append("name", qu);
          params.append("cityname", shi)
          this.$axios.post("/queryAreabynamecitycode.action",params)
            .then(function (result) {
              _this.areacode = result.data.code;
            })
            .catch(function (error) {
              //异步如果出现错误  触发catch里面的函数
              alert(error);
            });
        },
        getprovince: function () {
          //将this对象保存到一个临时变量中 (临时变量 指向 vue对象)
          var _this = this;
          //异步获取数据
          this.$axios.get("/queryAllProvince.action")
            .then(function (result) {
              //异步成功，执行then里面的函数
              //result  结果  很多的响应信息
              //获取后端传递的json数据  result.data
              _this.sheng = result.data;
            })
            .catch(function (error) {
              //异步如果出现错误  触发catch里面的函数
              alert(error);
            });
        },
        getcity: function () {
          var _this = this;
          //异步获取数据
          this.$axios.get("/queryCity.action", {params:{provincecode:_this.provincecode}})
            .then(function (result) {
              _this.city = result.data;
            })
            .catch(function (error) {
              //异步如果出现错误  触发catch里面的函数
              alert(error);
            });
        },
        getcity2: function (sheng) {
          var _this = this;
          var params=new URLSearchParams();
          params.append("provincecode",sheng)
          //异步获取数据
          this.$axios.post("/queryCity.action", params)
            .then(function (result) {
              //异步成功，执行then里面的函数
              //result  结果  很多的响应信息
              //获取后端传递的json数据  result.data
              _this.city = result.data;
            })
            .catch(function (error) {
              //异步如果出现错误  触发catch里面的函数
              alert(error);
            });
        },
        getarea: function () {
          var _this = this;
          //异步获取数据
          this.$axios.get("/queryArea.action", {params:{citycode:_this.citycode}})
            .then(function (result) {

              //异步成功，执行then里面的函数
              //result  结果  很多的响应信息
              //获取后端传递的json数据  result.data
              _this.area = result.data;
            })
            .catch(function (error) {
              //异步如果出现错误  触发catch里面的函数
              alert(error);
            });
        },
        getarea2: function (shi) {
          var _this = this;
          var params=new URLSearchParams();
          params.append("citycode",shi)
          //异步获取数据
          this.$axios.post("/queryArea.action", params)
            .then(function (result) {
              //异步成功，执行then里面的函数
              //result  结果  很多的响应信息
              //获取后端传递的json数据  result.data
              _this.area = result.data;
            })
            .catch(function (error) {
              //异步如果出现错误  触发catch里面的函数
              alert(error);
            });
        }
      },
      created() { //钩子函数  vue对象初始化完成后  执行
        this.getprovince();
        this.getdluser2();
      },

    }
</script>

<style scoped>

</style>
