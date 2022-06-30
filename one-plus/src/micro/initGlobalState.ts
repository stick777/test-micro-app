import { initGlobalState, MicroAppStateActions } from "qiankun"

interface QiankunGlobalStateLogin {
    flag: boolean;
    info: { [kes: string]: any } | null
}

export interface QiankunGlobalState {
    login: QiankunGlobalStateLogin;
}

const globalState: QiankunGlobalState = { login: { flag: false, info: null } }

const actions: MicroAppStateActions = initGlobalState(globalState)

export default actions
