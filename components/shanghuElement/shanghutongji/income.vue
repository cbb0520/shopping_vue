<template>
    <div>
      <el-form :inline="true"class="demo-form-inline">
        <el-form-item label="年份">
          <el-date-picker
            v-model="year"
            type="year"
            value-format="yyyy"
            placeholder="选择年">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="seleyear">查询</el-button>
        </el-form-item>
      </el-form>
     <div id="main" style="width: 800px;height:500px;"></div>
      <span>年总收入:{{sum}}元</span>
    </div>
</template>
<script>
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/bar');
  require('echarts/lib/chart/pie');
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
    export default {
      name: "market",
      data () {
        return {
          year:'',
          mothed:[],
          price:[],
          indexmid: sessionStorage.getItem('mid'),
          sum:0
        }
      },
      methods: {
        getDataqianwu() { //获取数据方法
          var length = 0;
          var _this = this;
          var sum=0;
          var params = new URLSearchParams();
          params.append("year", this.year);
          params.append("mid", this.indexmid);
          this.$axios.post("/querymonthlyincome.action",params).
          then(function(result) {
            _this.mothed.splice(0, _this.mothed.length)
            _this.price.splice(0, _this.price.length)
            length = result.data.length
            for(var i=0;i<length;i++){
               sum+=result.data[i].total;
              _this.mothed.push(result.data[i].mothen);
              _this.price.push(result.data[i].total);
            }
            var myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            let option = {
              title: {
                text: "一年的收入情况",
              },
              tooltip: {},
              legend: {
                data: [sum]
              },
              xAxis: {
                data:_this.mothed
              },
              yAxis: {},
              series: [
                {
                  name: "营收额",
                  type: "bar",
                  data: _this.price
                }
              ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            _this.sum=sum;
          }).
          catch(function(error) {
            alert(error)
          });
        },
        seleyear(){
          this.getDataqianwu();
        }
      },
      created(){
        this.getDataqianwu();
      }
    }
</script>

<style scoped>

</style>
