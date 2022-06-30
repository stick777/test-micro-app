import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import qiankun from 'vite-plugin-qiankun'
// import { useDynamicPublicPath } from 'vite-plugin-dynamic-publicpath'

import { name } from './package.json'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // const isDev = mode === 'development'
  const isProd = mode === 'production'

  return defineConfig({
    base: isProd ? 'http://localhost:7100/' : './',
    plugins: [
      vue(),
      legacy({
        targets: ['defaults', 'not ie <= 8']
      }),
      // useDynamicPublicPath({
      //   dynamicImportHandler: 'window.__dynamic_handler__',
      //   dynamicImportPreload: 'window.__dynamic_preload__'
      // }),
      qiankun(`${name}`, {
        useDevMode: true
      })
    ],
    server: {
      cors: true,
      port: 7100,
    },
  })
}
