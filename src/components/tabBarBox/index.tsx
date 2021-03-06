import React, { useEffect, useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import { TabBar, Modal, Grid } from 'antd-mobile'
import { IAction } from '@/store/types'
import { closeModalIcon } from '@/utils/config'
import { Wrapper, IconStyle, NewlyOpenedBox, FontXs } from '@/style'

interface TabBarArrayType {
  title: string
  icon: string
  selectedIcon: string
  components: React.FC
}

interface PropType {
  selected: string
  tabBar: []
  actionSheet: []
}

function reducer(state: any, action: IAction<any>) {
  switch (action.type) {
    case 'changeTitle':
      return {
        ...state,
        documentTitle: action.payload,
      }
    case 'changeTabItem':
      return {
        ...state,
        selectedTab: action.payload,
      }
    case 'changeNewlyOpenedModal':
      return {
        ...state,
        newlyOpenedModal: action.payload,
      }
    default:
      return state
  }
}

function TabBarBox(props: PropType) {
  const history = useHistory()
  const [data, dispatch] = useReducer(reducer, {
    selectedTab: props.selected,
    tabBarData: props.tabBar,
    newlyOpenedModal: false,
    newlyOpenedData: props.actionSheet,
  })

  const { selectedTab, tabBarData, newlyOpenedModal, newlyOpenedData } = data

  /**
   * @description tab界面渲染
   * @author biHongBin
   * @param {Any} components
   * @Date 2020-02-22 20:59:36
   */
  const renderContent = (components: React.FC) => {
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
      payload: data,
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
        payload: title,
      })
      dispatch({
        type: 'changeTitle',
        payload: title,
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
      history.push(routeName)
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
              selectedIcon={
                <IconStyle width={24} height={24} icon={item.selectedIcon} />
              }
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
                <img
                  className="entrance-icon"
                  src={dataItem.icon}
                  alt={dataItem.text}
                />
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

export default React.memo(TabBarBox)
