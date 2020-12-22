<template>
  <div style="">
    <main_head></main_head>
    <div style="height: 650px;background-color: #f7f7f7!important;padding: 170px 80px 60px 80px">
      <div style="width: 100%;height: 100%;background: #FFFFFF">
        <el-row :gutter="20">
          <el-col :span="9">
            <div style="padding: 25px">
              <el-image src="./images/baicai.jpg"></el-image>
            </div>
          </el-col>
          <el-col :span="15">
            <div style="padding: 25px">
              <h2 style="font-size: 24px;font-weight: 700;text-align: left;color: #2b2f4c;">白菜</h2>
              <div>
                <b style="font-size: 14px;font-weight: 500;color: #2b2f4c;">产品编号<span
                  style="color: #8f91ac;margin-left: 8px">10001</span></b>
                <b style="font-size: 14px;font-weight: 500;color: #2b2f4c;margin-left: 30px">库存<span
                  style="color: #8f91ac;margin-left: 8px;">300</span></b>
              </div>
              <div style="margin: 20px 0px">
                <el-button size="mini" plain type="info">500克</el-button>
                <el-button size="mini" plain type="info">1斤</el-button>
                <el-button size="mini" plain type="info">2斤</el-button>
                <el-button size="mini" plain type="info">3斤</el-button>
              </div>
              <div
                style="color: #3e3f5e;font-weight: 400;font-size: 14px;line-height: 30px;padding-right: 40px;height: 125px">
                Lorem ipsum dolor坐下来，保持自如。Nullam臭名昭著，在blandit临时的purus，nulla felis dictum eros，sed volutpat dioo
                sapien id lectus。Cras mollis massa ac congue posuere。Fusce viverra mauris vel magna优质aliquet。Nunc
                Tincidunt,前女星sénerisqueneque mauris sed。uera mauris vel magna优质aliquet。Nunc
                Tincidunt,前女星sénerisqueneque mauris sed。ue
              </div>
              <div style="background: #f7f7f7!important;height: 130px;border-radius: 10px;padding: 16px">
                <p style="color: #7c72ff;font-size: 18px;font-weight: 500;margin: 0px 10px 15px 0px">
                  价格:<span style="color: #8f91ac;font-size: 18px;font-weight: 400;">￥46</span>
                </p>
                <el-input-number :value="count" :min=1 size="mini"
                                 style="width: 90px;margin-bottom: 20px"></el-input-number>
                <i class="el-icon-star-off main_body_foodIcon" style="margin: -5px 0px 0px 15px"></i><br>
                <el-button style="background: #f55d2c;color: #FFFFFF">
                  <i class="el-icon-shopping-cart-full" style="margin-right: 5px"></i>
                  添加到购物车
                </el-button>
                <el-button class="gobuy" style="">现在下单</el-button>
              </div>
              <div style="margin-top: 30px">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <div style="border-radius: 10px;height: 120px;background: #f7f7f7!important;line-height: 25px">
                      <i class="el-icon-medal-1"
                         style="color: #f55d2c;font-size: 35px;position: absolute;margin: 40px 0px 0px 20px"></i>
                      <div style="padding:20px 10px 10px 80px">
                        <div style="font-size: 16px;font-weight: 500;color: #2b2f4c">最低价格保证</div>
                        <dvi style="font-size: 14px;font-weight: 400;color: #3e3f5e;">如果发现其他任何地方都便宜，可以退还差价。</dvi>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div style="border-radius: 10px;height: 120px;background: #f7f7f7!important;line-height: 25px">
                      <i class="el-icon-position"
                         style="color: #f55d2c;font-size: 35px;position: absolute;margin: 40px 0px 0px 20px"></i>
                      <div style="padding:30px 10px 10px 80px">
                        <div style="font-size: 16px;font-weight: 500;color: #2b2f4c">轻松退货和退款</div>
                        <dvi style="font-size: 14px;font-weight: 400;color: #3e3f5e;">在门口退货并在几秒钟内获得退款。</dvi>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <mian_bottom></mian_bottom>
  </div>
</template>

<script>
  import main_head from "./indexElement/main_head";
  import mian_bottom from "./indexElement/mian_bottom";

  export default {
    name: "GoodsMessage",
    data() {
      return {
        gid: this.$route.params.gid,
        count: 1,
        maxcount: 10
      }
    },
    components: {
      main_head,
      mian_bottom
    },
    created() {

    }
  }
</script>

<style scoped>
  .gobuy {
    border: 1px solid #f55d2c;
    color: #f55d2c;
    background: white
  }

  .gobuy:hover {
    background: #f55d2c;
    color: #FFFFFF;
  }
</style>
