import React from 'react'
import { withRouter } from 'react-router-dom'
import { Flex } from 'antd-mobile'
import { IconStyle, FontTiny } from '@/style'
import { BackNextWrap } from './style'

interface FootButtonType {
  text: string
  icon?: string
  textColor?: string
  click: () => any
}

function FooterButtons(props: any) {
  return (
    <BackNextWrap>
      <Flex>
        {props.data.map((item: FootButtonType, index: number) => (
          <Flex.Item onClick={item.click} key={index}>
            <Flex className="bw-btn" justify="center">
              {item.icon ? (
                <IconStyle className="m-r-xs" width={24} height={24} icon={item.icon} />
              ) : null}
              <FontTiny className={item.textColor}>{item.text}</FontTiny>
            </Flex>
          </Flex.Item>
        ))}
      </Flex>
    </BackNextWrap>
  )
}

export default withRouter(FooterButtons)
