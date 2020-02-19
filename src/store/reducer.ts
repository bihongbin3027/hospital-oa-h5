import { combineReducers } from 'redux-immutable'
import { reducer as globalReducer } from './global'

export default combineReducers({
  // 全局状态
  globalData: globalReducer,
})
