<template>
      <el-card class="box-card" body-style="border-radius: 4px"  style="width: 900px;background-color: #F7F9F9;border-color: #F7F9F9" shadow="shadow">
        <div id="mycenterorder">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="待付款" name="first">
            <h3 v-show="dfkno" style="padding-top: 15%;padding-left: 38%;display:block">您还没有相关订单!!!</h3>
              <el-row>
                <el-col :span="24" v-for="d in dfkdindanDate">
                  <div class="grid-content bg-purple"
                       style="border-radius: 10px;background: #FFF;border: 1px solid gainsboro;">
                    <div v-for="del_goods in d.del_goods">
                      <el-row>
                        <el-col :span="4">
                          <el-image :src="'http://localhost:8081/src/assets/'+del_goods.goods.gimgs" style="width: 100px;height: 100px;padding-left: 10px"></el-image>
                        </el-col>
                        <el-col :span="6" style="padding-top: 40px">
                          <label>{{del_goods.goods.gname}}  ￥{{del_goods.goods.gprice}}</label>&#12288;
                        </el-col>
                        <el-col push="12" :span="4" style="padding-top: 40px">
                          <i class="el-icon-close"></i><label>{{del_goods.dcount}}</label>
                        </el-col>
                      </el-row>
                      </div>
                    <el-divider></el-divider>
                    <el-row>
                      <el-col push="1">
                        <a>查看详情>></a>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
                        <span>总计：￥{{d.price}}</span>
                      </el-col>
                      <el-col push="18"><br>
                        <el-button size="small " style="background-color: #F75211;color: white;width: 87px;height: 30px">取消订单</el-button>
                        <el-button size="small " style="background-color: #F75211;color: white;width: 87px;height: 30px">付款</el-button>
                      </el-col>
                    </el-row>
                    <br>
                  </div>
                  <br>
                </el-col>
              </el-row>
            <br>
          </el-tab-pane>
          <el-tab-pane label="待提货" name="second">
            <h3 v-show="hhh" style="padding-top: 15%;padding-left: 38%;display:block">您还没有相关订单!!!</h3>
            <el-row>
              <el-col :span="24" v-for="d in dthdindanDate">
                <el-col push="1" span="22"><br>
                    收货时间:<label>{{d.fulfiltime}}</label>
                  <el-divider></el-divider>
                </el-col>
                <div class="grid-content bg-purple"
                     style="border-radius: 10px;background: #FFF;border: 1px solid gainsboro;">
                  <div v-for="del_goods in d.del_goods">
                    <el-row>
                      <el-col :span="4">
                        <el-image :src="'http://localhost:8081/src/assets/'+del_goods.goods.gimgs" style="width: 100px;height: 100px;padding-left: 10px"></el-image>
                      </el-col>
                      <el-col :span="6" style="padding-top: 40px">
                        <label>{{del_goods.goods.gname}}  ￥{{del_goods.goods.gprice}}</label>&#12288;
                      </el-col>
                      <el-col push="12" :span="4" style="padding-top: 40px">
                        <i class="el-icon-close"></i><label>{{del_goods.dcount}}</label>
                      </el-col>
                    </el-row>
                  </div>
                  <el-divider></el-divider>
                  <el-row>
                    <el-col push="20">
                      <span>总计：￥{{d.price}}</span>
                    </el-col>
                    <el-col push="1"><br>
                      <a>查看详情>></a>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
                      <el-button size="small " style="background-color: #F75211;color: white;width: 87px;height: 30px">确认收货</el-button>
                    </el-col>
                  </el-row>
                  <br>
                </div>
                <br>
              </el-col>
            </el-row>
            <br>
          </el-tab-pane>
          <el-tab-pane label="已完成" name="third">
            <h3 v-show="ywcno" style="padding-top: 15%;padding-left: 38%;display:block">您还没有相关订单!!!</h3>
            <el-row>
              <el-col :span="24" v-for="d in ywcdindanDate">
                <div class="grid-content bg-purple"
                     style="border-radius: 10px;background: #FFF;border: 1px solid gainsboro;">
                  <div v-for="del_goods in d.del_goods">
                    <el-row>
                      <el-col :span="4">
                        <el-image :src="'http://localhost:8081/src/assets/'+del_goods.goods.gimgs" style="width: 100px;height: 100px;padding-left: 10px"></el-image>
                      </el-col>
                      <el-col :span="6" style="padding-top: 40px">
                        <label>{{del_goods.goods.gname}}  ￥{{del_goods.goods.gprice}}</label>&#12288;
                      </el-col>
                      <el-col push="12" :span="4" style="padding-top: 40px">
                        <i class="el-icon-close"></i><label>{{del_goods.dcount}}</label>
                      </el-col>
                    </el-row>
                  </div>
                  <el-divider></el-divider>
                  <el-row>
                    <el-col push="1" span="20">
                      <a>查看详情>></a>
                    </el-col>
                    <el-col push="1" span="20"><br>
                      购买时间:<label>{{d.buytime}}</label>
                    </el-col>
                    <el-col push="1">
                      收货时间:<label>{{d.fulfiltime}}</label>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
                      <span>总计：￥{{d.price}}</span>
                    </el-col>
                  </el-row>
                  <br>
                </div>
                <br>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
        </div>
      </el-card>
</template>

<script>
    export default {
        name: "mycenterorder",
      data(){
          return{
            activeName:'first',
            dfkdindanDate:[],
            dthdindanDate:[],
            ywcdindanDate:[],
            dfkno:false,
            dthno:false,
            ywcno:false,
            img:'http://localhost:8081/src/assets/'
          }
      },
      methods:{
          getDfkDindanDate(){
            var _this=this;
            var params=new URLSearchParams();
            params.append("uid",sessionStorage.getItem('uid'));
            this.$axios.post("queryDaiFuKuan.action",params)
              .then(function (result) {
                if (result.data==""){
                  _this.dfkno=true;
                }else {
                  _this.dfkno=false;
                  _this.dfkdindanDate=result.data;
                }
              }).catch(function (error) {
              alert(error);
            });
          },
          getDthDindanDate(){
          var _this=this;
          var params=new URLSearchParams();
          params.append("uid",sessionStorage.getItem('uid'));
          this.$axios.post("queryDaiTiHuo.action",params)
            .then(function (result) {
              if (result.data==""){
                _this.dthno=true;
              }else {
                _this.dthno=false;
                _this.dthdindanDate=result.data;
              }
            }).catch(function (error) {
            alert(error);
          });
        },
          getYwcDindanDate(){
          var _this=this;
          var params=new URLSearchParams();
          params.append("uid",sessionStorage.getItem('uid'));
          this.$axios.post("queryYiWanCheng.action",params)
            .then(function (result) {
              if (result.data==""){
                _this.ywcno=true;
              }else {
                _this.ywcno=false;
                _this.ywcdindanDate=result.data;
              }
            }).catch(function (error) {
            alert(error);
          });
        },
      },
      created: function () {
        this.getDfkDindanDate();
        this.getDthDindanDate();
        this.getYwcDindanDate();
      }
    }
</script>

<style scoped>

</style>
