class Store {
    [key: string]: any
}

let store

export default (() => {
    if (!store) {
        store = new Store()
    }
    return store
})()