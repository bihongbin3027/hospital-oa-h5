import React, { useEffect, useReducer } from 'react'
import { TabBar } from 'antd-mobile'
import { fromJS } from 'immutable'
import Workbench from './workbench/index'
import Personal from './personal/index'
import { Wrapper, FootItemIcon } from '../../style'
import { homeTabItem } from '../../utils/config'

function reducer(
  state: {
    set: (key: string, value: string) => any
  },
  action: { type: string; value: string },
) {
  switch (action.type) {
    case 'changeTitle':
      return state.set('documentTitle', action.value)
    case 'changeTabItem':
      return state.set('selectedTab', action.value)
    default:
      return state
  }
}

function Home() {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      documentTitle: '工作台',
      selectedTab: 'workbench',
    }),
  )

  const { documentTitle, selectedTab } = data.toJS()

  /**
   * @description tab界面渲染
   * @author biHongBin
   * @param {String} selectedName
   * @Date 2020-02-22 20:59:36
   */
  const renderContent = (selectedName: string) => {
    // 工作台
    if (selectedName === 'workbench') {
      return <Workbench />
    }
    // 我的
    if (selectedName === 'personal') {
      return <Personal />
    }
  }

  /**
   * @description tab图标切换操作
   * @author biHongBin
   * @param {String} selectedName
   * @param {String} title
   * @Date 2020-02-22 21:17:35
   */
  const handleSelectedIcon = (selectedName: string, title: string) => {
    if (selectedName !== 'add') {
      dispatch({
        type: 'changeTabItem',
        value: selectedName,
      })
      dispatch({
        type: 'changeTitle',
        value: title,
      })
    } else {
      console.log('点击了加号')
    }
  }

  useEffect(() => {
    document.title = documentTitle
  }, [documentTitle])

  return (
    <Wrapper>
      <TabBar tintColor="#497fc5" barTintColor="#fff">
        {homeTabItem.map(
          ({ title, selectedName, icon, selectedIcon }, index) => {
            return (
              <TabBar.Item
                title={title}
                key={index}
                selected={selectedName === selectedTab}
                icon={<FootItemIcon icon={icon} />}
                selectedIcon={<FootItemIcon icon={selectedIcon} />}
                onPress={() => handleSelectedIcon(selectedName, title)}
              >
                {renderContent(selectedName)}
              </TabBar.Item>
            )
          },
        )}
      </TabBar>
    </Wrapper>
  )
}

export default Home
