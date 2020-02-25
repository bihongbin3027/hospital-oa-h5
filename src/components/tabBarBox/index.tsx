import React, { useEffect, useReducer } from 'react'
import { TabBar, Modal, Grid, Icon } from 'antd-mobile'
import { fromJS } from 'immutable'
import { Wrapper, FootItemIcon, NewlyOpenedBox } from '../../style'

function reducer(
  state: {
    set: (key: string, value: any) => any
  },
  action: { type: string; value: any },
) {
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

function TabBarBox(props: {
  selected: string
  tabBar: Array<object>
  actionSheet: Array<object>
}) {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      selectedTab: props.selected,
      tabBarData: props.tabBar,
      newlyOpenedModal: false,
      newlyOpenedData: props.actionSheet,
    }),
  )

  const {
    selectedTab,
    tabBarData,
    newlyOpenedModal,
    newlyOpenedData,
  } = data.toJS()

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

  useEffect(() => {
    document.title = selectedTab
  }, [selectedTab])

  return (
    <Wrapper>
      <TabBar tintColor="#497fc5" barTintColor="#fff">
        {tabBarData.map((item: any, index: number) => {
          return (
            <TabBar.Item
              title={item.title}
              key={index}
              selected={item.title === selectedTab}
              icon={<FootItemIcon icon={item.icon} />}
              selectedIcon={<FootItemIcon icon={item.selectedIcon} />}
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
              <div className="am-grid-item-inner-content">
                <img
                  className="entrance-icon"
                  src={dataItem.icon}
                  alt={dataItem.text}
                />
                <div className="am-grid-text">{dataItem.text}</div>
              </div>
            )}
          />
        </NewlyOpenedBox>
        <Icon
          className="cross-circle"
          type="cross-circle"
          size="lg"
          color="#bbb"
          onClick={() => handleNewlyOpenedModal()}
        />
      </Modal>
    </Wrapper>
  )
}

export default TabBarBox
