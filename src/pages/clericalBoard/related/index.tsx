import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { WingBlank, Flex, Popover } from 'antd-mobile'
import { PageProps } from '@/typings'
import Tabs, { TabType } from '@/components/tab'
import { TagUi } from '@/style/baseUi'
import {
  PageContainer,
  ListLi,
  FontMm,
  FontMd,
  FontMr,
  IconStyle,
} from '@/style'
import {
  reviewTabIcon,
  postTabIcon,
  draftTabIcon,
  editListIcon,
} from '@/utils/config'

const Item = Popover.Item

function Related(props: PageProps) {
  const [tabData] = useState([
    {
      title: '审核',
      icon: reviewTabIcon,
    },
    {
      title: '我的发文',
      icon: postTabIcon,
    },
    {
      title: '草稿箱',
      icon: draftTabIcon,
    },
  ])

  /**
   * @description Tab切换回调
   * @author biHongBin
   * @param {Object} tab
   * @Date 2020-02-26 16:45:43
   */
  const tabChange = (tab: TabType) => {
    console.log('tab', tab)
  }

  /**
   * @description 跳转到详情
   * @author biHongBin
   * @Date 2020-02-29 20:22:23
   */
  const routerDetails = () => {
    props.history.push('/clerical-review-details/1')
  }

  return (
    <PageContainer backgroundColor="#fff">
      <Tabs tab={tabData} change={(tab) => tabChange(tab)} />
      <WingBlank size="md">
        <ListLi onClick={() => routerDetails()}>
          <Flex justify="between">
            <Flex>
              <TagUi className="tag-fill m-r-sm">拟稿</TagUi>
              <TagUi className="tag-primary">党政类</TagUi>
            </Flex>
            <Flex>
              <FontMm className="brand-tension m-r-xs">待审核</FontMm>
              <div onClick={(e) => e.stopPropagation()}>
                <Flex>
                  <Popover
                    visible={false}
                    mask={true}
                    overlay={[
                      <Item>
                        <FontMr>编辑</FontMr>
                      </Item>,
                      <Item>
                        <FontMr>删除</FontMr>
                      </Item>,
                    ]}
                  >
                    <IconStyle width={20} height={20} icon={editListIcon} />
                  </Popover>
                </Flex>
              </div>
            </Flex>
          </Flex>
          <FontMd className="title">
            关于新冠状病毒疫情的重要指示重要指示…
          </FontMd>
          <Flex className="name-date">
            <FontMm className="name color-text-caption">1822张三</FontMm>
            <FontMm className="color-text-caption">2020-02-05 15:00</FontMm>
          </Flex>
        </ListLi>
        <ListLi>
          <Flex justify="between">
            <div>
              <TagUi className="tag-primary">党政类</TagUi>
            </div>
            <FontMm className="color-text-caption">不通过</FontMm>
          </Flex>
          <FontMd className="title">
            关于新冠状病毒疫情的重要指示重要指示…
          </FontMd>
          <Flex className="name-date">
            <FontMm className="name color-text-caption">1822张三</FontMm>
            <FontMm className="color-text-caption">2020-02-05 15:00</FontMm>
          </Flex>
        </ListLi>
        <ListLi>
          <Flex justify="between">
            <div>
              <TagUi className="tag-primary">党政类</TagUi>
            </div>
            <FontMm className="brand-warning">审核中</FontMm>
          </Flex>
          <FontMd className="title">
            关于新冠状病毒疫情的重要指示重要指示…
          </FontMd>
          <Flex className="name-date">
            <FontMm className="name color-text-caption">1822张三</FontMm>
            <FontMm className="color-text-caption">2020-02-05 15:00</FontMm>
          </Flex>
        </ListLi>
        <ListLi>
          <Flex justify="between">
            <div>
              <TagUi className="tag-primary">党政类</TagUi>
            </div>
            <FontMm className="brand-primary">已审核</FontMm>
          </Flex>
          <FontMd className="title">
            关于新冠状病毒疫情的重要指示重要指示…
          </FontMd>
          <Flex className="name-date">
            <FontMm className="name color-text-caption">1822张三</FontMm>
            <FontMm className="color-text-caption">2020-02-05 15:00</FontMm>
          </Flex>
        </ListLi>
      </WingBlank>
    </PageContainer>
  )
}

export default withRouter(Related)
