import React, { useEffect, useReducer } from 'react'
import { TabBar, Modal, Grid, Icon } from 'antd-mobile'
import { fromJS } from 'immutable'
import Workbench from './workbench/index'
import Personal from './personal/index'
import { Wrapper, FootItemIcon, NewlyOpenedBox } from '../../style'
import { homeTabItem } from '../../utils/config'

const normalImg =
  'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'

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

function Home() {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      documentTitle: '工作台',
      selectedTab: 'workbench',
      newlyOpenedModal: false,
      newlyOpenedData: [
        {
          icon: normalImg,
          text: '发布公文',
        },
        {
          icon: normalImg,
          text: '考勤打卡',
        },
        {
          icon: normalImg,
          text: '发起审批',
        },
      ],
    }),
  )

  const {
    documentTitle,
    selectedTab,
    newlyOpenedModal,
    newlyOpenedData,
  } = data.toJS()

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
      handleNewlyOpenedModal(true)
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

export default Home
