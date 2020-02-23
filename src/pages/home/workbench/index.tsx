import React, { useReducer } from 'react'
import { Grid, Flex, WingBlank, WhiteSpace } from 'antd-mobile'
import { fromJS } from 'immutable'
import { PageContainer } from '../../../style'
import {
  GridWrap,
  GridIcon,
  AgentTitle,
  AgentUl,
  AgentLi,
  AgentIcon,
  AgentLiTitle,
  AgentLiStatus,
  AgentLiAid,
} from './style'

function reducer(
  state: {
    set: (key: string, value: string) => any
  },
  action: { type: string; value: string },
) {
  switch (action.type) {
    case 'changeValue':
      return state.set('key', action.value)
    default:
      return state
  }
}

function Workbench() {
  const [data] = useReducer(
    reducer,
    fromJS({
      gridData: [
        {
          text: '公文收发',
          icon:
            'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
        },
        {
          text: '考勤管理',
          icon:
            'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
        },
        {
          text: '排班管理',
          icon:
            'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
        },
        {
          text: '审批流程',
          icon:
            'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
        },
      ],
    }),
  )

  const { gridData } = data.toJS()

  return (
    <PageContainer backgroundColor="#fff">
      <WhiteSpace size="xl" />
      <WingBlank size="md">
        <GridWrap>
          <Grid
            data={gridData}
            square={false}
            hasLine={false}
            renderItem={(dataItem: any) => (
              <>
                <GridIcon src={dataItem.icon} />
                <div>{dataItem.text}</div>
              </>
            )}
          ></Grid>
        </GridWrap>
        <AgentTitle>
          待办事项<span>24</span>
        </AgentTitle>
        <AgentUl>
          <AgentLi>
            <AgentIcon src="#999" />
            <div className="agent-text">
              <Flex justify="between">
                <AgentLiTitle>公文收发</AgentLiTitle>
                <AgentLiStatus color="#aa4f4f">待签收</AgentLiStatus>
              </Flex>
              <Flex justify="between">
                <AgentLiAid>1822张山-信息科</AgentLiAid>
                <AgentLiAid>2020-02-05</AgentLiAid>
              </Flex>
            </div>
          </AgentLi>
          <AgentLi>
            <AgentIcon src="orange" />
            <div className="agent-text">
              <Flex justify="between">
                <AgentLiTitle>考勤申诉</AgentLiTitle>
                <AgentLiStatus color="#aa4f4f">待签收</AgentLiStatus>
              </Flex>
              <Flex justify="between">
                <AgentLiAid>1822张山-信息科</AgentLiAid>
                <AgentLiAid>2020-02-05</AgentLiAid>
              </Flex>
            </div>
          </AgentLi>
        </AgentUl>
      </WingBlank>
    </PageContainer>
  )
}

export default Workbench
