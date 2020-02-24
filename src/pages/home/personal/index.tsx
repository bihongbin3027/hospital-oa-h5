import React, { useState } from 'react'
import { Grid, Flex, WingBlank, WhiteSpace, Icon, List } from 'antd-mobile'
import {
  PageContainer,
  GridBox,
  GridBoxHeader,
  FontXs,
  FontMm,
  FontMd,
} from '../../../style'
import { Figures, AttendanceNumBox } from './style'

const Item = List.Item

function Personal() {
  const [attendanceData] = useState([
    {
      num: 20,
      numColor: 'brand-primary',
      text: '本月出勤',
      textColor: '',
    },
    {
      num: 20,
      numColor: 'brand-tension',
      text: '迟到',
      textColor: 'color-text-caption',
    },
    {
      num: 1,
      numColor: 'brand-warning',
      text: '早退',
      textColor: 'color-text-caption',
    },
    {
      num: 3,
      numColor: 'brand-warning',
      text: '漏签',
      textColor: 'color-text-caption',
    },
    {
      num: 0,
      numColor: 'brand-error',
      text: '旷工',
      textColor: 'color-text-caption',
    },
  ])

  return (
    <PageContainer backgroundColor="#fff">
      <WingBlank size="md">
        <WhiteSpace />
        <GridBox>
          <WingBlank size="md">
            <GridBoxHeader>
              <Flex justify="between">
                <FontMd>我的考勤</FontMd>
                <Flex>
                  <FontXs className="color-text-caption">我的诉讼</FontXs>
                  <Icon type="right" color="#c7c7cc" />
                </Flex>
              </Flex>
            </GridBoxHeader>
            <AttendanceNumBox>
              <Grid
                data={attendanceData}
                columnNum={5}
                hasLine={false}
                renderItem={(dataItem: any) => (
                  <>
                    <Figures className={`figures ${dataItem.numColor}`}>
                      {dataItem.num}
                    </Figures>
                    <FontMm className={dataItem.textColor}>
                      {dataItem.text}
                    </FontMm>
                  </>
                )}
              />
            </AttendanceNumBox>
          </WingBlank>
        </GridBox>
        <WhiteSpace size="xl" />
        <List>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            arrow="horizontal"
          >
            人员标签
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
          >
            工资查看
          </Item>
        </List>
      </WingBlank>
    </PageContainer>
  )
}

export default Personal
