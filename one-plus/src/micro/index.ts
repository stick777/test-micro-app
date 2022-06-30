import { registerMicroApps, start } from 'qiankun'
import globalStateActions from './initGlobalState'

import router  from '../router/index'
import store from '../store/index'

export const microAppsList = [
    {
        name: 'micro-vue3-app',
        entry: '//localhost:7100',
        container: '#mainContainer',
        activeRule: '/app1/'
    },
    {
        name: 'micro-vue2-app',
        entry: '//localhost:7200',
        container: '#mainContainer',
        activeRule: '/app2/'
    },
    {
        name: 'micro-react-ts-app',
        entry: '//localhost:7300',
        container: '#mainContainer',
        activeRule: '/app3/'
    }
]

globalStateActions.onGlobalStateChange((state, prev) => {
    console.log('main state change:', state)
    store.commit('global/SET_GLOBAL_STATE', state)
    if (!prev.login.flag && state.login.flag) {
        router.push('/app2/')
    } else if(!state.login.flag && prev.login.flag) {
        router.push('/app1/')
    }
}, true)

registerMicroApps(microAppsList)

start()
