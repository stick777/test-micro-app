
/**
 * 描述：是否是 vue router 的 state 数据
 * @author Orb
 * @date 2022-06-21
 * @param {any} state:object
 * @returns {any}
 */
export const isVueRouterState = (state: object) => {
    const keys = Object.keys(state)
    if (!keys.includes('back') || !keys.includes('current')) return false
    return true
}
