<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #ddd">
      <el-aside width="240px" style="border-right: 1px solid #ddd">
        <nav-bar></nav-bar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components:{'nav-bar':NavBar}
}
</script>

<style lang="less">
html,body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
