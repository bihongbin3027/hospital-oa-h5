import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  // 标签成员
  labelList: [],
})

interface Action {
  type: string
  data: Array<object>
}

function reducer(state = defaultState, action: Action): void {
  switch (action.type) {
    case constants.CHANGE_GLOBAL_LABEL_LIST:
      return state.set('labelList', action.data)
    default:
      return state
  }
}

export default reducer
