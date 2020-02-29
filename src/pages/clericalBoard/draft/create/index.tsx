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
  Switch,
  Modal,
} from 'antd-mobile'
import FooterButtons from '../../../../components/footerButtons'
import SelectTypeModal from '../../../../components/selectTypeModal'
import {
  Wrapper,
  PageContainer,
  IconStyle,
  FontMm,
  AvatarArea,
} from '../../../../style'

const Item = List.Item
const alert = Modal.alert

interface StateType {
  set: (key: string, value: any) => any
}

interface ActionType {
  type: string
  value: any
}

interface PropsType {
  history: { goBack: () => void }
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'changeSelectModalTitle':
      return state.set('selectModalTitle', action.value)
    case 'changeSelectModalData':
      return state.set('selectModalData', action.value)
    case 'changeSelectModalVisible':
      return state.set('selectModalVisible', action.value)
    case 'changeTemplateValue':
      return state.set('templateValue', action.value)
    case 'changeTypeValue':
      return state.set('typeValue', action.value)
    case 'changeSymbolSwitch':
      return state.set('symbolSizeSwitch', action.value)
    case 'changeInputSymbolSize':
      return state.set('symbolSizeValue', action.value)
    case 'changeInputTheme':
      return state.set('inputTheme', action.value)
    case 'changeInputThemeContent':
      return state.set('inputThemeContent', action.value)
    default:
      return state
  }
}

function DraftCreate(props: PropsType) {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      selectModalTitle: {}, // 模板和类型弹窗标题
      selectModalData: [], // 需要渲染的值
      selectModalVisible: false, // 模板和类型弹窗打开关闭
      // 模板数据
      templateData: [
        {
          id: '1',
          name: '模板一',
        },
        {
          id: '2',
          name: '模板二',
        },
      ],
      // 当前模板值
      templateValue: {
        id: '1',
        name: '模板一',
      },
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
      symbolSizeValue: '', // 文号
      symbolSizeSwitch: false, // 文号开关
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
      // 底部footer数据
      footData: [
        {
          icon: '',
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

  const {
    selectModalTitle,
    selectModalVisible,
    templateData,
    templateValue,
    typeData,
    typeValue,
    selectModalData,
    symbolSizeValue,
    symbolSizeSwitch,
    inputTheme,
    inputThemeContent,
    approverData,
    footData,
  } = data.toJS()

  /**
   * @description 设置文号开关
   * @author biHongBin
   * @Date 2020-02-28 15:20:10
   */
  const changeSymbolSwitch = () => {
    dispatch({
      type: 'changeSymbolSwitch',
      value: !symbolSizeSwitch,
    })
  }

  /**
   * @description 设置文号大小
   * @author biHongBin
   * @param {String} value
   * @Date 2020-02-28 15:22:48
   */
  const changeInputSymbolSize = (value?: string) => {
    dispatch({
      type: 'changeInputSymbolSize',
      value: value,
    })
  }

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
   * @description 打开公文模板弹窗
   * @author biHongBin
   * @Date 2020-02-28 15:52:01
   */
  const handleTemplateSelect = () => {
    dispatch({
      type: 'changeSelectModalTitle',
      value: {
        title: '请选择公文模板',
        value: 'template',
      },
    })
    dispatch({
      type: 'changeSelectModalData',
      value: templateData,
    })
    dispatch({
      type: 'changeSelectModalVisible',
      value: true,
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
      value: {
        title: '请选择公文类型',
        value: 'type',
      },
    })
    dispatch({
      type: 'changeSelectModalData',
      value: typeData,
    })
    dispatch({
      type: 'changeSelectModalVisible',
      value: true,
    })
  }

  /**
   * @description 关闭选择公文类型和模板弹窗
   * @author biHongBin
   * @Date 2020-02-28 15:53:22
   */
  const handleCancelSelectModal = () => {
    dispatch({
      type: 'changeSelectModalVisible',
      value: false,
    })
  }

  /**
   * @description 选择模板和类型确认后的操作
   * @author biHongBin
   * @Date 2020-02-28 16:01:43
   */
  const handleConfirmSelectModal = (data: object) => {
    const { value } = selectModalTitle
    handleCancelSelectModal()
    if (value === 'template') {
      dispatch({
        type: 'changeTemplateValue',
        value: data,
      })
    }
    if (value === 'type') {
      dispatch({
        type: 'changeTypeValue',
        value: data,
      })
    }
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
            extra={<FontMm>{templateValue.name}</FontMm>}
            onClick={handleTemplateSelect}
            arrow="horizontal"
          >
            <Flex>
              <IconStyle className="m-r-sm" width={19} height={19} />
              公文模板
            </Flex>
          </Item>
          <Item
            className="am-list-header-style"
            extra={<FontMm>{typeValue.name}</FontMm>}
            onClick={handleTypeSelect}
            arrow="horizontal"
          >
            <Flex>
              <IconStyle className="m-r-sm" width={19} height={19} />
              公文类型
            </Flex>
          </Item>
          <Item
            extra={
              <Switch
                className="am-switch-sm"
                checked={symbolSizeSwitch}
                onChange={changeSymbolSwitch}
              />
            }
          >
            <Flex>
              <IconStyle className="m-r-sm" width={19} height={19} />
              文号
            </Flex>
          </Item>
          {symbolSizeSwitch ? (
            <InputItem
              className="am-input-size-sm"
              value={symbolSizeValue}
              onChange={value => changeInputSymbolSize(value)}
              type="number"
              placeholder="请输入文号大小"
            />
          ) : null}
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
              <IconStyle className="m-r-sm" width={19} height={19} />
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
          <Item className="am-list-header-style">
            <Flex>
              <IconStyle className="m-r-sm" width={19} height={19} />
              审核人
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

export default DraftCreate
