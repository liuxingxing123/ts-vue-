// store/user/actions.ts

import { FaxianState, FaxianInterface } from './types'
import { ActionTree } from 'vuex'
import { RootState } from '../types'
import TYPES from "./mutations-types"

export const actions: ActionTree<FaxianState, RootState> = {
  getFaxianMsgData({ commit }): void {
    setTimeout(() => {
      const faxianMsg: FaxianInterface = {
        faxianMsg: "通过action提交的数据  放置在定时器内部"
      }
      commit(TYPES.ACTION_GETMSG, faxianMsg)
    }, 2000);
  }
}