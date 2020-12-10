<!--主页分类商品信息-->
<template>
  <div style="margin-top: 60px;">
    <h1 class="title">目录分类</h1>
    <el-row :gutter="35">
      <el-col :span="4" v-for="d in data">
        <div class="grid-content bg-purple"
             style="border-radius: 10px;background: #FFF;border: 1px solid gainsboro;text-align: center">
          <el-image :src="d.img" style="width: 100px;height: 60px;margin-top: 20px"></el-image>
          <p style="font-size: 14px;font-weight: 500;color: #2b2f4c;margin-top: 7px">{{d.msg}}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="30" style="margin-top: 50px">
      <el-col :span="6" v-for="i in 12">
        <div class="grid-content bg-purple" style="height: 350px;background-color: #FFFFFF;border-radius: 10px;
        cursor: default;margin-bottom: 40px;border: 1px solid gainsboro;text-align: center;">
          <i class="el-icon-star-off main_body_foodIcon"></i>
          <el-image src="images/baicai.jpg" class="main_body_commodityImg"></el-image>
          <!--<el-image class="main_body_commodityImg" src="images/baicai.jpg"></el-image>-->
          <h3 style="margin: 5px">白菜</h3>
          <p style="font-size: 15px;margin: 5px;color: gray;">蔬菜类</p>
          <h3 style="font-family: 黑体;margin: 11px;color: #f69733;font-weight: bold">$ 4.6</h3>
          <el-input-number size="mini" v-model="num" :min=0 :max=99 style="width: 90px;"></el-input-number>
          <i class="el-icon-shopping-cart-2 main_body_gwcBtn"></i>
        </div>
      </el-col>
    </el-row>
    <div style="width: 100%;text-align: center">
      <el-pagination layout="prev, pager, next" :total="1000" background></el-pagination>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {img: "images/lingshi.svg", msg: "零食类"},
          {img: "images/mianlei.svg", msg: "面类"},
          {img: "images/roulei.svg", msg: "肉类"},
          {img: "images/shucai.svg", msg: "蔬菜类"},
          {img: "images/yinliao.svg", msg: "饮料类"},
          {img: "images/zahuo-2.svg", msg: "杂货贺主食"}
        ],
        num: 1
      };
    },
    methods: {}
  }
</script>

<style>
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    background-color: #FFFFFF;
    border-radius: 50%;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #f69733;
    color: #FFF;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #f69733;
  }

  .main_body_gwcBtn {
    margin-left: 110px;
    font-size: 20px;
    font-weight: bold;
    color: #8d9aa8;
  }

  .main_body_gwcBtn:hover {
    color: #f69733;
    cursor: pointer;
  }

  .main_body_foodIcon {
    position: absolute;
    margin: 8px 0px 0px 180px;
    background: rgba(246, 151, 51, 0.2);
    color: #f69733;
    border-radius: 50%;
    padding: 8px;
    font-size: 20px;
    font-weight: 600;
    z-index: 99;
  }

  .main_body_foodIcon:hover {
    cursor: pointer;
    color: #FFFFFF;
    background: #f69733;
  }

  .bg-purple:hover {
    cursor: pointer;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    color: #2b2f4c;
    font-family: '等线 Light';
    width: 100%;
    border-bottom: 2px solid gainsboro;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }

  .main_body_commodityImg {
    transition: all 0.5s; /*鼠标经过图片放大*/
    cursor: pointer;
    height: 55%;
    width: 70%;
    margin-top: 15px;
  }

  .main_body_commodityImg:hover {
    transform: scale(1.1); /*动画效果放慢*/
  }
</style>
