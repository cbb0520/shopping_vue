<!--主页分类商品信息-->
<template>
  <div style="margin-top: 60px;">
    <h1 class="title" id="goclassify">目录分类</h1>
    <el-row :gutter="35">
      <el-col :span="4" v-for="d in data">
        <div class="grid-content bg-purple"
             style="border-radius: 10px;background: #FFF;border: 1px solid gainsboro;text-align: center">
          <el-image :src="d.img" style="width: 100px;height: 60px;margin-top: 20px"></el-image>
          <p style="font-size: 14px;font-weight: 500;color: #2b2f4c;margin-top: 7px">{{d.msg}}</p>
        </div>
        <div @click="likeClassify(d.fid,$event)" class="classifdiv" name="nameclassif"></div>
      </el-col>
    </el-row>

    <el-row :gutter="30" style="margin-top: 50px">
      <el-col :span="6" v-for="goods in goodsData">
        <div class="grid-content bg-purple" style="height: 350px;background-color: #FFFFFF;border-radius: 10px;
        cursor: default;margin-bottom: 40px;border: 1px solid gainsboro;text-align: center;">
          <i class="el-icon-star-off main_body_foodIcon"></i>
          <el-image :src="'http://localhost:8081/src/assets/'+goods.gimgs" class="main_body_commodityImg"
                    @click="goodsmsg(goods.gid)"></el-image>
          <!--<el-image class="main_body_commodityImg" src="images/baicai.jpg"></el-image>-->
          <h3 id="goodsname" style="margin: 5px" @click="goodsmsg(goods.gid)">{{goods.gname}}</h3>
          <p style="font-size: 15px;margin: 5px;color: gray;">{{goods.classify.fname}}</p>
          <h3 style="font-family: 黑体;margin: 11px;color: #f69733;font-weight: bold">$ {{goods.gprice}}</h3>
          <el-input-number size="mini" v-model="goods.count" :min=1 :max=goods.limit
                           style="width: 90px;"></el-input-number>
          <i class="el-icon-shopping-cart-2 main_body_gwcBtn"
             @click="joinShopping(goods.gid,goods.count,goods.gname)"></i>
        </div>
      </el-col>
    </el-row>
    <div style="width: 100%;text-align: center">
      <el-pagination @current-change="pagechange" layout="prev, pager, next" :total="total" :page-size="rows"
                     background></el-pagination>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {img: "images/shuiguo_icon.svg", msg: "水果类", fid: 1},
          {img: "images/mianlei.svg", msg: "面类", fid: 2},
          {img: "images/roulei.svg", msg: "肉类", fid: 4},
          {img: "images/shucai.svg", msg: "蔬菜类", fid: 3},
          {img: "images/yinliao.svg", msg: "饮料类", fid: 5},
          {img: "images/zahuo-2.svg", msg: "杂货类", fid: 6}
        ],
        num: 1,
        goodsData: [],
        total: 1,
        page: 1,
        rows: 12,
        fid: 0
      };
    },
    methods: {
      getGoodsData() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("rows", "12");
        params.append("page", this.page);
        params.append("classify", this.fid);
        params.append("gname", this.$parent.$refs.mainHead.search);
        this.$axios.post("/queryAllGoods.action", params).then(function (result) {
          _this.goodsData = result.data.rows;
          _this.total = result.data.total;
        }).catch(function (error) {
          alert(error)
        });
      },
      pagechange(pageindex) {
        this.page = pageindex;
        this.getGoodsData();
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
          _this.$parent.$refs.mainHead.getShoppingCarData();
        }).catch(function (error) {
          alert(error)
        });
      },
      goodsmsg(gid) {
        this.$router.push({name: 'goodsMessage', params: {gid: gid}})
      },
      likeClassify(gid, e) {
        if (this.fid == gid) {
          gid = 0;
        }
        this.fid = gid;
        this.getGoodsData();
        var ee = e.target;
        if(ee.className == "eee"){
          ee.className = "classifdiv";
          return;
        }
        for(var i = 0;i<=5;i++){
          document.getElementsByName("nameclassif")[i].className = "classifdiv"
        }
        ee.className = "eee";
      }
    },
    created() {
      this.getGoodsData();
    }
  }

</script>

<style>
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    background-color: #FFFFFF;
    border-radius: 50%;
  }

  .goGoodsMsyBtn:hover{
    cursor: pointer;
  }

  .classifdiv {
    position: absolute;
    height: 125px;
    width: 168px;
    margin: -125px 0px 0px 0px;
    opacity: 0;
    border-radius: 10px;
  }

  .classifdiv:hover {
    background: black;
    cursor: pointer;
    opacity: 0.1;
  }

  .eee {
    position: absolute;
    height: 125px;
    width: 168px;
    background: black;
    margin: -125px 0px 0px 0px;
    opacity: 0.1;
    border-radius: 10px
  }

  .eee:hover {
    cursor: pointer;
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
