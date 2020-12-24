<template>
    <div id="mycenteredituser">
      <el-form >
          <label>账号:</label><el-input readonly="readonly" size="mini"></el-input>
          <label>密码:</label><el-input type="password" size="mini"></el-input>
          <label>姓名:</label><el-input size="mini"></el-input>
          <label>电话号码:</label><el-input size="mini"></el-input>
          <label>家庭地址:</label><br>
          <select v-model="provincecode" @change="getcity"  style="height: 30px;width: 150px">
            <option  v-for="p in sheng"  :value="p.code">{{p.name}}</option>
          </select>
          <select v-model="citycode" @change="getarea" style="height: 30px;width: 150px">
            <option  v-for="c in city"  :value="c.code">{{c.name}}</option>
          </select>
        <select v-model="areacode" style="height: 30px;width: 150px">
          <option  v-for="a in area"  :value="a.code">{{a.name}}</option>
        </select><br>
        <label>详细地址:</label>
          <el-input v-model="useraddress" placeholder="请填写详细的地址"></el-input>

      </el-form>
    </div>
</template>

<script>
    export default {
        name: "mycenteredituser",
      data(){
          return{
            sheng:[],
            city: [],
            area: [],
            provincecode:"",
            citycode:"",
            areacode:""
          }
      },
      methods:{
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
        }
      },
      created() { //钩子函数  vue对象初始化完成后  执行
        this.getprovince();
      },

    }
</script>

<style scoped>

</style>
