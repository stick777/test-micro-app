import { QiankunGlobalState } from "src/micro/initGlobalState";

export interface GlobalState {
    globalState: QiankunGlobalState;
}

const state: GlobalState = {
    globalState: {} as QiankunGlobalState
}

const mutations = {
    'SET_GLOBAL_STATE': (state: GlobalState, globalState: QiankunGlobalState) => {
        state.globalState = globalState
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
