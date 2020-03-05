// store/user/types.ts

export interface UserState {
  firstName: string
  lastName: string
  mobile: string
}

export interface UserAllState extends UserState {
  testMsg: string
}