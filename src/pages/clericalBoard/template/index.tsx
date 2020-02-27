import React, { useEffect, useState } from 'react'
import { Flex } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { TagUi } from '../../../style/baseUi'
import FooterButtons from '../../../components/footerButtons'
import { Wrapper, PageContainer, IconStyle, FontMd } from '../../../style'
import { TempWrap } from './style'

function SelectedTemplate(props: any) {
  const [footData] = useState([
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
      text: '下一步',
      textColor: 'brand-primary',
      click: () => {
        console.log(process.env.REACT_APP_API_URL)
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
            <IconStyle className="temp-icon" width="19" height="19" />
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
            <IconStyle className="temp-icon" width="19" height="19" />
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
