<template>
  <div style="margin: 100px 0px">
    <div style="width: 100%;text-align: center">
      <h1 style="font-weight: 800;font-family: 新宋体">生活小常识</h1>
      <b style="font-size: 15px;color: #8d9aa8;font-weight: 400;">有机食品是通过符合<br>有机农业标准的方法生产的食品。全球标准各不相同。</b>
    </div>
    <el-row :gutter="40" style="margin-top: 30px;">
      <el-col :span="8">
        <div class="grid-content bg-purple main_foot_div" style="border: 1px solid #e6e6e6">
          <el-image style="width: 100%;height: 60%;;border-top-left-radius: 10px;border-top-right-radius: 10px"
                    src="images/post-1.jpg"></el-image>
          <div style="height: 40%;padding: 5px 25px;font-weight: bold">
            <h3 style="font-family: '微軟正黑體 Light'">如何挑选美味橘子。</h3>
            <b style="font-size: 15px;color: #8d9aa8;font-weight: 500;font-family: '微軟正黑體 Light'">
              需求之间的动态变化首先是建筑的发展，这意味着可以利用建筑材料的服务人员技能。</b>
            <h1 class="mian_foot_more">阅读更多</h1>
          </div>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="grid-content bg-purple main_foot_div" style="border: 1px solid #e6e6e6">
          <el-image style="width: 100%;height: 60%;;border-top-left-radius: 10px;border-top-right-radius: 10px"
                    src="images/post-2.jpg"></el-image>
          <div style="height: 40%;padding: 5px 25px;font-weight: bold">
            <h3 style="font-family: '微軟正黑體 Light'">怎么制作健康白萝卜。</h3>
            <b style="font-size: 15px;color: #8d9aa8;font-weight: 500;font-family: '微軟正黑體 Light'">
              需求之间的动态变化首先是建筑的发展，这意味着可以利用建筑材料的服务人员技能。</b>
            <h1 class="mian_foot_more">阅读更多</h1>
          </div>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="grid-content bg-purple main_foot_div" style="border: 1px solid #e6e6e6">
          <el-image style="width: 100%;height: 60%;;border-top-left-radius: 10px;border-top-right-radius: 10px"
                    src="images/post-3.jpg"></el-image>
          <div style="height: 40%;padding: 5px 25px;font-weight: bold">
            <h3 style="font-family: '微軟正黑體 Light'">判断胡萝卜是否健康。</h3>
            <b style="font-size: 15px;color: #8d9aa8;font-weight: 500;font-family: '微軟正黑體 Light'">
              需求之间的动态变化首先是建筑的发展，这意味着可以利用建筑材料的服务人员技能。</b>
            <h1 class="mian_foot_more">阅读更多</h1>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .main_foot_div {
    height: 400px;
    border-radius: 10px;
    background: #FFFFFF;
    cursor: default;
  }

  .mian_foot_more {
    color: darkgrey;
    font-size: 12px;
    font-weight: 600;
    float: right;
    margin-top: 30px;
  }
  .mian_foot_more:hover {
    color: #f69733;
    cursor: pointer;
  }
</style>
