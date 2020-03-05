// store/index.ts

import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { user } from './user'
import { faxian } from './faxian'
Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    user,
    faxian
  }
}
export default new Vuex.Store<RootState>(store)
