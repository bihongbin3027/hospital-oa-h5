import React, { useReducer } from 'react'
import { fromJS } from 'immutable'
import {
  List,
  Flex,
  Grid,
  TextareaItem,
  InputItem,
  WhiteSpace,
  WingBlank,
} from 'antd-mobile'
import FooterButtons from '../../../../components/footerButtons'
import {
  Wrapper,
  PageContainer,
  IconStyle,
  FontMm,
  AvatarArea,
} from '../../../../style'

const Item = List.Item

interface StateType {
  set: (key: string, value: any) => any
}

interface ActionType {
  type: string
  value: any
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'changeInputTheme':
      return state.set('inputTheme', action.value)
    case 'changeInputThemeContent':
      return state.set('inputThemeContent', action.value)
    default:
      return state
  }
}

function DraftCreate() {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      inputTheme: '', // 主题关键字
      inputThemeContent: '', // 主题内容
      // 审批人
      approverData: [
        {
          name: '张三',
          userId: '',
          avatar: '',
          mainDepartment: '',
          mainDepartmentName: '',
        },
        {
          name: '张三',
          userId: '',
          avatar: '',
          mainDepartment: '',
          mainDepartmentName: '',
        },
        {
          name: '张三',
          userId: '',
          avatar: '',
          mainDepartment: '',
          mainDepartmentName: '',
        },
        {
          name: '张三',
          userId: '',
          avatar: '',
          mainDepartment: '',
          mainDepartmentName: '',
        },
        {
          name: '张三',
          userId: '',
          avatar: '',
          mainDepartment: '',
          mainDepartmentName: '',
        },
        {
          name: '张三',
          userId: '',
          avatar: '',
          mainDepartment: '',
          mainDepartmentName: '',
        },
        {
          type: 'add',
          icon: '',
        },
      ],
      // 底部footer数据
      footData: [
        {
          icon: '',
          text: '存为草稿',
          textColor: 'color-text-caption',
          click: () => {
            console.log('存为草稿')
          },
        },
        {
          icon: '',
          text: '发布',
          textColor: 'brand-primary',
          click: () => {
            console.log('发布')
          },
        },
      ],
    }),
  )

  const { inputTheme, inputThemeContent, approverData, footData } = data.toJS()

  /**
   * @description 设置主题关键字
   * @author biHongBin
   * @param {String} value
   * @Date 2020-02-27 20:08:42
   */
  const changeInputTheme = (value?: string) => {
    dispatch({
      type: 'changeInputTheme',
      value: value,
    })
  }

  /**
   * @description 设置主题内容
   * @author biHongBin
   * @param {String} value
   * @Date 2020-02-27 20:08:54
   */
  const changeInputThemeContent = (value?: string) => {
    dispatch({
      type: 'changeInputThemeContent',
      value: value,
    })
  }

  /**
   * @description 渲染头像和区分添加人员按钮
   * @author biHongBin
   * @param {type}
   * @Date 2020-02-27 21:28:21
   */
  const renderAvatar = (dataItem: any) => {
    if (dataItem.type === 'add') {
      return (
        <AvatarArea>
          <div className="avatar-box add-avatar">
            <IconStyle width={32} height={32} radius={4} />
          </div>
        </AvatarArea>
      )
    } else {
      return (
        <AvatarArea>
          <div className="avatar-box">
            <IconStyle className="block-delete" width={21} height={21} />
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
  }

  return (
    <Wrapper footer="50">
      <PageContainer>
        <List className="am-list-style">
          <Item
            className="am-list-header-style"
            extra={<FontMm>行政类</FontMm>}
            arrow="horizontal"
          >
            <Flex>
              <IconStyle className="m-r-10" width={19} height={19} />
              公文类型
            </Flex>
          </Item>
          <Item>
            <InputItem
              className="am-list-input"
              value={inputTheme}
              onChange={value => changeInputTheme(value)}
              maxLength={50}
              placeholder="请输入主题…（50个字）"
            />
            <TextareaItem
              className="am-list-textarea"
              value={inputThemeContent}
              onChange={value => changeInputThemeContent(value)}
              placeholder="请输入主题内容"
              rows={4}
              count={100}
            />
          </Item>
        </List>
        <WhiteSpace />
        <List className="am-list-style">
          <Item className="am-list-header-style" arrow="horizontal">
            <Flex>
              <IconStyle className="m-r-10" width={19} height={19} />
              添加附件
            </Flex>
          </Item>
          <Item>
            <WingBlank>
              <WhiteSpace />
              <Flex>
                <FontMm className="color-text-caption m-r-10">
                  关于疫情防疫部署方案.docx
                </FontMm>
                <FontMm className="color-text-delete">删除</FontMm>
              </Flex>
              <WhiteSpace />
              <Flex>
                <FontMm className="color-text-caption m-r-10">
                  关于疫情防疫部署方案.docx
                </FontMm>
                <FontMm className="color-text-delete">删除</FontMm>
              </Flex>
              <WhiteSpace />
              <Flex>
                <FontMm className="color-text-caption m-r-10">
                  关于疫情防疫部署方案.docx
                </FontMm>
                <FontMm className="color-text-delete">删除</FontMm>
              </Flex>
              <WhiteSpace />
            </WingBlank>
          </Item>
        </List>
        <WhiteSpace />
        <List className="am-list-style">
          <Item className="am-list-header-style">
            <Flex>
              <IconStyle className="m-r-10" width={19} height={19} />
              审批人
            </Flex>
          </Item>
          <Item className="am-list-avatar">
            <WhiteSpace size="sm" />
            <Grid
              data={approverData}
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

export default DraftCreate
