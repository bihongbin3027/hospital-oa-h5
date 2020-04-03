import React, { useReducer } from 'react'
import { SearchBar, Grid, Flex } from 'antd-mobile'
import { PageProps } from '@/typings'
import { IAction } from '@/store/types'
import { Wrapper, IconStyle, FontXs, FontTiny, FontMd, FontMr } from '@/style'
import { TagUi } from '@/style/baseUi'
import {
  personnelAllIcon,
  personnelAllActiveIcon,
  personnelAminIcon,
  personnelAminActiveIcon,
  personnelClinicalIcon,
  personnelClinicalActiveIcon,
  personnelMtIcon,
  personnelMtActiveIcon,
  maleIcon,
  girlIcon,
  personnelDepartIcon,
} from '@/utils/config'
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

interface TabType {
  icon: string
  iconActive: string
  name: string
  people: string | number
}

interface DepItem {
  (item: TabType, index: number): void
}

interface OfficeItem {
  (item: string, index: number): void
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
        icon: personnelAllIcon,
        iconActive: personnelAllActiveIcon,
        name: '全部',
        people: 1131,
      },
      {
        icon: personnelAminIcon,
        iconActive: personnelAminActiveIcon,
        name: '行政',
        people: 0,
      },
      {
        icon: personnelClinicalIcon,
        iconActive: personnelClinicalActiveIcon,
        name: '临床科室',
        people: 0,
      },
      {
        icon: personnelMtIcon,
        iconActive: personnelMtActiveIcon,
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
  const depItemClick: DepItem = (item, index) => {
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
  const officeItemClick: OfficeItem = (item, index) => {
    dispatch({
      type: 'changeOfficeIndex',
      payload: index,
    })
  }

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
                <IconStyle
                  width={28}
                  height={28}
                  icon={data.tabIndex === index ? item.iconActive : item.icon}
                />
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
                张三
                <IconStyle
                  className="m-l-xs"
                  width={10}
                  height={10}
                  icon={maleIcon}
                />
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
        <PersonnelItem>
          <Flex className="personnel-box" align="start">
            <div className="personnel-photo"></div>
            <Flex wrap="wrap" className="personnel-user">
              <FontMd className="m-b-xs">
                张三
                <IconStyle
                  className="m-l-xs"
                  width={10}
                  height={10}
                  icon={girlIcon}
                />
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
            <IconStyle
              className="falls-left-icon"
              width={18}
              height={18}
              icon={personnelDepartIcon}
            />
            <div className="falls-user">
              <FontMd className="falls-seven">
                院领导
                <FontMr display="inline" className="color-text-caption m-l-xs">
                  5
                </FontMr>
              </FontMd>
              <div className="falls-seven">科室主任：李四</div>
              <Flex className="falls-office" wrap="wrap">
                <FontXs className="color-text-caption">博士：1</FontXs>
                <FontXs className="color-text-caption">职员：12</FontXs>
                <FontXs className="color-text-caption">硕士：1</FontXs>
                <FontXs className="color-text-delete">离职：1</FontXs>
              </Flex>
              <FontXs className="color-text-green">本月共有1人生日</FontXs>
            </div>
          </Flex>
        </PersonnelItem>
      </Falls>
    </Wrapper>
  )
}

export default PersonnelSystem
