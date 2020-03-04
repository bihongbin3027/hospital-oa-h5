import React, { useReducer } from 'react'
import { Flex } from 'antd-mobile'
import { fromJS } from 'immutable'
import { FontMd, IconStyle } from '@/style'
import { TabWrap } from './style'

interface StateType {
  set: (key: string, value: any) => any
}

interface ActionType {
  type: string
  value: any
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'changeTabIndex':
      return state.set('tabIndex', action.value)
    default:
      return state
  }
}

interface ProsType {
  tab: Array<TabType>
  change: (value: TabType) => any
}

export interface TabType {
  title: string
  icon: string
  num?: number
}

function Tabs(props: ProsType) {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      tabIndex: 0,
    }),
  )

  const { tabIndex } = data.toJS()

  const handleTabIndex = (data: TabType, index: number) => {
    dispatch({
      type: 'changeTabIndex',
      value: index,
    })
    props.change(data)
  }

  return (
    <TabWrap>
      <Flex>
        {props.tab.map(({ title, icon, num }, index: number) => (
          <Flex.Item
            className={`tab-item ${tabIndex === index ? 'active' : ''}`}
            onClick={() => handleTabIndex({ title, icon, num }, index)}
            key={index}
          >
            <Flex justify="center">
              <IconStyle className="m-r-xs" width={24} height={24} icon={icon} />
              <FontMd>{title}</FontMd>
              <FontMd className="color-text-secondary">{num}</FontMd>
            </Flex>
          </Flex.Item>
        ))}
      </Flex>
    </TabWrap>
  )
}

export const Tab = Tabs
