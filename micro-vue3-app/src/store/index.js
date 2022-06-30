import { createStore } from 'vuex'

const modulesFiles = import.meta.globEager('./modules/*.js')

const modules = (function(files){
    const modules = {}
    for (const filePath in files) {
        console.time('arr:')
        const fileName = filePath.split('/').pop()?.split('.').shift()
        console.timeEnd('arr:')

        // 测试后发现，正则表达式的执行效率非常不稳定
        // 一半会和用数组处理差不多或者好一点
        // 一半执行效率会远超数组
        // console.time('reg:')
        // const _fileName = filePath.replace(/(.\/modules\/|.ts)/g, '')
        // console.timeEnd('reg:')

        modules[fileName] = files[filePath].default
    }
    return modules
}(modulesFiles))

export default createStore({
    modules
})