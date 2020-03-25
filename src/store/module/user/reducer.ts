import { fromJS } from 'immutable'
import { IAction } from '@/store/types'
import * as constants from './constants'
import { loadFromLocal } from '@/utils'

export interface UserState {
  token: string
}

const defaultState = fromJS({
  token: loadFromLocal('h5', 'wxToken'),
})

function reducer(state = defaultState, action: IAction<any>) {
  switch (action.type) {
    case constants.CHANGE_GLOBAL_LABEL_LIST:
      return state.set('labelList', action.payload)
    default:
      return state
  }
}

export default reducer
