import { UserState } from '@/store/module/user/reducer'

export interface IStoreState {
  user: UserState
}

export interface IAction<T> {
  type: string
  payload: T
}
