import React, { useReducer } from 'react'
import { fromJS } from 'immutable'
import { Modal, List } from 'antd-mobile'

const Item = List.Item

interface PropsTypes {
  visible: boolean
  close: () => void
}

interface StateType {
  set: (key: string, value: any) => any
}

interface ActionType {
  type: string
  value: any
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'changeVisible':
      return state.set('visible', action.value)
    default:
      return state
  }
}

function AnnexModal(props: PropsTypes) {
  const [data, dispatch] = useReducer(reducer, fromJS({}))

  return (
    <Modal popup visible={props.visible} animationType="slide-up" onClose={() => props.close()}>
      <List renderHeader={() => <div>附件上传</div>}>
        <Item>拍照</Item>
        <Item>本地相册</Item>
        <Item>附件</Item>
      </List>
    </Modal>
  )
}

export default AnnexModal
