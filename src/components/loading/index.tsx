import React from 'react'
import { Flex } from 'antd-mobile'
import { SpinnerBox, SpinnerIcon, SpinnerText } from './style'

function Loading() {
  return (
    <SpinnerBox>
      <Flex align="center" justify="center" style={{ height: '100%' }}>
        <Flex justify="center" direction="column">
          <SpinnerIcon />
          <SpinnerText>努力加载中...</SpinnerText>
        </Flex>
      </Flex>
    </SpinnerBox>
  )
}

export default Loading
