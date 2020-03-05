// store/user/index.ts

import { Module } from 'vuex'
import { FaxianState } from './types'
import { RootState } from '../types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state: FaxianState = {
  count: 23,
  faxianTitle: "初始化的时候存放在state中的数据",
  faxianMsg: "初始值"
}
const namespaced = true
export const faxian: Module<FaxianState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
export default state