import React, { useReducer } from 'react'
import { SearchBar, Grid, Flex } from 'antd-mobile'
import { PageProps } from '@/typings'
import { IAction } from '@/store/types'
import { Wrapper, IconStyle, FontXs, FontTiny, FontMd } from '@/style'
import { TagUi } from '@/style/baseUi'
import {
  PersonnelSearch,
  TabMenu,
  TabMenuBox,
  TabItem,
  DepTab,
  DepItem,
  PersonnelItem,
  Falls,
} from './style'
import { getWxUserId } from '@/api/user'

interface TabType {
  icon: string
  name: string
  people: string | number
}

const reducer = (state: any, action: IAction<any>) => {
  switch (action.type) {
    case 'changeTabIndex':
      return {
        ...state,
        tabIndex: action.payload,
      }
    case 'changeOfficeIndex':
      return {
        ...state,
        officeIndex: action.payload,
      }
    default:
      return state
  }
}

const PersonnelSystem = (props: PageProps) => {
  const [data, dispatch] = useReducer(reducer, {
    tabIndex: 0,
    tabData: [
      {
        icon: '',
        name: '全部',
        people: 1131,
      },
      {
        icon: '',
        name: '行政',
        people: 0,
      },
      {
        icon: '',
        name: '临床科室',
        people: 0,
      },
      {
        icon: '',
        name: '医技科室',
        people: 0,
      },
    ],
    officeIndex: 0,
    officeData: ['正高', '副高', '博士', '硕士', '职员'],
  })

  /**
   * @description 科室tab切换
   * @author biHongBin
   * @param {Object} item
   * @param {Number} index
   * @Date 2020-03-30 18:06:02
   */
  const depItemClick = (item: TabType, index: number) => {
    dispatch({
      type: 'changeTabIndex',
      payload: index,
    })
  }

  /**
   * @description 职能切换
   * @author biHongBin
   * @param {String} item
   * @param {Number} index
   * @Date 2020-03-31 15:30:19
   */
  const officeItemClick = (item: string, index: number) => {
    dispatch({
      type: 'changeOfficeIndex',
      payload: index,
    })
  }

  getWxUserId()

  return (
    <Wrapper>
      <PersonnelSearch>
        <SearchBar
          className="personnel-search"
          placeholder="请输入关键词"
          cancelText=""
          maxLength={10}
        />
      </PersonnelSearch>
      <TabMenu>
        <TabMenuBox>
          <Grid
            data={data.tabData}
            columnNum={4}
            hasLine={false}
            renderItem={(item: any, index: number) => (
              <TabItem
                className={data.tabIndex === index ? 'active' : ''}
                onClick={() => depItemClick(item, index)}
              >
                <IconStyle width={22} height={22} icon={item.icon} />
                <FontXs className="dep-name">
                  {item.name}
                  {item.people > 0 ? (
                    <FontTiny className="dep-people" display="inline">
                      {item.people}人
                    </FontTiny>
                  ) : null}
                </FontXs>
              </TabItem>
            )}
          />
        </TabMenuBox>
      </TabMenu>
      <DepTab>
        <Flex>
          {data.officeData.map((office: string, index: number) => (
            <DepItem onClick={() => officeItemClick(office, index)} key={index}>
              <Flex
                className={`dep-box ${
                  data.officeIndex === index ? 'active' : ''
                }`}
                justify="center"
                key={index}
              >
                {office}
              </Flex>
            </DepItem>
          ))}
        </Flex>
      </DepTab>
      <Flex className="m-r-xs m-l-xs" wrap="wrap">
        <PersonnelItem>
          <Flex className="personnel-box" align="start">
            <div className="personnel-photo"></div>
            <Flex wrap="wrap" className="personnel-user">
              <FontMd className="m-b-xs">
                张三<span className="color-text-caption">男</span>
              </FontMd>
              <div className="color-text-caption m-b-xs">工号：0006</div>
              <div className="color-text-caption m-b-xs">上级：李四</div>
              <Flex>
                <TagUi className="tag-green radius-lg">
                  <FontXs>院领导</FontXs>
                </TagUi>
              </Flex>
            </Flex>
          </Flex>
        </PersonnelItem>
      </Flex>
      <Falls>
        <PersonnelItem className="falls-box">
          <Flex className="personnel-box" align="start">
            <IconStyle width={15} height={15} />
          </Flex>
        </PersonnelItem>
        <PersonnelItem className="falls-box">
          <Flex className="personnel-box" align="start">
            <IconStyle width={15} height={15} />
          </Flex>
        </PersonnelItem>
        <PersonnelItem className="falls-box">
          <Flex className="personnel-box" align="start">
            <IconStyle width={15} height={15} />
          </Flex>
        </PersonnelItem>
      </Falls>
    </Wrapper>
  )
}

export default PersonnelSystem
