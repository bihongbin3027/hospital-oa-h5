import React, { useReducer } from 'react'
import { Flex } from 'antd-mobile'
import { IAction } from '@/store/types'
import { FontMd, IconStyle } from '@/style'
import { TabWrap } from './style'

function reducer(state: any, action: IAction<any>) {
  switch (action.type) {
    case 'changeTabIndex':
      return {
        ...state,
        tabIndex: action.payload,
      }
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
  const [data, dispatch] = useReducer(reducer, {
    tabIndex: 0,
  })

  const { tabIndex } = data

  const handleTabIndex = (data: TabType, index: number) => {
    dispatch({
      type: 'changeTabIndex',
      payload: index,
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
              <IconStyle
                className="m-r-xs"
                width={24}
                height={24}
                icon={icon}
              />
              <FontMd>{title}</FontMd>
              <FontMd className="color-text-secondary">{num}</FontMd>
            </Flex>
          </Flex.Item>
        ))}
      </Flex>
    </TabWrap>
  )
}

export default Tabs
