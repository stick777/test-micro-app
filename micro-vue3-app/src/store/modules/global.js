
const state = {
    mainProps: {}
}

const mutations = {
    'SET_GLOBAL_MAIN_PROPS' (state, mainProps) {
        state.mainProps = mainProps
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
