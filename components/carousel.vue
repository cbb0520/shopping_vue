<!--显示轮播条组件-->
<template>
  <div>

    <el-carousel :interval="4000" type="card" height="320px" width="300px" style="padding-top: 140px;">
      <el-carousel-item v-for="img in imgs" style="box-shadow: 0 0 5px 3px darkgrey;">
        <el-image :src="img" style="width: 100%;height: 100%"></el-image>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgs: ["images/shopping1.png", "images/shopping2.png", "images/shopping3.png",
          "images/shopping4.png", "images/shopping5.png", "images/shopping6.png"],
      };
    },
    methods: {}
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
