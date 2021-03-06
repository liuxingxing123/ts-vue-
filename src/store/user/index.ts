// store/user/index.ts

import { Module } from 'vuex'
import { UserAllState } from './types'
import { RootState } from '../types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state: UserAllState = {
  firstName: '',
  lastName: '',
  mobile: '',
  testMsg: '测试通过直接在state里面给定数据 @state能否拿到'
}
const namespaced = true
export const user: Module<UserAllState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
export default state