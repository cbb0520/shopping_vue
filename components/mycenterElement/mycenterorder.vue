<template>
      <el-card class="box-card" body-style="border-radius: 4px"  style="width: 900px;height: 450px;">
        <div id="mycenterorder">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="待付款" name="first">
            待付款
          </el-tab-pane>
          <el-tab-pane label="待提货" name="second">
            待提货
          </el-tab-pane>
          <el-tab-pane label="已完成" name="third">已完成</el-tab-pane>
        </el-tabs>
        </div>
      </el-card>
</template>

<script>
    export default {
        name: "mycenterorder"
    }
</script>

<style scoped>

</style>
