import { createApp } from 'vue'
import Antd from 'ant-design-vue'

import router  from './router'
import store from './store'

import App from './App.vue'

import './micro/index'

import 'normalize.css/normalize.css'
import 'ant-design-vue/dist/antd.css'

createApp(App)
    .use(Antd)
    .use(store)
    .use(router)
    .mount('#mainApp')
