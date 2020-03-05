// store/types.ts

import { UserState } from './user/types'
import { FaxianState } from './faxian/types'

export interface RootState {
  user: UserState
  faxian: FaxianState
}