import React, { useReducer } from 'react'
import { Grid, Flex, WingBlank, WhiteSpace } from 'antd-mobile'
import { fromJS } from 'immutable'
import { PageContainer, GridBox, FontMd, FontXs } from '../../../style'
import {
  GridBoxBg,
  GridIcon,
  AgentBox,
  AgentUl,
  AgentLi,
  AgentIcon,
} from './style'

const normalImg =
  'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'

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
          icon: normalImg,
        },
        {
          text: '考勤管理',
          icon: normalImg,
        },
        {
          text: '排班管理',
          icon: normalImg,
        },
        {
          text: '审批流程',
          icon: normalImg,
        },
      ],
    }),
  )

  const { gridData } = data.toJS()

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
              <AgentIcon src="#888" />
              <div className="agent-text">
                <Flex justify="between">
                  <FontMd>公文收发</FontMd>
                  <FontXs className="brand-tension">待签收</FontXs>
                </Flex>
                <Flex justify="between">
                  <FontXs className="color-text-caption">
                    1822张山-信息科
                  </FontXs>
                  <FontXs className="color-text-caption">2020-02-05</FontXs>
                </Flex>
              </div>
            </AgentLi>
            <AgentLi>
              <AgentIcon src="orange" />
              <div className="agent-text">
                <Flex justify="between">
                  <FontMd>考勤申诉</FontMd>
                  <FontXs className="brand-tension">待签收</FontXs>
                </Flex>
                <Flex justify="between">
                  <FontXs className="color-text-caption">
                    1822张山-信息科
                  </FontXs>
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

export default Workbench
