import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { WingBlank, Flex } from 'antd-mobile'
import { PageProps } from '@/typings'
import Tabs, { TabType } from '@/components/tab'
import { TagUi } from '@/style/baseUi'
import Searcher from '@/components/searcher'
import { PageContainer, ListLi, FontMm, FontMd } from '@/style'
import { signTabIcon } from '@/utils/config'

function SignFor(props: PageProps) {
  const [tabData] = useState([
    {
      title: '待签收',
      num: 2,
      icon: signTabIcon,
    },
    {
      title: '已签收',
      num: 5,
      icon: signTabIcon,
    },
  ])

  /**
   * @description 条件查询
   * @author biHongBin
   * @param {Object} data
   * @Date 2020-02-26 12:44:16
   */
  const searchValue = (data: object) => {
    console.log('开始查询：', data)
  }

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
    props.history.push('/clerical-doc-details/1')
  }

  return (
    <PageContainer backgroundColor="#fff">
      <Searcher search={searchValue} />
      <Tabs tab={tabData} change={(tab) => tabChange(tab)} />
      <WingBlank size="md">
        <ListLi onClick={() => routerDetails()}>
          <Flex justify="between">
            <div>
              <TagUi className="tag-primary">党政类</TagUi>
            </div>
            <FontMm className="brand-tension">待签收</FontMm>
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
            <FontMm className="color-text-caption">已签收</FontMm>
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

export default withRouter(SignFor)
