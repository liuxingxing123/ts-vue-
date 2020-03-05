// store/user/getters.ts

import { GetterTree } from 'vuex'
import { FaxianState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<FaxianState, RootState> = {
  getFaxianTitle(state): string {
    return `${state.faxianTitle} 这是通过Getters获取的数据`
  }
}
