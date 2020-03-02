import React, { useReducer, useEffect } from 'react'
import { fromJS } from 'immutable'
import {
  WingBlank,
  WhiteSpace,
  Flex,
  List,
  Icon,
  Accordion,
  Switch,
  TextareaItem,
} from 'antd-mobile'
import { TagUi } from '../../../style/baseUi'
import FooterButtons from '../../../components/footerButtons'
import {
  Wrapper,
  PageContainer,
  FontMm,
  FontMd,
  IconStyle,
} from '../../../style'

const Item = List.Item

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
    case 'changeOpinionSwitch':
      return state.set('opinionSwitch', action.value)
    case 'changeOpinionContent':
      return state.set('opinionContent', action.value)
    default:
      return state
  }
}

function DocDetails(props: PropsType) {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      opinionSwitch: true, // 发表意见开关
      opinionContent: '', // 意见内容
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

  const { opinionSwitch, opinionContent, footData } = data.toJS()

  /**
   * @description 打开或关闭发表意见开关
   * @author biHongBin
   * @Date 2020-02-29 21:54:56
   */
  const changeOpinionSwitch = () => {
    dispatch({
      type: 'changeOpinionSwitch',
      value: !opinionSwitch,
    })
  }

  /**
   * @description 设置发表意见内容
   * @author biHongBin
   * @param {String} value
   * @Date 2020-02-29 21:58:30
   */
  const changeOpinionContent = (value?: string) => {
    dispatch({
      type: 'changeOpinionContent',
      value: value,
    })
  }

  /**
   * @description 清空意见内容
   * @author biHongBin
   * @Date 2020-02-29 22:07:09
   */
  const clearOpinionContent = (value?: string) => {
    dispatch({
      type: 'changeOpinionContent',
      value: '',
    })
  }

  useEffect(() => {
    document.title = '详情内容'
  }, [])

  return (
    <Wrapper footer="50">
      <PageContainer>
        <List>
          <WingBlank>
            <WhiteSpace size="lg" />
            <Flex justify="between">
              <Flex className="color-text-caption">
                <FontMm className="m-r-sm">张山</FontMm>
                <FontMm>2020-02-19 15:00</FontMm>
              </Flex>
              <FontMm className="color-text-caption">已签收</FontMm>
            </Flex>
            <WhiteSpace size="lg" />
            <FontMd>主题标题主题标题</FontMd>
            <WhiteSpace size="lg" />
            <Flex>
              <TagUi className="tag-border-normal color-text-caption">
                公共事件
              </TagUi>
            </Flex>
            <WhiteSpace size="lg" />
            <FontMm className="am-text-line">
              主题内容主题内容主题内容主题内容主题内容主题，内容主题内容主题内容，主题内容主题内容主题内容主题内容主题内容。主题内容主题内容主题，内容主题内容主题内容主题内容主题内容主题内容主题内容。
            </FontMm>
            <WhiteSpace size="lg" />
          </WingBlank>
        </List>
        <WhiteSpace />
        <List className="am-list-style">
          <Item className="am-list-header-style">
            <Flex>
              <IconStyle className="m-r-sm" width={19} height={19} />
              附件
            </Flex>
          </Item>
          <Item>
            <WingBlank>
              <WhiteSpace />
              <Flex justify="between">
                <FontMm className="color-text-caption">
                  关于疫情防疫部署方案.docx
                </FontMm>
                <Flex>
                  <FontMm className="color-text-caption m-r-sm">已读</FontMm>
                  <Icon type="right" color="#d5d5d5" />
                </Flex>
              </Flex>
              <WhiteSpace />
              <Flex justify="between">
                <FontMm className="color-text-caption">
                  关于疫情防疫部署方案.docx
                </FontMm>
                <Flex>
                  <FontMm className="brand-error m-r-sm">未读</FontMm>
                  <Icon type="right" color="#d5d5d5" />
                </Flex>
              </Flex>
              <WhiteSpace />
              <WhiteSpace />
            </WingBlank>
          </Item>
        </List>
        <WhiteSpace />
        <List className="am-list-style">
          <Item
            className="am-list-header-style"
            arrow="horizontal"
            extra={<FontMm>{5}人</FontMm>}
          >
            <Flex>
              <IconStyle className="m-r-sm" width={19} height={19} />
              接收人
            </Flex>
          </Item>
          <Item
            className="am-list-header-style"
            arrow="horizontal"
            extra={<FontMm>已签收(3) 未签收(2)</FontMm>}
          >
            <Flex>
              <IconStyle className="m-r-sm" width={19} height={19} />
              签收情况
            </Flex>
          </Item>
        </List>
        <WhiteSpace />
        <List className="am-list-style">
          <Item
            className="am-list-header-style"
            arrow="horizontal"
            extra={<FontMm>{5}人</FontMm>}
          >
            <Flex>
              <IconStyle className="m-r-sm" width={19} height={19} />
              传阅意见
            </Flex>
          </Item>
          <Accordion
            className="am-top-border-hidden am-bottom-border-hidden"
            defaultActiveKey="0"
          >
            <Accordion.Panel header={<FontMm>信息科</FontMm>}>
              <Item>
                <WhiteSpace />
                <Flex>
                  <Flex className="m-r-lg">
                    <IconStyle
                      className="m-r-sm"
                      width={36}
                      height={36}
                      radius={36}
                    />
                    <div>
                      <Flex>
                        <FontMm className="m-r-sm">李四</FontMm>
                        <FontMm className="color-text-caption">
                          2020-20-19 16:00
                        </FontMm>
                      </Flex>
                      <FontMm>非常好，同意</FontMm>
                    </div>
                  </Flex>
                  <Flex>
                    <IconStyle className="m-r-xs" width={10} height={10} />
                    <FontMm>撤回</FontMm>
                  </Flex>
                </Flex>
                <WhiteSpace />
              </Item>
            </Accordion.Panel>
          </Accordion>
        </List>
        <WhiteSpace />
        <List className="am-list-style">
          <Item
            extra={
              <Switch
                className="am-switch-sm"
                checked={opinionSwitch}
                onChange={changeOpinionSwitch}
              />
            }
          >
            <Flex>发表意见</Flex>
          </Item>
          {opinionSwitch ? (
            <Item>
              <TextareaItem
                className="am-list-textarea"
                value={opinionContent}
                onChange={value => changeOpinionContent(value)}
                placeholder="请输入内容"
                rows={4}
                count={100}
              />
            </Item>
          ) : null}
          <Item>
            <Flex justify="end">
              <Flex className="m-r-lg" onClick={() => clearOpinionContent()}>
                <IconStyle width={10} height={10} />
                <FontMm className="color-text-caption">清空</FontMm>
              </Flex>
              <Flex>
                <IconStyle width={10} height={10} />
                <FontMm className="brand-primary">发布</FontMm>
              </Flex>
            </Flex>
          </Item>
        </List>
        <WhiteSpace />
        <FooterButtons data={footData} />
      </PageContainer>
    </Wrapper>
  )
}

export default DocDetails
