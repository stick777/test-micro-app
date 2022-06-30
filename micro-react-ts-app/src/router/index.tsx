import React, { lazy, Suspense, LazyExoticComponent } from "react"
import { Navigate, RouteObject } from "react-router-dom"

export type RouterObject = {
    path: string,
    component: LazyExoticComponent<any>,
    children?: RouterObject[]
}


const router: RouterObject[] = [
    {
        path: '/',
        component: lazy(() => import('../App')),
        children: [
            {
                path: 'home',
                component: lazy(() => import('../view/home/index'))
            },
            {
                path: 'children',
                component: lazy(() => import('../view/children/index'))
            }
        ],
    }
]

const parseRouter: (router: RouterObject[]) => RouteObject[] = (router: RouterObject[]) => {
    return router.map(item => ({
        path: item.path,
        element: (
            <Suspense fallback={<div> loading... </div>}>
                <item.component />
            </Suspense>
        ),
        children: item.children && parseRouter(item.children)
    }))
}

const routerConfig = parseRouter(router)

export default routerConfig
