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
                <b
                  style="font-size: 14px;font-weight: 500;color: #2b2f4c;margin-left: 30px;float:right;position: absolute">
                  评分
                  <el-rate :value="score" show-score text-color="#ff9900" style="float:right;margin-left: 10px"
                           disabled></el-rate>
                </b>
              </div>
              <div style="margin: 20px 0px">
                <el-button size="mini" plain type="info">500克</el-button>
                <el-button size="mini" plain type="info">1斤</el-button>
                <el-button size="mini" plain type="info">2斤</el-button>
                <el-button size="mini" plain type="info">3斤</el-button>
              </div>
              <div
                style="color: #3e3f5e;font-weight: 400;font-size: 14px;line-height: 30px;padding-right: 40px;height: 125px">
                {{goodsData.gdetails}}
              </div>
              <div style="background: #f7f7f7!important;height: 130px;border-radius: 10px;padding: 16px">
                <p style="color: #7c72ff;font-size: 18px;font-weight: 500;margin: 0px 10px 15px 0px">
                  价格:<span style="color: #8f91ac;font-size: 18px;font-weight: 400;">￥{{goodsData.gprice}}</span>
                </p>
                <el-input-number v-model="goodsData.count" :min=1 :max=goodsData.limit size="mini"
                                 style="width: 90px;margin-bottom: 20px"></el-input-number>
                <i class="el-icon-star-off main_body_foodIcon" style="margin: -5px 0px 0px 15px"></i><br>
                <el-button style="background: #f55d2c;color: #FFFFFF"
                           @click="joinShopping(goodsData.gid,goodsData.count,goodsData.gname)">
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
                      <el-image :src="'http://localhost:8081/src/assets/'+i.gimgs"
                                style="width: 80px;height: 80px;"></el-image>
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-cpontent bg-purple" style="cursor: default">
                      <p style="margin: 10px 0px">{{i.gname}}</p>
                      <p style="color: darkgrey">￥{{i.gprice}}</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="17">
            <div class="grid-content bg-purple"
                 style="background: #FFFFFF;cursor: default;padding: 10px 20px">
              <el-tabs v-model=activeName @tab-click="handleClick">
                <el-tab-pane label="评论" name="first">
                  <div style="height: 438px;border-bottom: 2px solid lightgrey">

                    <ul class="infinite-list" @v-infinite-scroll="load"
                        style="overflow:auto;height: 438px;padding: 0px">
                      <li v-for="i in goodsComment" class="infinite-list-item comment">
                        <el-row :gutter="0" style="width: 100%;">
                          <el-col :span="3">
                            <div>
                              <el-image v-if="i.anonymity == 1" :src="'http://localhost:8081/src/assets/'+i.user.uimg"
                                        style="border-radius: 50%;height: 60px;width: 60px"></el-image>
                              <el-image v-if="i.anonymity == 0" src="http://localhost:8081/src/assets/img-5.jpg"
                                        style="border-radius: 50%;height: 60px;width: 60px"></el-image>
                            </div>
                          </el-col>
                          <el-col :span="21">
                            <div>
                              <p style="color: #3e3f5e;font-family: 新宋体;font-weight:bold;margin: 0px 0px 20px 0px;">
                                <span v-if="i.anonymity == 1">{{i.user.uname}}</span>
                                <span v-if="i.anonymity == 0">匿名</span>
                                <span class="removeComment" v-if="i.user.uaccount == uaccount"
                                      @click="removeComment(i.id)">删除</span>
                                <span
                                  style="float:right;color: #3e3f5e;font-family: 新宋体;font-size: 14px;font-weight: 500">
                                  发表于：{{i.date}}
                                </span>
                              </p>
                              <div style="position: absolute;margin: -10px 0px 0px 600px;"><!--点赞isPraise-->
                                <el-image src="../images/点赞no.png" v-if="i.isPraise == 0" :isPraise="i.isPraise"
                                          @click="praiseBtn($event,i.id)" style="cursor: pointer"></el-image>
                                <el-image src="../images/点赞ok.png" v-if="i.isPraise == 1" :isPraise="i.isPraise"
                                          @click="praiseBtn($event,i.id)" style="cursor: pointer"></el-image>
                                <span
                                  style="color: #f55d2c;font-weight: bold;position: absolute;margin: 3px 0px 0px 5px">{{i.praise}}</span>
                              </div>
                              <el-rate :value="i.score" text-color="#ff9900" disabled></el-rate><!--评分-->
                              <p style="font-size: 14px;color: #3e3f5e;line-height: 25px"><!--评论信息-->
                                {{i.text}}
                              </p>
                              <b class="reply" :id="'reply'+i.id" style="float: none">
                                <i v-if="i.count == 0" class="el-icon-chat-dot-square">暂无回复</i>
                                <i v-if="i.count > 0" class="el-icon-caret-bottom" @click="clickReply(i.id)">{{i.count}}条回复</i>
                              </b>
                              <b class="reply" @click="showReplyChildB(i.id)">回复</b>
                              <b :id="'replyChildB'+i.id" class="replyChildB" style="display: none">
                                <b class="reply" @click="hideReplyChildB(i.id)">取消</b>
                                <b class="reply" @click="sendReplyChild(i.id)">发送</b>
                                <textarea type="text" v-model="replyText" class="replyChild"></textarea>
                              </b>
                              <!--回复评论的div-->
                              <div :class="'parentCommentReply parentCommentReply'+i.id" style="display: none">
                                <div :class="'comment_reply comment_reply'+i.id" v-for="r in replyChild">
                                  <el-image :src="'http://localhost:8081/src/assets/'+r.user.uimg"
                                            style="width: 30px;height: 30px;float:left;margin-top: -5px"></el-image>
                                  <span style="color: #726D6D;font-size: 14px;float:left;margin: 0px 20px">{{r.user.uname}}</span>
                                  <span v-if="r.user.uaccount == uaccount" class="removeCommentChild" @click="removeCommentChild(r.id,i.id)">删除</span>
                                  <p style="margin: 0px;color: #726D6D;font-size: 14px;">{{r.date}}</p>
                                  <p style="font-size: 14px;color: #726D6D;line-height: 20px;margin-left: 49px">
                                    {{r.text}}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </el-col>
                        </el-row>
                      </li>
                    </ul>

                    <div v-if="goodsComment.length == 0"
                         style="height: 100px;width: 100px;background: #F5F5F5;text-align: center;border-radius: 50%;margin: -350px 250px;position: absolute">
                      <el-image src="../images/evaluate.png" style="margin-top: 20px;"></el-image>
                      <h3
                        style="color: darkgrey;font-size: 20px;font-weight: 500;position: absolute;margin: -45px 0px 0px 120px;width: 120px">
                        暂无评论</h3>
                    </div>

                  </div>

                  <div style="padding: 15px 10px">
                    <el-row :gutter="10">
                      <el-col :span="16">
                        <div>
                          <h2 style="font-weight: 400;color: #726D6D;font-family: 黑体;margin: 0px 0px 10px 0px">发表评论</h2>
                          <textarea style="min-height: 100px;max-height: 200px;min-width:420px;max-width: 420px;padding: 15px 25px;outline: none;
                          font-size: 18px;border: 1px solid lightgrey;border-radius: 15px;color: grey;font-family: 新宋体;"
                                    v-model="text"></textarea>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div>
                          <b style="font-size: 16px;color: #726D6D;font-family: 黑体">您的评分</b>
                          <el-rate v-model="value" show-score text-color="#ff9900"
                                   style="margin: 8px 0px 80px 0px"></el-rate>
                          <el-button type="danger" round @click="anonymityCommit">匿名提交</el-button>
                          <el-button type="danger" round @click="directCommit">直接提交</el-button>
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
        goodsData: [], //单个商品数据
        hotGoodData: [], //热门商品数据
        goodsComment: [], //商品评论数据
        uaccount: sessionStorage.getItem('uaccount'),
        text: '',
        score: 0,//商品评分
        replyText: '',
        replyChild: [{"user": {}, "text": '', "date": ''}],  //子评论集合
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      load() {
        if (this.count == 10) {
          return
        }
        this.count += 1
      },
      //根据id查询商品
      getGoodsById() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("gid", this.gid);
        this.$axios.post("/queryGoodsById.action", params).then(function (result) {
          _this.goodsData = result.data.list;
          if (result.data.score == null) {
            _this.score = 0;
          } else {
            _this.score = parseFloat(result.data.score.toFixed(1));
          }
          _this.getGoodsComment(result.data.gid);
        }).catch(function (error) {
          alert(error)
        });
      },
      //根据id查询商品评论
      getGoodsComment(gid) {
        var _this = this;
        var params = new URLSearchParams();
        params.append("gid", this.gid);
        params.append("uaccount", this.uaccount);
        this.$axios.post("/queryGoodsAllComment.action", params).then(function (result) {
          _this.goodsComment = result.data;
        }).catch(function (error) {
          alert(error)
        });
      },
      //获取热门商品数据
      queryHotGoodData() {
        var _this = this;
        var params = new URLSearchParams();
        this.$axios.post("/queryHotGoods.action").then(function (result) {
          _this.hotGoodData = result.data;
        }).catch(function (error) {
          alert(error)
        });
      },
      //加入购物车
      joinShopping(gid, count, gname) { //加入购物车
        if (sessionStorage.getItem('uaccount') == undefined) {
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
      //点击查看商品评论
      clickReply(id) {
        var _this = this;
        var params = new URLSearchParams();
        params.append("gcid", id);
        this.$axios.post("/queryAllReplyChild.action", params).then(function (result) {//parentCommentReply
          _this.replyChild = result.data;
          if (document.getElementsByClassName("parentCommentReply" + id)[0].style.display == "block") {
            document.getElementsByClassName("parentCommentReply" + id)[0].style.setProperty('display', 'none')
          } else {
            for (var i = 0; i < document.getElementsByClassName("parentCommentReply").length; i++) {
              document.getElementsByClassName("parentCommentReply")[i].style.setProperty('display', 'none')
            }
            document.getElementsByClassName("parentCommentReply" + id)[0].style.setProperty('display', 'block')
          }
        }).catch(function (error) {
          alert(error)
        });
      },
      //匿名提交
      anonymityCommit() {
        //没登陆不让点
        if (this.uaccount == null) {
          this.$message({
            message: '登录后才能评论哦',
            type: 'info'
          });
          return;
        }
        if (this.text == '' || this.value == 0) {
          this.$message({
            message: '你的提交信息有误，请查询操作',
            type: 'info'
          });
          return;
        }
        var _this = this;
        var params = new URLSearchParams();
        params.append("uaccount", this.uaccount);
        params.append("gid", this.gid);
        params.append("score", this.value);
        params.append("text", this.text);
        params.append("anonymity", 0);
        this.$axios.post("/insertGoodsComment.action", params).then(function (result) {
          _this.getGoodsById();
          _this.value = 0;
          _this.text = '';
        }).catch(function (error) {
          alert(error)
        });
      },
      //直接提交
      directCommit() {
        //没登陆不让点
        if (this.uaccount == null) {
          this.$message({
            message: '登录后才能评论哦',
            type: 'info'
          });
          return;
        }
        if (this.text == '' || this.value == 0) {
          this.$message({
            message: '你的提交信息有误，请查询操作',
            type: 'info'
          });
          return;
        }
        var _this = this;
        var params = new URLSearchParams();
        params.append("uaccount", this.uaccount);
        params.append("gid", this.gid);
        params.append("score", this.value);
        params.append("text", this.text);
        params.append("anonymity", 1);
        this.$axios.post("/insertGoodsComment.action", params).then(function (result) {
          _this.getGoodsById();
          _this.value = 0;
          _this.text = '';
        }).catch(function (error) {
          alert(error)
        });
      },
      //删除评论
      removeComment(id) {
        this.$confirm('确认删除该评论吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var _this = this;
          var params = new URLSearchParams();
          params.append("id", id);
          this.$axios.post("/removeComment.action", params).then(function (result) {
            _this.$message({
              message: "删除成功",
              type: "info"
            });
            _this.getGoodsById();
          }).catch(function (error) {
            alert(error)
          });
        }).catch(() => {
        });
      },
      //点赞
      praiseBtn(e, id) {
        //没登陆不让点
        if (this.uaccount == null) {
          this.$message({
            message: '登录后才能点赞哦',
            type: 'info'
          });
          return;
        }
        var praise = e.target.getAttribute("ispraise");
        //取消点赞
        var _this = this;
        if (praise == 1) {
          _this.goodsComment.forEach((item, index, ary) => {
            if (item.id == id) {
              item.isPraise = 0;
              item.praise = item.praise - 1;
            }
          })
          var params = new URLSearchParams();
          params.append("uaccount", this.uaccount);
          params.append("gcid", id);
          this.$axios.post("/praiseBtnNo.action", params).then(function (result) {
          }).catch(function (error) {
            alert(error)
          });
        }
        //点赞
        if (praise == 0) {
          _this.goodsComment.forEach((item, index, ary) => {
            if (item.id == id) {
              item.isPraise = 1;
              item.praise = item.praise + 1;
            }
          })
          var params = new URLSearchParams();
          params.append("uaccount", this.uaccount);
          params.append("gcid", id);
          this.$axios.post("/praiseBtnOk.action", params).then(function (result) {
          }).catch(function (error) {
            alert(error)
          });
        }
      },
      //显示回复
      showReplyChildB(id) {
        //没登陆不让点
        if (this.uaccount == null) {
          this.$message({
            message: '登录后才能回复哦',
            type: 'info'
          });
          return;
        }
        this.replyText = '';
        var classreplyChildB = document.getElementsByClassName("replyChildB");
        for (var i = 0; i < classreplyChildB.length; i++) {
          classreplyChildB[i].style.setProperty('display', 'none');
          classreplyChildB[i].previousElementSibling.style.setProperty('display', 'inline');
        }
        document.getElementById("replyChildB" + id).style.setProperty('display', 'inline');
        document.getElementById("replyChildB" + id).previousElementSibling.style.setProperty('display', 'none');
      },
      //取消回复
      hideReplyChildB(id) {
        document.getElementById("replyChildB" + id).style.setProperty('display', 'none');
        document.getElementById("replyChildB" + id).previousElementSibling.style.setProperty('display', 'inline')
      },
      //发表回复
      sendReplyChild(id) {
        var _this = this;
        var params = new URLSearchParams();
        params.append("uaccount", this.uaccount);
        params.append("text", this.replyText);
        params.append("count", id);
        this.$axios.post("/sendReplyChild.action", params).then(function (result) {
          document.getElementById("replyChildB" + id).style.setProperty('display', 'none');
          document.getElementById("replyChildB" + id).previousElementSibling.style.setProperty('display', 'inline')
          _this.getGoodsById();
        }).catch(function (error) {
          alert(error)
        });
      },
      //删除回复的评论
      removeCommentChild(id,gcid){
        this.$confirm('确认删除该评论吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var _this = this;
          var params = new URLSearchParams();
          params.append("id", id);
          this.$axios.post("/removeComment.action", params).then(function (result) {
            _this.$message({
              message: "删除成功",
              type: "info"
            });
            var params2 = new URLSearchParams();
            params2.append("gcid", gcid);
            _this.$axios.post("/queryAllReplyChild.action", params2).then(function (result) {//parentCommentReply
              _this.replyChild = result.data;
            }).catch(function (error) {
              alert(error)
            });
            _this.getGoodsComment(_this.gid)
          }).catch(function (error) {
            alert(error)
          });
        }).catch(() => {
        });
      }
    },
    components: {
      main_head,
      mian_bottom
    },
    created() {
      if (this.gid == undefined) {
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
  .replyChild {
    float: right;
    outline: none;
    border-radius: 5px;
    border: 1px solid dimgrey;
    padding: 3px;
    color: #726D6D;
    width: 200px;
    height: 15px;
    max-width: 200px;
    max-height: 80px;
    min-width: 200px;
    min-height: 15px;
    margin-top: -3px;
  }

  .removeComment {
    color: #8d9aa8;
    font-size: 14px;
    font-weight: 500;
    margin-left: 20px;
    text-decoration: underline
  }

  .removeComment:hover {
    color: #f55d2c;
    cursor: pointer;
  }

  .comment_reply {
    /*display: none;*/
    padding-top: 20px;
    margin-top: 10px;
    border-top: 1px solid gainsboro;
  }

  .comment {
    list-style-type: none;
    margin: 0px;
    border-top: 1px solid gainsboro;
    min-height: 115px;
    padding: 15px 10px 15px 0px
  }

  .comment:first-child {
    border: none;
  }

  .reply {
    margin-left: 20px;
    float: right;
    font-size: 14px;
    cursor: pointer;
    color: #3e3f5e;
  }

  .reply:hover {
    color: #f55d2c;
  }

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

  .removeCommentChild {
    color: #726D6D;
    font-size: 14px;
    text-decoration: underline;
    position: absolute;
    margin-left: 30%
  }

  .removeCommentChild:hover {
    cursor: pointer;
    color: #f55d2c;
  }
</style>
