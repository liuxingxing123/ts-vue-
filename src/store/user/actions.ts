// store/user/actions.ts

import { UserState } from './types'
import { ActionTree } from 'vuex'
import { RootState } from '../types'
import TYPES from "./mutations-types"

export const actions: ActionTree<UserState, RootState> = {
  fetchData({ commit }): void {
    const userInfo: UserState = {
      firstName: 'Hello',
      lastName: 'World',
      mobile: '1235678911'
    }
    commit(TYPES.SAVE_USERINFO, userInfo)
  }
}