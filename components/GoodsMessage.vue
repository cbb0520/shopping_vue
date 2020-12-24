<template>
  <div style="">
    <main_head ref="mainHead"></main_head>
    <div style="background-color: #f7f7f7!important;padding: 170px 80px 60px 80px">
      <div style="width: 100%;height: 100%;background: #FFFFFF">
        <el-row :gutter="20">
          <el-col :span="9">
            <div style="padding-top: 50px;;text-align: center">
              <img :src="'http://localhost:8081/src/assets/'+goodsData.gimgs"
              style="width: 300px;height: 310px;">
            </div>
          </el-col>
          <el-col :span="15">
            <div style="padding: 25px">
              <h2 style="font-size: 24px;font-weight: 700;text-align: left;color: #2b2f4c;">{{goodsData.gname}}</h2>
              <div>
                <b style="font-size: 14px;font-weight: 500;color: #2b2f4c;">产品编号<span
                  style="color: #8f91ac;margin-left: 8px">{{goodsData.code}}</span></b>
                <b style="font-size: 14px;font-weight: 500;color: #2b2f4c;margin-left: 30px">库存<span
                  style="color: #8f91ac;margin-left: 8px;">300</span></b>
                <b style="font-size: 14px;font-weight: 500;color: #2b2f4c;margin-left: 30px;float:right;position: absolute">
                  评分<el-rate v-model="goodValue" show-score text-color="#ff9900" style="float:right;margin-left: 10px" disabled></el-rate></b>
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
                  价格:<span style="color: #8f91ac;font-size: 18px;font-weight: 400;">￥{{goodsData.price}}</span>
                </p>
                <el-input-number v-model="goodsData.count" :min=1 :max=goodsData.limit size="mini"
                                 style="width: 90px;margin-bottom: 20px"></el-input-number>
                <i class="el-icon-star-off main_body_foodIcon" style="margin: -5px 0px 0px 15px"></i><br>
                <el-button style="background: #f55d2c;color: #FFFFFF" @click="joinShopping(goodsData.gid,goodsData.count,goodsData.gname)">
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
                        <div style="font-size: 14px;font-weight: 400;color: #3e3f5e;">如果发现其他任何地方都便宜，可以退还差价。</div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div style="border-radius: 10px;height: 120px;background: #f7f7f7!important;line-height: 25px">
                      <i class="el-icon-position"
                         style="color: #f55d2c;font-size: 35px;position: absolute;margin: 40px 0px 0px 20px"></i>
                      <div style="padding:30px 10px 10px 80px">
                        <div style="font-size: 16px;font-weight: 500;color: #2b2f4c">轻松退货和退款</div>
                        <div style="font-size: 14px;font-weight: 400;color: #3e3f5e;">在门口退货并在几秒钟内获得退款。</div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div style="margin-top: 40px;">
        <el-row :gutter="20">
          <el-col :span="7">
            <div class="grid-content bg-purple"
                 style="height: 500px;background: #FFFFFF;cursor: default;padding: 10px 20px">
              <h3>热门产品</h3>
              <div v-for="i in hotGoodData" style="margin: 5px 0px">
                <el-row>
                  <el-col :span="8">
                    <div class="grid-content bg-purple" style="cursor: default">
                      <el-image :src="'http://localhost:8081/src/assets/'+i.gimgs" style="width: 80px;height: 80px;"></el-image>
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-cpontent bg-purple" style="cursor: default">
                      <p style="margin: 10px 0px">白菜</p>
                      <p style="color: darkgrey">￥55</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="17">
            <div class="grid-content bg-purple"
                 style="background: #FFFFFF;cursor: default;padding: 10px 20px">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="评论" name="first">
                  <div style="height: 333px;border-bottom: 2px solid lightgrey">
                    <div
                      style="height: 100px;width: 100px;background: #F5F5F5;text-align: center;border-radius: 50%;margin: 120px 250px;">
                      <el-image src="../images/evaluate.png" style="margin-top: 20px;"></el-image>
                      <h3
                        style="color: darkgrey;font-size: 20px;font-weight: 500;position: absolute;margin: -45px 0px 0px 120px">
                        暂无评论</h3>
                    </div>
                  </div>
                  <div style="padding: 15px 10px">
                    <el-row :gutter="10">
                      <el-col :span="16">
                        <div>
                          <h2 style="font-weight: 400;color: #726D6D;font-family: 黑体;margin: 0px 0px 10px 0px">发表评论</h2>
                          <textarea style="min-height: 100px;max-height: 200px;min-width:420px;max-width: 420px;padding: 15px 25px;outline: none;
                          font-size: 18px;border: 1px solid lightgrey;border-radius: 15px;color: grey;font-family: 新宋体"></textarea>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div>
                          <b style="font-size: 16px;color: #726D6D;font-family: 黑体">您的评分</b>
                          <el-rate v-model="value" show-score text-color="#ff9900"
                                   style="margin: 8px 0px 80px 0px"></el-rate>
                          <el-button type="danger" round>匿名提交</el-button>
                          <el-button type="danger" round>直接提交</el-button>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="附加信息" name="second">附加信息</el-tab-pane>
              </el-tabs>
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
        maxcount: 10,
        activeName: 'first',
        value: 0,
        goodValue:3.7,
        goodsData:[],
        hotGoodData:[]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getGoodsById(){
        var _this = this;
        var params = new URLSearchParams();
        params.append("gid",this.gid);
        this.$axios.post("/queryGoodsById.action",params).then(function (result) {
          console.log(result.data)
          _this.goodsData = result.data;
        }).catch(function (error) {
          alert(error)
        });
      },
      queryHotGoodData(){
        var _this = this;
        var params = new URLSearchParams();
        this.$axios.post("/queryHotGoods.action").then(function (result) {
          _this.hotGoodData = result.data;
        }).catch(function (error) {
          alert(error)
        });
      },
      joinShopping(gid, count, gname) { //加入购物车
        if(sessionStorage.getItem('uaccount') == undefined){
          this.$notify({
            title: '提示！',
            message: '请先登录，才可以加入购物车  $_$',
            position: 'top-right'
          });
          return;
        }

        var _this = this;
        var params = new URLSearchParams();
        params.append("gid", gid);
        params.append("gname", gname);
        params.append("count", count);
        params.append("uaccount", sessionStorage.getItem('uaccount'));
        this.$axios.post("/joinShopping.action", params).then(function (result) {
          _this.$notify({
            title: result.data.title,
            message: result.data.msg,
            type: result.data.type,
            position: 'bottom-right'
          });
          _this.$refs.mainHead.getShoppingCarData();
        }).catch(function (error) {
          alert(error)
        });
      },
    },
    components: {
      main_head,
      mian_bottom
    },
    created() {
      if(this.gid == undefined){
        this.$router.push({name: 'indexs'});
        return;
      }
      //页面加载显示页面顶部
      window.scrollTo(0, document.body.scrollHeight)
      this.getGoodsById();
      this.queryHotGoodData();
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
</style>
