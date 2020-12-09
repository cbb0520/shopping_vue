<!--主页分类商品信息-->
<template>
  <div style="margin-top: 60px;">
    <h1 class="title">目录分类</h1>
    <el-row :gutter="35">
      <el-col :span="4" v-for="d in data">
        <div class="grid-content bg-purple xxx">
          <el-image :src="d.img" style="width: 100px;height: 60px;margin-top: 20px"></el-image>
          <p style="font-size: 14px;font-weight: 500;color: #2b2f4c;margin-top: 7px">{{d.msg}}</p>
        </div>
      </el-col>
    </el-row>
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
        ]
      };
    },
    methods: {}
  }
</script>

<style>
  .grid-content {
    border-radius: 10px;
    min-height: 36px;
    text-align: center
  }

  .bg-purple {
    background: #FFF;
    height: 120px;
    border: 1px solid gainsboro;
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
</style>
