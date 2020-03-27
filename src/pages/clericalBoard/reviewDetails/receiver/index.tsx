import React, { useReducer, useEffect } from 'react'
import { WhiteSpace, Flex, List, Grid } from 'antd-mobile'
import { PageProps } from '@/typings'
import { IAction } from '@/store/types'
import FooterButtons from '@/components/footerButtons'
import { receiverListIcon, backFootIcon } from '@/utils/config'
import { Wrapper, PageContainer, IconStyle, AvatarArea, FontMm } from '@/style'

const Item = List.Item

function reducer(state: any, action: IAction<any>) {
  switch (action.type) {
    case 'changeValue':
      return {
        ...state,
        changeValue: action.payload,
      }
    default:
      return state
  }
}

function ReviewReceiver(props: PageProps) {
  const [data] = useReducer(reducer, {
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
        icon: backFootIcon,
        text: '返回',
        textColor: 'color-text-caption',
        click: () => {
          props.history.goBack()
        },
      },
    ],
  })

  const { receiverData, footData } = data

  const renderAvatar = (dataItem: any) => {
    return (
      <AvatarArea>
        <div className="avatar-box">
          <IconStyle width={52} height={52} radius={6} />
          <Flex>
            <FontMm className="avatar-name color-text-caption">
              {dataItem.name}
            </FontMm>
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
              <IconStyle
                className="m-r-sm"
                width={20}
                height={20}
                icon={receiverListIcon}
              />
              接收人（1）
            </Flex>
          </Item>
          <Item className="am-list-avatar">
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
