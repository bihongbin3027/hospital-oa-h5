import React, { useReducer, useEffect } from 'react'
import {
  WingBlank,
  WhiteSpace,
  Flex,
  List,
  Icon,
  Accordion,
  TextareaItem,
} from 'antd-mobile'
import { IAction } from '@/store/types'
import { PageProps } from '@/typings'
import { TagUi } from '@/style/baseUi'
import FooterButtons from '@/components/footerButtons'
import {
  annexListIcon,
  backFootIcon,
  receiverListIcon,
  reviewListIcon,
} from '@/utils/config'
import { Wrapper, PageContainer, FontMm, FontMd, IconStyle } from '@/style'

const Item = List.Item

function reducer(state: any, action: IAction<any>) {
  switch (action.type) {
    case 'changeAgreeIndex':
      return {
        ...state,
        agreeIndex: action.payload,
      }
    case 'changeOpinionContent':
      return {
        ...state,
        opinionContent: action.payload,
      }
    default:
      return state
  }
}

function ReviewDetails(props: PageProps) {
  const [data, dispatch] = useReducer(reducer, {
    opinionContent: '', // 意见内容
    agreeIndex: 0, // 审核同意不同意
    // 审核同意数据
    agreeData: [
      {
        className: 'tag-active',
        text: '同意',
        value: 0,
      },
      {
        className: 'tag-delete',
        text: '不同意',
        value: 1,
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

  const { opinionContent, agreeIndex, agreeData, footData } = data

  /**
   * @description 设置发表意见内容
   * @author biHongBin
   * @param {String} value
   * @Date 2020-02-29 21:58:30
   */
  const changeOpinionContent = (value?: string) => {
    dispatch({
      type: 'changeOpinionContent',
      payload: value,
    })
  }

  /**
   * @description 切换审核状态
   * @author biHongBin
   * @param {String} index
   * @Date 2020-03-02 11:36:12
   */
  const changeAgreeIndex = (index: number) => {
    dispatch({
      type: 'changeAgreeIndex',
      payload: index,
    })
  }

  /**
   * @description 查看接收人
   * @author biHongBin
   * @Date 2020-03-03 17:58:49
   */
  const handleReceiverSelect = () => {
    props.history.push('/clerical-review-receiver')
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
              <FontMm className="brand-primary">审核中</FontMm>
            </Flex>
            <WhiteSpace size="lg" />
            <FontMd>主题标题主题标题</FontMd>
            <WhiteSpace size="lg" />
            <Flex>
              <TagUi className="tag-border-normal color-text-caption m-r-xs">
                <FontMm>公共事件</FontMm>
              </TagUi>
              <TagUi className="tag-border-fill color-text-fill">
                <FontMm>拟稿</FontMm>
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
              <IconStyle
                className="m-r-sm"
                width={20}
                height={20}
                icon={annexListIcon}
              />
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
                <Icon type="right" color="#d5d5d5" />
              </Flex>
              <WhiteSpace />
              <Flex justify="between">
                <FontMm className="color-text-caption">
                  关于疫情防疫部署方案.docx
                </FontMm>
                <Icon type="right" color="#d5d5d5" />
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
          <Item className="am-list-header-style" extra={<FontMm>{5}人</FontMm>}>
            <Flex>
              <IconStyle
                className="m-r-sm"
                width={20}
                height={20}
                icon={reviewListIcon}
              />
              审批情况
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
                      <FontMm className="color-text-caption">
                        审批意见：无
                      </FontMm>
                    </div>
                  </Flex>
                  <Flex>
                    <TagUi className="tag-border-primary brand-primary">
                      <FontMm>同意</FontMm>
                    </TagUi>
                  </Flex>
                </Flex>
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
                      <FontMm className="color-text-caption">
                        审批意见：无
                      </FontMm>
                    </div>
                  </Flex>
                  <Flex>
                    <TagUi className="tag-border-delete color-text-delete">
                      <FontMm>不通过</FontMm>
                    </TagUi>
                  </Flex>
                </Flex>
                <WhiteSpace />
              </Item>
            </Accordion.Panel>
          </Accordion>
          <Item>
            <WhiteSpace />
            <div className="ms-white-space-inherit color-text-delete">
              温馨提示：
              <br /> 审核已通过，可在电脑端上进行一键生成文件操作。
            </div>
            <WhiteSpace />
          </Item>
        </List>
        <WhiteSpace />
        <List className="am-list-style">
          <Item>
            <WhiteSpace />
            <Flex>
              {agreeData.map(
                (item: { text: string; className: string }, index: number) => (
                  <TagUi
                    className={`tag-grey md m-r-lg ${
                      index === agreeIndex ? item.className : ''
                    }`}
                    onClick={() => changeAgreeIndex(index)}
                    key={index}
                  >
                    {item.text}
                  </TagUi>
                ),
              )}
            </Flex>
            <WhiteSpace />
            <TextareaItem
              className="am-list-textarea"
              value={opinionContent}
              onChange={value => changeOpinionContent(value)}
              placeholder="请输入审批意见"
              rows={4}
              count={100}
            />
          </Item>
        </List>
        <WhiteSpace />
        <FooterButtons data={footData} />
      </PageContainer>
    </Wrapper>
  )
}

export default ReviewDetails
