<!--推荐商品信息-->
<template>
  <div>
    <h1 class="title">为您推荐</h1>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple" style="height: 350px;cursor: default;border-radius: 10px;background: #FFF;border: 1px solid gainsboro;">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple" style="border: 0px;margin: 50px 0px 0px 10px;cursor: default;">
                <el-image src="images/about-1.png"></el-image>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="grid-content bg-purple" style="border: 0px;cursor: default;text-align: left">
                <h2 style="font-size: 22px;font-family: 黑体;">我们为<br>您的家人提供美味的食物！</h2>
                <p class="food_msg">
                  有机食品是通过符合有机农业标准的方法生产的食品。世界各地的标准各不相同，但是有机农业的特色是资源循环。</p><br>
                <i class="el-icon-check"></i>
                <span class="food_word">优质</span><br>
                <i class="el-icon-check"></i>
                <span class="food_word">每天收获</span><br>
                <i class="el-icon-check"></i>
                <span class="food_word">100％有机</span><br>
                <i class="el-icon-check"></i>
                <span class="food_word">交货快</span><br>
                <el-button type="success" class="food_but">查看此类</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="grid-content bg-purple" style="height: 350px;cursor: default;border-radius: 10px;background: #FFF;border: 1px solid gainsboro;">
          <div class="grid-content bg-purple" style="height: 350px;cursor: default">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple" style="border: 0px;margin: 70px 0px 0px 10px;cursor: default;">
                  <el-image src="images/feature-1.jpg"></el-image>
                </div>
              </el-col>

              <el-col :span="12">
                <div class="grid-content bg-purple" style="border: 0px;cursor: default;text-align: left">
                  <h2 style="font-size: 22px;font-family: 黑体;">最<br>适合您的可信赖农场!</h2>
                  <p class="food_msg">
                    人体必需的维生素C的90%、维生素A的60%，蔬菜中还有多种多样的植物化学物质，是人们公认的对健康有效的成分</p><br>
                  <i class="el-icon-check"></i>
                  <span class="food_word">自然</span><br>
                  <i class="el-icon-check"></i>
                  <span class="food_word">有机</span><br>
                  <i class="el-icon-check"></i>
                  <span class="food_word">纯净</span><br>
                  <i class="el-icon-check"></i>
                  <span class="food_word">营养丰富</span><br>
                  <el-button type="success" class="food_but">查看此类</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style>
  .food_but {
    float: right;
    margin-right: 20px;
  }
  .bg-purple:hover {
    cursor: default;
  }
  .food_word {
    font-size: 11px;
    position: absolute;
    margin: 4px 0px 0px 10px;
    font-family: fantasy;
  }
  .el-icon-check {
    font-size: 25px;
    font-weight: bold;
    color: limegreen
  }
  .food_msg {
    font-size: 13px;
    color: #8d9aa8;
    font-weight: 400;
  }
</style>
