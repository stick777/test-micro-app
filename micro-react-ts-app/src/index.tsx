import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom'

import routeObjects from './router/index'
import { isQiankun } from './public-path'

import './public-path'
import store from './store';

const Router: FC = () => {
  const routes = useRoutes(routeObjects)
  return routes
}

let root: ReactDOM.Root | null
const render = (props: { [key: string]: any } = {}) => {
  const { container } = props;
  const rootDom = container ? container.querySelector('#root') : document.querySelector('#root')
  root = ReactDOM.createRoot(rootDom)
  root.render(<React.StrictMode>
    <BrowserRouter basename={ isQiankun ? '/app3/' : '/' }>
      <Router />
    </BrowserRouter>
  </React.StrictMode>);
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props: any) {
  console.log('[react16] props from main framework', props)
  store.mainProps = props
  render(props);
}

export async function unmount(props: any) {
  root?.unmount()
  root = null
  const { container } = props
  if (container) {
      container.innerHTML = ''
  }
}