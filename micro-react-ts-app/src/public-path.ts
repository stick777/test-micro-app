export const isQiankun = window.__POWERED_BY_QIANKUN__

if (isQiankun) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}