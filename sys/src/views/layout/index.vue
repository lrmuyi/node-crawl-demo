<template>
  <div class="home">
    <el-container>
      <el-header>
        <header-nav></header-nav>
      </el-header>
      <el-container>
        <el-aside width="220px">
          <menu-nav></menu-nav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from './components/headerNav'
import MenuNav from './components/menuNav'
export default {
  name: 'home',
  components: {
    HeaderNav,
    MenuNav
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>
