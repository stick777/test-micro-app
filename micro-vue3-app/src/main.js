import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';

import store from './store/index'
import router from './router/index'

import App from './App.vue'

import { isQiankun } from './public-path'

import './public-path'

let instance = null
const render = (props = {}) => {
    const { container } = props
    instance = createApp(App)
    instance
        .use(Antd)
        .use(router)
        .use(store)
        .mount(container ? container.querySelector('#app') : '#app')
}

if (!isQiankun) {
    render()
}

renderWithQiankun({
    mount(props) {
        console.log('[vue] props from main framework', props);
        store.commit('global/SET_GLOBAL_MAIN_PROPS', props)
        render(props);
    },
    bootstrap() {
        console.log('[vue] vue app bootstrapped');
    },
    unmount(ctx) {
        instance.unmount();
        instance = null;
        const { container } = ctx
        if (container) {
            container.innerHTML = ''
        }
    }
})
