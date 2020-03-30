import React, { useReducer } from 'react'
import { SearchBar, Grid } from 'antd-mobile'
import { PageProps } from '@/typings'
import { IAction } from '@/store/types'
import { normalImage } from '@/utils/config'
import { Wrapper, IconStyle, FontXs, FontTiny } from '@/style'
import { PersonnelSearch, TabMenu, TabMenuBox, TabItem } from './style'

const reducer = (state: any, action: IAction<any>) => {
  switch (action.type) {
    case 'changeTabIndex':
      return {
        ...state,
        tabIndex: action.payload,
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
        icon: normalImage,
        name: '全部',
        people: 1131,
      },
      {
        icon: normalImage,
        name: '行政',
        people: 0,
      },
      {
        icon: normalImage,
        name: '临床科室',
        people: 0,
      },
      {
        icon: normalImage,
        name: '医技科室',
        people: 0,
      },
    ],
  })

  const depItemClick = (item: any, index: number) => {
    dispatch({
      type: 'changeTabIndex',
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
    </Wrapper>
  )
}

export default PersonnelSystem
