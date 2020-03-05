// store/user/getters.ts

import { GetterTree } from 'vuex'
import { UserAllState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<UserAllState, RootState> = {
  fullName(state): string {
    return `${state.firstName} ${state.lastName}`
  }
}
