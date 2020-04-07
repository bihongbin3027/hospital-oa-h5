import React, { useReducer } from 'react'
import { Flex, Icon, DatePicker, Toast } from 'antd-mobile'
import moment from 'moment'
import { IAction } from '@/store/types'
import { ButtonUi } from '@/style/baseUi'
import { themesDefault } from '@/style/theme'
import { searchMenuIcon } from '@/utils/config'
import { FontMm, IconStyle } from '@/style'
import { SearchWrap, SearchRange } from './style'

const brand_primary = themesDefault['@brand-primary']

interface PropType {
  search: (value: object) => any
}

function reducer(state: any, action: IAction<any>) {
  switch (action.type) {
    case 'changeSearchValue':
      return {
        ...state,
        searchValue: action.payload,
      }
    case 'changeMenuVisible':
      return {
        ...state,
        menuVisible: action.payload,
      }
    case 'changeCleanIconVisible':
      return {
        ...state,
        cleanIconVisible: action.payload,
      }
    case 'changeStartDate':
      return {
        ...state,
        startDate: action.payload,
      }
    case 'changeEndDate':
      return {
        ...state,
        endDate: action.payload,
      }
    default:
      return state
  }
}

function Searcher(props: PropType) {
  const [data, dispatch] = useReducer(reducer, {
    searchValue: '', // 搜索框的值
    menuVisible: false, // 左侧菜单打开关闭
    cleanIconVisible: false, // 清除按钮显示隐藏
    maxDate: new Date(), // 最大可选日期
    startDate: moment().format('YYYY-MM-DD'), //开始时间
    endDate: moment().format('YYYY-MM-DD'), // 结束时间
  })

  const {
    searchValue,
    menuVisible,
    cleanIconVisible,
    maxDate,
    startDate,
    endDate,
  } = data

  /**
   * @description 打开或关闭搜索条件
   * @author biHongBin
   * @Date 2020-02-26 12:23:06
   */
  const handleMenu = () => {
    dispatch({
      type: 'changeMenuVisible',
      payload: !menuVisible,
    })
  }

  /**
   * @description 设置搜索框的值和清除按钮显示隐藏
   * @author biHongBin
   * @param {Object} e 事件对象
   * @Date 2020-02-26 12:36:32
   */
  const handleSearchValue = (e: any) => {
    let iconBool: boolean = false
    let value: string = e.target.value
    if (value.length) {
      iconBool = true
    } else {
      iconBool = false
    }
    dispatch({
      type: 'changeSearchValue',
      payload: value,
    })
    dispatch({
      type: 'changeCleanIconVisible',
      payload: iconBool,
    })
  }

  /**
   * @description 清空输入框
   * @author biHongBin
   */
  const handleClearValue = () => {
    dispatch({
      type: 'changeSearchValue',
      payload: '',
    })
  }

  /**
   * @description 设置开始和结束时间
   * @author biHongBin
   * @param {String} date
   * @Date 2020-02-26 12:51:29
   */
  const handleSetTime = (date: any, type: string) => {
    const formatDate = moment(date).format('YYYY-MM-DD')
    if (type === 'startDate') {
      dispatch({
        type: 'changeStartDate',
        payload: formatDate,
      })
    }
    if (type === 'endDate') {
      dispatch({
        type: 'changeEndDate',
        payload: formatDate,
      })
    }
  }

  /**
   * @description 提交并组装查询条件
   * @author biHongBin
   * @Date 2020-02-26 12:36:06
   */
  const submit = () => {
    if (moment(endDate).isBefore(startDate)) {
      Toast.info('开始时间不能大于结束时间', 1.5)
    } else {
      props.search({
        keywords: searchValue,
        startDate: startDate,
        endDate: endDate,
      })
    }
  }

  return (
    <SearchWrap>
      <Flex className="search-top">
        <IconStyle
          className="m-r-sm"
          width={20}
          height={20}
          icon={searchMenuIcon}
          onClick={handleMenu}
        />
        <div className="search-input">
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchValue}
            placeholder="输入关键字"
          />
          <Flex className="search-icon">
            <Flex
              className="clean"
              style={{ display: cleanIconVisible ? 'flex' : 'none' }}
            >
              <Icon
                onClick={handleClearValue}
                type="cross"
                size="xs"
                color="#fff"
              />
            </Flex>
            <Icon
              type="search"
              size="md"
              color={brand_primary}
              onClick={submit}
            />
          </Flex>
        </div>
      </Flex>
      <SearchRange style={{ display: menuVisible ? 'block' : 'none' }}>
        <Flex className="range-line" align="start">
          <FontMm className="left-text">日期范围：</FontMm>
          <Flex className="range-date">
            <DatePicker
              mode="date"
              title="请选择开始时间"
              extra="Optional"
              maxDate={maxDate}
              value={new Date(startDate.replace(/-/g, '/'))}
              onChange={(date) => handleSetTime(date, 'startDate')}
            >
              <input value={startDate} type="text" readOnly />
            </DatePicker>
            <span>至</span>
            <DatePicker
              mode="date"
              title="请选择结束时间"
              extra="Optional"
              maxDate={maxDate}
              value={new Date(endDate.replace(/-/g, '/'))}
              onChange={(data) => handleSetTime(data, 'endDate')}
            >
              <input value={endDate} type="text" readOnly />
            </DatePicker>
          </Flex>
        </Flex>
        <Flex className="range-line" align="start">
          <FontMm className="left-text">公文类型：</FontMm>
          <div className="range-button">
            <ButtonUi className="button-primary button-inline">行政类</ButtonUi>
            <ButtonUi className="button-inline">党政类</ButtonUi>
          </div>
        </Flex>
        <Flex className="range-footer" justify="end">
          <div>
            <ButtonUi className="button-inline color-text-caption">
              清空
            </ButtonUi>
            <ButtonUi className="button-primary button-inline" onClick={submit}>
              查询
            </ButtonUi>
          </div>
        </Flex>
      </SearchRange>
    </SearchWrap>
  )
}

export default Searcher
