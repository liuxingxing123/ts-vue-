// store/user/mutations.ts

import { MutationTree } from 'vuex'
import { FaxianState } from './types'
import TYPES from "./mutations-types"

export const mutations: MutationTree<FaxianState> = {
  [TYPES.ACTION_GETMSG](state, faxianMsg: string) {
    state = Object.assign(state, faxianMsg)
  },
  [TYPES.ADD_COUNT](state) {
    state.count++
  }
}