import React, { useReducer } from 'react'
import {
  List,
  Flex,
  Grid,
  TextareaItem,
  InputItem,
  WhiteSpace,
  WingBlank,
  Modal,
} from 'antd-mobile'
import { IAction } from '@/store/types'
import { PageProps } from '@/typings'
import AnnexModal from '@/components/annexModal'
import FooterButtons from '@/components/footerButtons'
import SelectTypeModal from '@/components/selectTypeModal'
import {
  personTagIcon,
  annexListIcon,
  reviewListIcon,
  avatarCloseIcon,
  avatarAddIcon,
  draftFootIcon,
  releaseFootIcon,
  receiverListIcon,
} from '@/utils/config'
import { Wrapper, PageContainer, IconStyle, FontMm, AvatarArea } from '@/style'

const Item = List.Item
const alert = Modal.alert

function reducer(state: any, action: IAction<any>) {
  switch (action.type) {
    case 'changeSelectModalTitle':
      return {
        ...state,
        selectModalTitle: action.payload,
      }
    case 'changeSelectModalData':
      return {
        ...state,
        selectModalData: action.payload,
      }
    case 'changeSelectModalVisible':
      return {
        ...state,
        selectModalVisible: action.payload,
      }
    case 'changeTypeValue':
      return {
        ...state,
        typeValue: action.payload,
      }
    case 'changeInputTheme':
      return {
        ...state,
        inputTheme: action.payload,
      }
    case 'changeInputThemeContent':
      return {
        ...state,
        inputThemeContent: action.payload,
      }
    case 'changeAnnexVisible':
      return {
        ...state,
        annexVisible: action.payload,
      }
    default:
      return state
  }
}

