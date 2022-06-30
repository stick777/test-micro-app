import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import { GlobalState } from "src/store/modules/global";
import { isVueRouterState } from "../utils/index";
import { microAppsList } from '../micro/index'
import store from "../store/index"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/app1/'
    }
]

microAppsList.forEach(app => {
    routes.push({
        path: `${app.activeRule}`,
        component: () => import('../App.vue')
    })
})

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const { globalState: { login } } = store.state.global as GlobalState;
    if (!login.flag && !to.path.startsWith('/app1')) {
        next('/app1/')
    } else if (login.flag && to.path.startsWith('/app1')) {
        next('/app2/')
    } else {
        next()
    }
})

/**
 * 描述：用来修复 history.state 的数据结构
 * @author Orb
 * @date 2022-06-21
 */
router.afterEach((to, from) => {
    const state = window.history.state
    if (!isVueRouterState(state)) {
        window.history.replaceState({
            back: from.path,
            current: to.path,
            scroll: { left: 0, top: 0 },
            ...state
        },'',window.location.href)
    }
})

export default router
