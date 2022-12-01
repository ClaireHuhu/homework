<template>
  <div class="menu-contener">
    <div v-for="menu in menus" :key="menu.name" class="menu-item">
      <router-link :to="menu.path">
        <div :class="{active:$route.name==menu.name}" class="menu-content">
          <i :alt="menu.meta.displayName" :class="menu.meta.icon" style="font-size: 26px;"></i>
          <span>{{menu.meta.displayName}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import routerConfig from '@/config/router.config.js'

export default {
  data:function(){
    return {
      menus: []
    }
  },
  created(){
    this.menus = routerConfig.filter(item => item.name != 'Home')
  }
}
</script>

<style lang="less">
.menu-contener {
  font-size: 14px;
  .menu-item {
    border-bottom: 1px solid #ddd;
    a,a:link,a:focus,a:visited,a:hover,a:focus,a:active {
      text-decoration: none;
      color: #616161;
    }
    .menu-content {
      border-left: 5px solid transparent;
      height: 40px;
      font-weight: bolder;
      padding-left: 10px;
      display: flex;
      align-items: center;
      span {
        margin-left: 6px;
      }
      &:hover {
        background: #f0f0f0;
      }
    }
    .active {
      color:#3561F4;
      border-left: 5px solid;
    }
  }

}
</style>