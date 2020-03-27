import { combineReducers } from 'redux'
import { IStoreState } from './types'
import { reducer as userReducer } from './module/user'

export default combineReducers<IStoreState>({
  // 用户相关
  user: userReducer,
})
