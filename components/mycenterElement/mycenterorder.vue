<template>
      <el-card class="box-card" body-style="border-radius: 4px"  style="width: 900px;background-color: #F7F9F9;border-color: #F7F9F9" shadow="shadow">
        <div id="mycenterorder">
        <el-tabs v-model="activeName">
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
                        <a class="ddxqlikai" v-on:mouseover="ddxqmouseover($event)" v-on:mouseout="ddxqmouseout($event)" @click="getDfkDindanXqDate(d.did)">查看详情>></a>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
                        <span>总计：￥{{d.price}}</span>
                      </el-col>
                      <el-col push="18"><br>
                        <el-button size="small " style="background-color: #F75211;color: white;width: 87px;height: 30px" @click="userQxdd(d.did)">取消订单</el-button>
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
            <h3 v-show="dthno" style="padding-top: 15%;padding-left: 38%;display:block">您还没有相关订单!!!</h3>
            <el-row>
              <el-col :span="24" v-for="d in dthdindanDate">
                <el-col push="1" span="22"><br>
                    购买时间:<label>{{d.buytime}}</label>
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
                      <a class="ddxqlikai" v-on:mouseover="ddxqmouseover($event)" v-on:mouseout="ddxqmouseout($event)" @click="getDshDindanXqDate(d.did)">查看详情>></a>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;
                      <el-button size="small " style="background-color: #F75211;color: white;width: 87px;height: 30px" @click="userQrSh(d.did)">确认收货</el-button>
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
                      <a class="ddxqlikai" v-on:mouseover="ddxqmouseover($event)" v-on:mouseout="ddxqmouseout($event)" @click="getYwcDindanXqDate(d.did)">查看详情>></a>
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
        <el-dialog title="订单详情" :visible.sync="ywcddxqVisible" width="50%" modal="modal">
          <el-row style="border: 1px dashed darkgrey;">
            <span style="padding-left: 6px"><strong>商品信息</strong></span>
            <el-col v-for="del_goods1 in ywcddxqData.del_goods">
              <div>
                <el-row>
                  <el-col :span="5">
                    <el-image :src="'http://localhost:8081/src/assets/'+del_goods1.goods.gimgs" style="width: 120px;height: 120px;padding-left: 10px"></el-image>
                  </el-col>
                  <el-col :span="6" style="padding-top: 40px">
                    <label>{{del_goods1.goods.gname}}  ￥{{del_goods1.goods.gprice}}/份</label>&#12288;
                  </el-col>
                  <el-col push="11" :span="4" style="padding-top: 40px">
                    <i class="el-icon-close"></i><label>{{del_goods1.dcount}}</label>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col push="21" span="4">
              <br>
              <label><strong>总计:￥{{ywcddxqData.price}}</strong></label>
            </el-col>
          </el-row><br><br>
          <el-row style="border: 1px dashed darkgrey">
            <span style="padding-left: 6px"><strong>配送信息</strong></span>
            <br><br>
              <el-col push="1">
                <span>配送方式:<strong>自提</strong></span>
              </el-col>
              <el-col push="1">
                <span>商户:<strong>{{sname}}</strong></span>
              </el-col>
            <el-col push="1">
              <span>联系电话:<strong>{{phone}}</strong></span>
            </el-col>
            <el-col push="1">
              <span>提货地址:<strong>{{mddress}}</strong></span>
            </el-col>
            <el-col push="1"><br>
              <span>购买时间:<strong>{{ywcddxqData.buytime}}</strong></span>
            </el-col>
            <el-col push="1">
              <span>收货时间:<strong>{{ywcddxqData.fulfiltime}}</strong></span>
            </el-col>
            <el-col push="16">
              <br>
              <span>收货人:<strong>{{uname}}    {{uphone}}</strong></span>
            </el-col>
          </el-row>
        </el-dialog>
        <el-dialog title="订单详情" :visible.sync="dfkddxqVisible" width="50%" modal="modal">
          <el-row style="border: 1px dashed darkgrey;">
            <span style="padding-left: 6px"><strong>商品信息</strong></span>
            <el-col v-for="del_goods1 in ywcddxqData.del_goods">
              <div>
                <el-row>
                  <el-col :span="5">
                    <el-image :src="'http://localhost:8081/src/assets/'+del_goods1.goods.gimgs" style="width: 120px;height: 120px;padding-left: 10px"></el-image>
                  </el-col>
                  <el-col :span="6" style="padding-top: 40px">
                    <label>{{del_goods1.goods.gname}}  ￥{{del_goods1.goods.gprice}}/份</label>&#12288;
                  </el-col>
                  <el-col push="11" :span="4" style="padding-top: 40px">
                    <i class="el-icon-close"></i><label>{{del_goods1.dcount}}</label>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col push="21" span="4">
              <br>
              <label><strong>总计:￥{{ywcddxqData.price}}</strong></label>
            </el-col>
          </el-row><br><br>
          <el-row style="border: 1px dashed darkgrey">
            <span style="padding-left: 6px"><strong>配送信息</strong></span>
            <br><br>
            <el-col push="1">
              <span>配送方式:<strong>自提</strong></span>
            </el-col>
            <el-col push="1">
              <span>商户:<strong>{{sname}}</strong></span>
            </el-col>
            <el-col push="1">
              <span>联系电话:<strong>{{phone}}</strong></span>
            </el-col>
            <el-col push="1">
              <span>提货地址:<strong>{{mddress}}</strong></span>
            </el-col>
            <el-col push="1"><br>
              <span>购买时间:<strong>等待买家付款</strong></span>
            </el-col>
            <el-col push="16">
              <br>
              <span>收货人:<strong>{{uname}}    {{uphone}}</strong></span>
            </el-col>
          </el-row>
        </el-dialog>
        <el-dialog title="订单详情" :visible.sync="dshddxqVisible" width="50%" modal="modal">
          <el-row style="border: 1px dashed darkgrey;">
            <span style="padding-left: 6px"><strong>商品信息</strong></span>
            <el-col v-for="del_goods1 in ywcddxqData.del_goods">
              <div>
                <el-row>
                  <el-col :span="5">
                    <el-image :src="'http://localhost:8081/src/assets/'+del_goods1.goods.gimgs" style="width: 120px;height: 120px;padding-left: 10px"></el-image>
                  </el-col>
                  <el-col :span="6" style="padding-top: 40px">
                    <label>{{del_goods1.goods.gname}}  ￥{{del_goods1.goods.gprice}}/份</label>&#12288;
                  </el-col>
                  <el-col push="11" :span="4" style="padding-top: 40px">
                    <i class="el-icon-close"></i><label>{{del_goods1.dcount}}</label>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col push="21" span="4">
              <br>
              <label><strong>总计:￥{{ywcddxqData.price}}</strong></label>
            </el-col>
          </el-row><br><br>
          <el-row style="border: 1px dashed darkgrey">
            <span style="padding-left: 6px"><strong>配送信息</strong></span>
            <br><br>
            <el-col push="1">
              <span>配送方式:<strong>自提</strong></span>
            </el-col>
            <el-col push="1">
              <span>商户:<strong>{{sname}}</strong></span>
            </el-col>
            <el-col push="1">
              <span>联系电话:<strong>{{phone}}</strong></span>
            </el-col>
            <el-col push="1">
              <span>提货地址:<strong>{{mddress}}</strong></span>
            </el-col>
            <el-col push="1"><br>
              <span>购买时间:<strong>{{ywcddxqData.buytime}}</strong></span>
            </el-col>
            <el-col push="1">
              <span>收货时间:<strong>等待买家收货</strong></span>
            </el-col>
            <el-col push="16">
              <br>
              <span>收货人:<strong>{{uname}}    {{uphone}}</strong></span>
            </el-col>
          </el-row>
        </el-dialog>
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
            img:'http://localhost:8081/src/assets/',
            ywcddxqVisible:false,
            dfkddxqVisible:false,
            dshddxqVisible:false,
            ywcddxqData:[],
            sname:'',
            phone:'',
            mddress:'',
            uname:'',
            uphone:'',

          }
      },
      methods:{
          getDfkDindanDate(){
            var _this=this;
            var params=new URLSearchParams();
            params.append("uid",sessionStorage.getItem('uid'));
            this.$axios.post("queryDaiFuKuan.action",params)
              .then(function (result) {
                if (result.data.length < 1){
                  _this.dfkno=true;
                  _this.dfkdindanDate=[];
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
              console.log(result.data.length)
              if (result.data.length < 1){
                _this.dthno=true;
                _this.dthdindanDate=[];
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
          userQrSh(did){
            var _this=this;
            this.$confirm('确定已经收到商品了吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              var params=new URLSearchParams();
              params.append("did",did);
              this.$axios.post("QueRengShouHuo.action",params)
                .then(function (result) {
                  if (result.data.code=="1"){
                    _this.$message({
                      type: 'success',
                      message: result.data.msg
                    });
                    _this.getDthDindanDate();
                    _this.getYwcDindanDate();
                  }else {
                    _this.$message({
                      type: 'success',
                      message: result.data.msg
                    });
                  }
                }).catch(function (error) {
                alert(error);
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消收货'
              });
            });
          },
          userQxdd(did){
            var _this=this;
            this.$confirm('确认取消订单?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              center: true
            }).then(() => {
              var params=new URLSearchParams();
              params.append("did",did);
              this.$axios.post("quXiaoDinDan.action",params)
                .then(function (result) {
                    _this.$message({
                      type: 'success',
                      message: result.data.msg
                    });
                  _this.getDfkDindanDate();
                }).catch(function (error) {
                alert(error);
              });
            }).catch(() => {
            });
          },
          ddxqmouseover($event){
          $event.currentTarget.className="ddxqjinru";
        },/*鼠标进入事件*/
          ddxqmouseout($event){
          $event.currentTarget.className="ddxqlikai";
        },/*鼠标离开事件*/
          /*查看已完成的订单详情*/
         getYwcDindanXqDate(did){
            this.ywcddxqVisible=true;
          var _this=this;
          var params=new URLSearchParams();
          params.append("did",did);
          this.$axios.post("queryDdXq.action",params)
            .then(function (result) {
                _this.ywcddxqData=result.data;
                _this.sname=result.data.merchants.sname;
              _this.phone=result.data.merchants.phone;
              _this.mddress=result.data.merchants.mddress+result.data.merchants.mname;
              _this.uname=result.data.user.uname;
              _this.uphone=result.data.user.phone;
            }).catch(function (error) {
            alert(error);
          });
        },
         getDfkDindanXqDate(did){
          this.dfkddxqVisible=true;
          var _this=this;
          var params=new URLSearchParams();
          params.append("did",did);
          this.$axios.post("queryDdXq.action",params)
            .then(function (result) {
              _this.ywcddxqData=result.data;
              _this.sname=result.data.merchants.sname;
              _this.phone=result.data.merchants.phone;
              _this.mddress=result.data.merchants.mddress+result.data.merchants.mname;
              _this.uname=result.data.user.uname;
              _this.uphone=result.data.user.phone;
            }).catch(function (error) {
            alert(error);
          });
        },
         getDshDindanXqDate(did){
          this.dshddxqVisible=true;
          var _this=this;
          var params=new URLSearchParams();
          params.append("did",did);
          this.$axios.post("queryDdXq.action",params)
            .then(function (result) {
              _this.ywcddxqData=result.data;
              _this.sname=result.data.merchants.sname;
              _this.phone=result.data.merchants.phone;
              _this.mddress=result.data.merchants.mddress+result.data.merchants.mname;
              _this.uname=result.data.user.uname;
              _this.uphone=result.data.user.phone;
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
  .ddxqjinru{
    color: #f55d2c;
    font-size: 15px;
  }
  .ddxqlikai{
    color: black;
    font-size: 15px;
  }
</style>
