import Vue from 'vue'
import Router from 'vue-router'
import { BLOG_INDEX } from '@/configs/routesName'

Vue.use(Router)

const routes = [
  { path: '/', redirect: { name: BLOG_INDEX } },
  require('@/views/blog/router').default
]

export default new Router({
  mode: 'history',
  routes
})
