import React, { useReducer } from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, Flex, WingBlank, WhiteSpace } from 'antd-mobile'
import { fromJS } from 'immutable'
import {
  officialDocumentIcon,
  attendanceIcon,
  scheduleIcon,
  approvalIcon,
  adTypeIcon,
  odTypeIcon,
} from '@/utils/config'
import { PageContainer, GridBox, FontMd, FontXs, IconStyle } from '@/style'
import { GridBoxBg, GridIcon, AgentBox, AgentUl, AgentLi } from './style'

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
      return state.set('key', action.value)
    default:
      return state
  }
}

function Workbench(props: any) {
  const [data] = useReducer(
    reducer,
    fromJS({
      gridData: [
        {
          route: '/clerical-board',
          text: '公文收发',
          icon: officialDocumentIcon,
        },
        {
          text: '考勤管理',
          icon: attendanceIcon,
        },
        {
          text: '排班管理',
          icon: scheduleIcon,
        },
        {
          text: '审批流程',
          icon: approvalIcon,
        },
      ],
    }),
  )

  const { gridData } = data.toJS()

  /**
   * @description 首页头部菜单入口跳转
   * @author biHongBin
   * @param {Any} el
   * @Date 2020-02-25 17:12:31
   */
  const gridMenuClick = (el: any) => {
    if (el.route) {
      props.history.push(el.route)
    }
  }

  return (
    <PageContainer backgroundColor="#fff">
      <WhiteSpace size="xl" />
      <WingBlank size="md">
        <GridBoxBg>
          <GridBox>
            <Grid
              data={gridData}
              square={false}
              hasLine={false}
              onClick={el => gridMenuClick(el)}
              renderItem={(dataItem: any) => (
                <>
                  <GridIcon src={dataItem.icon} />
                  <div>{dataItem.text}</div>
                </>
              )}
            ></Grid>
          </GridBox>
        </GridBoxBg>
        <AgentBox>
          <FontMd className="agent-title">
            待办事项
            <FontXs className="agent-num color-text-caption" display="inline">
              24
            </FontXs>
          </FontMd>
          <AgentUl>
            <AgentLi>
              <IconStyle className="m-r-sm" width={28} height={28} icon={adTypeIcon} />
              <div className="agent-text">
                <Flex justify="between">
                  <FontMd>公文收发</FontMd>
                  <FontXs className="brand-tension">待签收</FontXs>
                </Flex>
                <Flex justify="between">
                  <FontXs className="color-text-caption">1822张山-信息科</FontXs>
                  <FontXs className="color-text-caption">2020-02-05</FontXs>
                </Flex>
              </div>
            </AgentLi>
            <AgentLi>
              <IconStyle className="m-r-sm" width={28} height={28} icon={odTypeIcon} />
              <div className="agent-text">
                <Flex justify="between">
                  <FontMd>考勤申诉</FontMd>
                  <FontXs className="brand-tension">待签收</FontXs>
                </Flex>
                <Flex justify="between">
                  <FontXs className="color-text-caption">1822张山-信息科</FontXs>
                  <FontXs className="color-text-caption">2020-02-05</FontXs>
                </Flex>
              </div>
            </AgentLi>
          </AgentUl>
        </AgentBox>
      </WingBlank>
    </PageContainer>
  )
}

export default withRouter(Workbench)
