import React, { useEffect, useState } from 'react'
import { Flex } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { PageProps } from '@/typings'
import { TagUi } from '@/style/baseUi'
import FooterButtons from '@/components/footerButtons'
import { Wrapper, PageContainer, IconStyle, FontMd } from '@/style'
import { personTagIcon, backFootIcon, nextFootIcon } from '@/utils/config'
import { TempWrap } from './style'

function SelectedTemplate(props: PageProps) {
  const [footData] = useState([
    {
      icon: backFootIcon,
      text: '返回',
      textColor: 'color-text-caption',
      click: () => {
        props.history.goBack()
      },
    },
    {
      icon: nextFootIcon,
      text: '下一步',
      textColor: 'brand-primary',
      click: () => {
        const {
          match: {
            params: { id },
          },
          history,
        } = props
        // 公文拟稿
        if (id === 'draft') {
          history.push('/clerical-draft-create')
        }
        // 公文发文
        if (id === 'post') {
          history.push('/clerical-post-create')
        }
      },
    },
  ])

  useEffect(() => {
    document.title = '公文发布'
  }, [])

  return (
    <Wrapper>
      <PageContainer backgroundColor="#fff">
        <TempWrap>
          <Flex className="temp-line" align="start">
            <IconStyle
              className="temp-icon"
              width={20}
              height={20}
              icon={personTagIcon}
            />
            <div className="temp-box">
              <FontMd className="temp-title">请选择公文模板</FontMd>
              <Flex className="temp-tag">
                <TagUi className="tag-active md">
                  <FontMd>通用拟稿</FontMd>
                </TagUi>
                <TagUi className="tag-grey md">
                  <FontMd>通用</FontMd>
                </TagUi>
              </Flex>
            </div>
          </Flex>
          <Flex className="temp-line" align="start">
            <IconStyle
              className="temp-icon"
              width={20}
              height={20}
              icon={personTagIcon}
            />
            <div className="temp-box">
              <FontMd className="temp-title">请选择公文类型</FontMd>
              <Flex className="temp-tag">
                <TagUi className="tag-active md">
                  <FontMd>行政类</FontMd>
                </TagUi>
                <TagUi className="tag-grey md">
                  <FontMd>党政类</FontMd>
                </TagUi>
              </Flex>
            </div>
          </Flex>
        </TempWrap>
        <FooterButtons data={footData} />
      </PageContainer>
    </Wrapper>
  )
}

export default withRouter(SelectedTemplate)
