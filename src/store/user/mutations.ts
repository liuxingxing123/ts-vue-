// store/user/mutations.ts

import { MutationTree } from 'vuex'
import { UserAllState } from './types'
import TYPES from "./mutations-types"

export const mutations: MutationTree<UserAllState> = {
  [TYPES.CHANGE_MOBILE](state, mobile: string) {
    state.mobile = mobile
  },
  [TYPES.SAVE_USERINFO](state, userInfo) {
    state = Object.assign(state, userInfo)
  }
}