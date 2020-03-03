import React, { useReducer, useEffect } from 'react'
import { fromJS } from 'immutable'
import { WhiteSpace, Flex, List, Grid } from 'antd-mobile'
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

function ReviewReceiver(props: PropsType) {
  const [data] = useReducer(
    reducer,
    fromJS({
      // 接收人
      receiverData: [
        {
          name: '张三',
          userId: '',
          avatar: '',
          mainDepartment: '',
          mainDepartmentName: '',
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
        {
          icon: '',
          text: '确定',
          textColor: 'brand-primary',
          click: () => {
            console.log('确定')
          },
        },
      ],
    }),
  )

  const { receiverData, footData } = data.toJS()

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
    document.title = '接收人'
  }, [])

  return (
    <Wrapper footer="50">
      <PageContainer backgroundColor="#fff">
        <List className="am-list-style">
          <Item className="am-list-header-style">
            <Flex>
              <IconStyle className="m-r-sm" width={16} height={16} />
              接收人（1）
            </Flex>
          </Item>
          <Item className="am-list-avatar">
            <WhiteSpace size="sm" />
            <Grid
              data={receiverData}
              columnNum={5}
              hasLine={false}
              renderItem={(dataItem: any) => renderAvatar(dataItem)}
            />
            <WhiteSpace size="sm" />
          </Item>
        </List>
      </PageContainer>
      <FooterButtons data={footData} />
    </Wrapper>
  )
}

export default ReviewReceiver
