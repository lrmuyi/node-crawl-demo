<template>
  <div class="menu-nav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="/home/top250" >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Top 250</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/top250/list" >电影列表</el-menu-item>
              <el-menu-item index="/home/top250/new">添加一条</el-menu-item>
              <el-menu-item index="1-3">删除一条</el-menu-item>
              <el-menu-item index="1-4">修改一条</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-nav{
    margin-top: 20px;
    height: 100vh;
}
</style>
