import { combineReducers } from 'redux-immutable'
import { reducer as userReducer } from './module/user'

export default combineReducers({
  // 用户状态
  user: userReducer,
})
