// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import { isQiankun } from './public-path'

import './public-path'

Vue.config.productionTip = false

let instance
const render = (props = {}) => {
  const { container } = props;
  /* eslint-disable no-new */
  instance = new Vue({
    router,
    components: { App },
    template: '<App/>'
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!isQiankun) render()

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  console.log('[vue] props from main framework', props)
  props.onGlobalStateChange((state, prev) => {
    store.info = state.login.info
  }, true)
  render(props);
}
export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
