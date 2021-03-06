import React, { useReducer } from 'react'
import { IAction } from '@/store/types'
import Workbench from './workbench/index'
import Personal from './personal/index'
import TabBarBox from '@/components/tabBarBox'
import {
  addIcon,
  workbenchIcon,
  workbenchActiveIcon,
  personalIcon,
  personalActiveIcon,
  postDocumentIcon,
  timeAttendanceIcon,
  initiateApprovalIcon,
} from '@/utils/config'

function reducer(state: any, action: IAction<any>) {
  switch (action.type) {
    case 'changeValue':
      return {
        ...state,
        changeValue: action.payload,
      }
    default:
      return state
  }
}

function Home() {
  const [data] = useReducer(reducer, {
    // 默认选中
    normalSelect: '工作台',
    // 底部tabBar数据
    tabBarData: [
      {
        components: <Workbench />,
        title: '工作台',
        icon: workbenchIcon,
        selectedIcon: workbenchActiveIcon,
      },
      {
        title: '',
        icon: addIcon,
      },
      {
        components: <Personal />,
        title: '我的',
        icon: personalIcon,
        selectedIcon: personalActiveIcon,
      },
    ],
    // 底部动作面板数据
    newlyOpenedData: [
      {
        route: '',
        icon: postDocumentIcon,
        text: '发布公文',
      },
      {
        route: '',
        icon: timeAttendanceIcon,
        text: '考勤打卡',
      },
      {
        route: '',
        icon: initiateApprovalIcon,
        text: '发起审批',
      },
    ],
  })

  const { normalSelect, tabBarData, newlyOpenedData } = data

  return (
    <TabBarBox
      selected={normalSelect}
      tabBar={tabBarData}
      actionSheet={newlyOpenedData}
    />
  )
}

export default Home
