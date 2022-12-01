import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from '@/config/router.config.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routerConfig
})

export default router
