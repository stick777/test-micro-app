import Vue from 'vue'
import Router from 'vue-router'

import { isQiankun } from '../public-path'

import home from '../components/home/index.vue'
import children from '../components/children/index.vue'

Vue.use(Router)

const router = new Router({
  base: isQiankun ? '/app2/' : '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/home/index.vue')
      // component: home
    },
    {
      path: '/children',
      name: 'children',
      component: () => import('../components/children/index.vue')
      // component: children
    }
  ],
})

export default router

