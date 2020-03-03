import React, { useReducer } from 'react'
import { fromJS } from 'immutable'
import Workbench from './workbench/index'
import Personal from './personal/index'
import TabBarBox from '@/components/tabBarBox'
import { normalImage } from '@/utils/config'

interface StateType {
  set: (key: string, value: any) => any
}

interface ActionType {
  type: string
  value: any
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'changeValue':
      return state.set('value', action.value)
    default:
      return state
  }
}

function Home() {
  const [data] = useReducer(
    reducer,
    fromJS({
      // 默认选中
      normalSelect: '工作台',
      // 底部tabBar数据
      tabBarData: [
        {
          components: <Workbench />,
          title: '工作台',
          icon:
            'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
          selectedIcon:
            'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        },
        {
          title: '',
          icon:
            'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
        },
        {
          components: <Personal />,
          title: '我的',
          icon:
            'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
          selectedIcon:
            'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        },
      ],
      // 底部动作面板数据
      newlyOpenedData: [
        {
          route: '',
          icon: normalImage,
          text: '发布公文',
        },
        {
          route: '',
          icon: normalImage,
          text: '考勤打卡',
        },
        {
          route: '',
          icon: normalImage,
          text: '发起审批',
        },
      ],
    }),
  )

  const { normalSelect, tabBarData, newlyOpenedData } = data.toJS()

  return (
    <TabBarBox
      selected={normalSelect}
      tabBar={tabBarData}
      actionSheet={newlyOpenedData}
    />
  )
}

export default Home
