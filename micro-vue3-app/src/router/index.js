import { createRouter, createWebHistory } from 'vue-router'

import { isQiankun } from '../public-path'

const routes = [
    {
        path: '/',
        component: () => import('../view/login/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login/index.vue')
    },
]

const routerOptions = {
    history: createWebHistory(isQiankun ? '/app1/' : '/'),
    routes: routes
}

const router =  createRouter(routerOptions)

export default router

