<template>
  <div style="padding: 20px 80px;">
    <div style="width: 100%;height: 50px;border-bottom: 1px solid #f5f5f5;line-height: 35px">
      <b style="font-size: 14px;font-weight: 500;color: #3e3f5e;">1800-000-000</b>
      <b style="font-size: 14px;font-weight: 500;color: #3e3f5e;margin-left: 30px;">info@gambosupermarket.com</b>
      <i class="el-icon-s-tools main_bottom_Icon"></i>
      <i class="el-icon-user-solid main_bottom_Icon"></i>
      <i class="el-icon-phone main_bottom_Icon"></i>
      <i class="el-icon-info main_bottom_Icon"></i>
      <i class="el-icon-s-home main_bottom_Icon"></i>
    </div>

    <div style="width: 100%;border-bottom: 1px solid #f5f5f5;">
      <el-row :gutter="35">
        <el-col :span="6">
          <div class="grid-content bg-purple main_bottom_About">
            <el-image src="images/logo.svg" style="width: 140px;height: 50px;"></el-image>
            <h1 style="font-size: 13px;color: darkgrey;font-weight: 500">建立自己的家是关于欲望，幻想。但是任何人都可以做到。</h1>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple main_bottom_About">
            <span style="font-weight: bold">公司</span>
            <p>关于我们</p>
            <p>我们的服务</p>
            <p>客户评论</p>
            <p>联系我们</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple main_bottom_About">
            <span style="font-weight: bold">总部</span>
            <p>达嘉维康有限公司10楼</p>
            <p>1800-000-000@cn.com</p>
            <p>(+86)1800-000-000</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple main_bottom_About">
            <span style="font-weight: bold">新闻订阅</span>
            <p>订阅即可从我们的</p>
            <p>公司获得10％的折扣。</p>
            <div style="margin-top: 15px;">
              <el-input placeholder="输入您的电子邮箱">
                <template slot="append">订阅</template>
              </el-input>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="width: 100%;text-align: center;margin-top: 15px;color: #8d9aa8;font-size: 13px">
      版权2020/12/10 Gambolthemes。保留所有权利
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .main_bottom_Icon {
    float: right;
    margin-left: 20px;
    color: #2b2f4c;
    margin-top: 10px;
  }

  .main_bottom_Icon:hover {
    cursor: pointer;
    color: #f69733;
    margin-top: 6px;
  }

  .main_bottom_About {
    height: 220px;
    cursor: default;
    text-align: left;
    padding-top: 80px;
  }

  .main_bottom_About p {
    font-size: 13px;
    color: darkgrey;
    font-weight: 500
  }
  .main_bottom_About p:hover {
    color: dimgrey;
    cursor: pointer;
  }
</style>
