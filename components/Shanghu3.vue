<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0px">
        <main-head></main-head>
      </el-header>
      <el-container style="margin-top: 75px">
        <el-aside width="250px" style="height: 600px">
          <el-menu index="1">
            <div style="width: 100%;text-align: center"><span>全部功能</span></div>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>收营报表</template>
              <el-menu-item-group>
                <el-menu-item index="2-1" @click="addTab('收入报表','income')">收入情况</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>商户资料维护</template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <el-button circle @click="editmerchantble = true">编辑商户资料</el-button>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main style="padding: 0px 5px 0px 5px">
          <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
              v-for="(item, index) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name">
              <component v-bind:is="item.content"></component>
            </el-tab-pane>
          </el-tabs>
        </el-main>
        <el-dialog title="编辑商户资料" :visible.sync="editmerchantble" width="60%">
          <editmerchant ref="child02"></editmerchant>
          <span slot="footer" class="dialog-footer">
                    <el-button @click="editmerchantble = false">取 消</el-button>
                    <el-button type="primary" @click="editmerchant">确 定</el-button>
            </span>
        </el-dialog>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import MainHead from "./indexElement/main_head"
  import Editmerchant from "./shanghuElement/shanghuweihu/editmerchant"
  import Income from "./shanghuElement/shanghutongji/income"
  import Mainshanghu from "./shanghuElement/dindan/mainshanghu"
  export default {
    data() {
      return {
        editableTabsValue: '1',
        editableTabs: [],
        tabIndex: 2,
        editmerchantble: false
      }
    },
    methods: {
      editmerchant(event) {
        var _this = this;
        /*var params = new URLSearchParams();
        params.append("sname",this.$refs.child02.merchants.sname);
        params.append("mname",this.$refs.child02.merchants.mname);
        params.append("certificate",this.$refs.child02.merchants.certificate);
        params.append("phone",this.$refs.child02.merchants.phone);
        params.append("mtype",this.$refs.child02.merchants.mtype);
        params.append("mimgs",this.$refs.child02.merchants.mimgs);
        params.append("mddress",this.$refs.child02.merchants.mddress);
        params.append("mddress",this.$refs.child02.provincecode);
        params.append("mddress",this.$refs.child02.citycode);
        params.append("mddress",this.$refs.child02.areacode);*/
        _this.$refs.child02.merchants.provincecode = _this.$refs.child02.provincecode;
        _this.$refs.child02.merchants.citycode = _this.$refs.child02.citycode;
        _this.$refs.child02.merchants.areacode = _this.$refs.child02.areacode;
        event.preventDefault();
        let formData = new FormData();
        // formData.append("img",this.addform.img);
        //将需要提交的表单数据 快速组装为H5定义的类型FormData
        Object.keys(_this.$refs.child02.merchants).forEach((key) => {
          formData.append(key, _this.$refs.child02.merchants[key]);
        });
        this.$axios({
          method: 'post',
          url: 'updateMerchants.action',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (result) {
          _this.$message({
            message: result.data.msg,
            type: 'success'
          });
          _this.editmerchantble = false;
        }).catch(function (error) {
          _this.$message({
            message: '编辑失败',
            type: 'success'
          });
        });
      },
      addTab(targetName, mainshanghu) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: targetName,
          name: targetName,
          content: mainshanghu
        });
        this.editableTabsValue = targetName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    },
    components: {
      mainHead: MainHead,
      editmerchant: Editmerchant,
      income: Income,
      mainshanghu: Mainshanghu
    },
    created() {
      this.addTab("商户页面", 'mainshanghu');
    }
  }
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-tabs__item {
    padding: 0 80px;
  }
</style>