function PostCreate(props: PageProps) {
  const [data, dispatch] = useReducer(reducer, {
    selectModalTitle: {}, // 模板和类型弹窗标题
    selectModalData: [], // 需要渲染的值
    selectModalVisible: false, // 模板和类型弹窗打开关闭
    // 类型数据
    typeData: [
      {
        id: '1',
        name: '类型一',
      },
      {
        id: '2',
        name: '类型二',
      },
    ],
    // 当前类型值
    typeValue: {
      id: '1',
      name: '类型一',
    },
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
        type: 'add',
        icon: '',
      },
    ],
    annexVisible: false, // 附件弹窗
    // 底部footer数据
    footData: [
      {
        icon: draftFootIcon,
        text: '存为草稿',
        textColor: 'color-text-caption',
        click: () => {
          alert('提示', '是否存为草稿？', [
            {
              text: '取消',
              onPress: () => {
                props.history.goBack()
              },
            },
            {
              text: '确认',
              onPress: () => {
                console.log('确认')
              },
            },
          ])
        },
      },
      {
        icon: releaseFootIcon,
        text: '发布',
        textColor: 'brand-primary',
        click: () => {
          console.log('发布')
        },
      },
    ],
  })

  const {
    selectModalTitle,
    selectModalVisible,
    typeData,
    typeValue,
    selectModalData,
    inputTheme,
    inputThemeContent,
    approverData,
    annexVisible,
    footData,
  } = data

  /**
   * @description 设置主题关键字
   * @author biHongBin
   * @param {String} value
   * @Date 2020-02-27 20:08:42
   */
  const changeInputTheme = (value?: string) => {
    dispatch({
      type: 'changeInputTheme',
      payload: value,
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
      payload: value,
    })
  }

  /**
   * @description 打开公文类型弹窗
   * @author biHongBin
   * @Date 2020-02-28 15:52:21
   */
  const handleTypeSelect = () => {
    dispatch({
      type: 'changeSelectModalTitle',
      payload: {
        title: '请选择公文类型',
        value: 'type',
      },
    })
    dispatch({
      type: 'changeSelectModalData',
      payload: typeData,
    })
    dispatch({
      type: 'changeSelectModalVisible',
      payload: true,
    })
  }

  /**
   * @description 选择模板和类型确认后的操作
   * @author biHongBin
   * @Date 2020-02-28 16:01:43
   */
  const handleConfirmSelectModal = (data: object) => {
    const { value } = selectModalTitle
    if (value === 'type') {
      dispatch({
        type: 'changeTypeValue',
        payload: data,
      })
    }
  }

  /**
   * @description 关闭选择公文类型和模板弹窗
   * @author biHongBin
   * @Date 2020-02-28 15:53:22
   */
  const handleCancelSelectModal = () => {
    dispatch({
      type: 'changeSelectModalVisible',
      payload: false,
    })
  }

  /**
   * @description 选择接收人
   * @author biHongBin
   * @Date 2020-03-03 15:29:02
   */
  const handleReceiverSelect = () => {
    props.history.push('/clerical-post-receiver')
  }

  /**
   * @description 打开或关闭选择附件弹窗
   * @author biHongBin
   * @param { Boolean } data
   * @Date 2020-03-04 11:35:01
   */
  const handleAnnexVisible = (data: boolean = false) => {
    dispatch({
      type: 'changeAnnexVisible',
      payload: data,
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
            <IconStyle width={32} height={32} radius={4} icon={avatarAddIcon} />
          </div>
        </AvatarArea>
      )
    } else {
      return (
        <AvatarArea>
          <div className="avatar-box">
            <IconStyle
              className="block-delete"
              width={24}
              height={24}
              icon={avatarCloseIcon}
            />
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
            extra={<FontMm>{typeValue.name}</FontMm>}
            onClick={handleTypeSelect}
            arrow="horizontal"
          >
            <Flex>
              <IconStyle
                className="m-r-sm"
                width={20}
                height={20}
                icon={personTagIcon}
              />
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
          <Item
            className="am-list-header-style"
            arrow="horizontal"
            onClick={() => handleAnnexVisible(true)}
          >
            <Flex>
              <IconStyle
                className="m-r-sm"
                width={20}
                height={20}
                icon={annexListIcon}
              />
              添加附件
            </Flex>
          </Item>
          <Item>
            <WingBlank>
              <WhiteSpace />
              <Flex>
                <FontMm className="color-text-caption m-r-sm">
                  关于疫情防疫部署方案.docx
                </FontMm>
                <FontMm className="color-text-delete">删除</FontMm>
              </Flex>
              <WhiteSpace />
              <Flex>
                <FontMm className="color-text-caption m-r-sm">
                  关于疫情防疫部署方案.docx
                </FontMm>
                <FontMm className="color-text-delete">删除</FontMm>
              </Flex>
              <WhiteSpace />
              <Flex>
                <FontMm className="color-text-caption m-r-sm">
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
          <Item
            className="am-list-header-style"
            arrow="horizontal"
            extra={<FontMm>5人</FontMm>}
            onClick={handleReceiverSelect}
          >
            <Flex>
              <IconStyle
                className="m-r-sm"
                width={20}
                height={20}
                icon={receiverListIcon}
              />
              接收人
            </Flex>
          </Item>
        </List>
        <WhiteSpace />
        <List className="am-list-style">
          <Item className="am-list-header-style">
            <Flex>
              <IconStyle
                className="m-r-sm"
                width={20}
                height={20}
                icon={reviewListIcon}
              />
              提交审批
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
        <WhiteSpace />
      </PageContainer>
      <AnnexModal
        visible={annexVisible}
        close={handleAnnexVisible}
        success={() => {}}
      />
      <SelectTypeModal
        title={selectModalTitle.title}
        visible={selectModalVisible}
        data={selectModalData}
        confirm={data => {
          handleConfirmSelectModal(data)
        }}
        cancel={handleCancelSelectModal}
      />
      <FooterButtons data={footData} />
    </Wrapper>
  )
}

export default PostCreate
