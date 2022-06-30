class Store {}

let store = null

// 单例模式
export default (() => {
  if (store) return store
  store = new Store()
  return store
})()
