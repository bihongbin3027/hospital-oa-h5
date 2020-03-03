import React, { useReducer, useEffect } from 'react'
import { fromJS } from 'immutable'
import { WhiteSpace, Flex, List, Grid, Accordion, Tabs } from 'antd-mobile'
import FooterButtons from '@/components/footerButtons'
import { Wrapper, PageContainer, IconStyle, AvatarArea, FontMm } from '@/style'

const Item = List.Item

interface StateType {
  set: (key: string, value: any) => any
}

interface ActionType {
  type: string
  value: any
}

interface PropsType {
  history: { goBack: () => void; push: (val: string) => void }
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'changeValue':
      return state.set('value', action.value)
    default:
      return state
  }
}

function SignSituation(props: PropsType) {
  const [data] = useReducer(
    reducer,
    fromJS({
      // 头部tab
      tabsData: [{ title: '已签收（1）' }, { title: '待签收（1）' }],
      // 接收人
      receiverData: [
        {
          name: '信息科',
          children: [
            {
              name: '张三',
              userId: '',
              avatar: '',
              mainDepartment: '',
              mainDepartmentName: '',
            },
          ],
        },
      ],
      // 底部footer数据
      footData: [
        {
          icon: '',
          text: '返回',
          textColor: 'color-text-caption',
          click: () => {
            props.history.goBack()
          },
        },
      ],
    }),
  )

  const { tabsData, receiverData, footData } = data.toJS()

  const renderAvatar = (dataItem: any) => {
    return (
      <AvatarArea>
        <div className="avatar-box">
          <IconStyle width={52} height={52} radius={6} />
          <Flex>
            <FontMm className="avatar-name color-text-caption">{dataItem.name}</FontMm>
          </Flex>
        </div>
      </AvatarArea>
    )
  }

  useEffect(() => {
    document.title = '签收情况'
  }, [])

  return (
    <Wrapper footer="50">
      <PageContainer backgroundColor="#fff">
        <List className="am-list-style">
          <Tabs tabs={tabsData} />
          {receiverData.map(
            (receiverItem: { name: string; children: Array<object> }, index: string) => (
              <Accordion
                className="am-top-border-hidden am-bottom-border-hidden"
                key={index}
                defaultActiveKey="0"
              >
                <Accordion.Panel header={<FontMm>{receiverItem.name}（1）</FontMm>}>
                  <Item className="am-list-avatar">
                    <Grid
                      data={receiverItem.children}
                      columnNum={5}
                      hasLine={false}
                      renderItem={(dataItem: any) => renderAvatar(dataItem)}
                    />
                    <WhiteSpace size="sm" />
                  </Item>
                </Accordion.Panel>
              </Accordion>
            ),
          )}
        </List>
      </PageContainer>
      <FooterButtons data={footData} />
    </Wrapper>
  )
}

export default SignSituation
