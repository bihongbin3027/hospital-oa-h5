import React, { useEffect, useReducer } from 'react'
import { withRouter } from 'react-router-dom'
import { TabBar, Modal, Grid } from 'antd-mobile'
import { fromJS } from 'immutable'
import { closeModalIcon } from '@/utils/config'
import { Wrapper, IconStyle, NewlyOpenedBox, FontXs } from '@/style'

interface StateType {
  set: (key: string, value: any) => any
}

interface ActionType {
  type: string
  value: any
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'changeTitle':
      return state.set('documentTitle', action.value)
    case 'changeTabItem':
      return state.set('selectedTab', action.value)
    case 'changeNewlyOpenedModal':
      return state.set('newlyOpenedModal', action.value)
    default:
      return state
  }
}

interface TabBarArrayType {
  title: string
  icon: string
  selectedIcon: string
  components: any
}

function TabBarBox(props: any) {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      selectedTab: props.selected,
      tabBarData: props.tabBar,
      newlyOpenedModal: false,
      newlyOpenedData: props.actionSheet,
    }),
  )

  const { selectedTab, tabBarData, newlyOpenedModal, newlyOpenedData } = data.toJS()

  /**
   * @description tab界面渲染
   * @author biHongBin
   * @param {Any} components
   * @Date 2020-02-22 20:59:36
   */
  const renderContent = (components: any) => {
    return components
  }

  /**
   * @description 打开或关闭底部tabBar操作弹窗(中间+号)
   * @author biHongBin
   * @param {Boolean} data
   * @Date 2020-02-24 20:43:18
   */
  const handleNewlyOpenedModal = (data: boolean = false) => {
    dispatch({
      type: 'changeNewlyOpenedModal',
      value: data,
    })
  }

  /**
   * @description tab图标切换操作
   * @author biHongBin
   * @param {String} selectedName
   * @param {String} title
   * @Date 2020-02-22 21:17:35
   */
  const handleSelectedIcon = (title: string) => {
    if (title) {
      dispatch({
        type: 'changeTabItem',
        value: title,
      })
      dispatch({
        type: 'changeTitle',
        value: title,
      })
    } else {
      handleNewlyOpenedModal(true)
    }
  }

  /**
   * @description 跳转到指定页面
   * @author biHongBin
   * @Date 2020-02-27 11:53:27
   */
  const handleOpenRoute = (routeName: string) => {
    if (routeName) {
      props.history.push(routeName)
    }
  }

  useEffect(() => {
    document.title = selectedTab
  }, [selectedTab])

  return (
    <Wrapper>
      <TabBar tintColor="#497fc5" barTintColor="#fff">
        {tabBarData.map((item: TabBarArrayType, index: number) => {
          return (
            <TabBar.Item
              title={item.title}
              key={index}
              selected={item.title === selectedTab}
              icon={
                item.title ? (
                  <IconStyle width={24} height={24} icon={item.icon} />
                ) : (
                  <IconStyle width={32} height={32} icon={item.icon} />
                )
              }
              selectedIcon={<IconStyle width={24} height={24} icon={item.selectedIcon} />}
              onPress={() => handleSelectedIcon(item.title)}
            >
              {renderContent(item.components)}
            </TabBar.Item>
          )
        })}
      </TabBar>
      <Modal
        popup
        visible={newlyOpenedModal}
        animationType="slide-up"
        onClose={() => handleNewlyOpenedModal()}
      >
        <NewlyOpenedBox>
          <Grid
            data={newlyOpenedData}
            hasLine={false}
            columnNum={5}
            renderItem={(dataItem: any) => (
              <div
                className="am-grid-item-inner-content"
                onClick={() => handleOpenRoute(dataItem.route)}
              >
                <img className="entrance-icon" src={dataItem.icon} alt={dataItem.text} />
                <FontXs>{dataItem.text}</FontXs>
              </div>
            )}
          />
        </NewlyOpenedBox>
        <IconStyle
          width={64}
          height={64}
          icon={closeModalIcon}
          onClick={() => handleNewlyOpenedModal()}
        />
      </Modal>
    </Wrapper>
  )
}

export default withRouter(TabBarBox)
