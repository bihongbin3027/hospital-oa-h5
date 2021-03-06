// 全局样式

import styled from 'styled-components'
import { normalImage } from '../utils/config'

interface IconProps {
  width?: number
  height?: number
  icon?: string
  radius?: number
}

// 最外层包裹容器
export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: ${(props: { footer?: string }) =>
    props.footer ? props.footer + 'px' : 0};
  left: 0;
  right: 0;
  max-width: 800px;
  color: #323232;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  font-family: -apple-system, Helvetica, sans-serif;
  margin: 0 auto;
  z-index: 1;

  /* 定义全局颜色 */
  .color-text-caption {
    color: ${props => props.theme['@color-text-caption']};
  }
  .color-text-secondary {
    color: ${props => props.theme['@color-text-secondary']};
  }
  .color-text-delete {
    color: ${props => props.theme['@color-text-delete']};
  }
  .color-text-fill {
    color: ${props => props.theme['@color-text-fill']};
  }
  .color-text-green {
    color: ${props => props.theme['@color-text-green']};
  }
  .color-text-subhead {
    color: ${props => props.theme['@color-text-subhead']};
  }
  .brand-primary {
    color: ${props => props.theme['@brand-primary']};
  }
  .brand-warning {
    color: ${props => props.theme['@brand-warning']};
  }
  .brand-error {
    color: ${props => props.theme['@brand-error']};
  }
  .brand-tension {
    color: ${props => props.theme['@brand-tension']};
  }

  /* 全局边距 */
  .m-t-xs {
    margin-top: 5px;
  }
  .m-t-sm {
    margin-top: 10px;
  }
  .m-t-md {
    margin-top: 15px;
  }
  .m-t-lg {
    margin-top: 20px;
  }
  .m-b-xs {
    margin-bottom: 5px;
  }
  .m-b-sm {
    margin-bottom: 10px;
  }
  .m-b-md {
    margin-bottom: 15px;
  }
  .m-b-lg {
    margin-bottom: 20px;
  }
  .m-r-xs {
    margin-right: 5px;
  }
  .m-r-sm {
    margin-right: 10px;
  }
  .m-r-md {
    margin-right: 15px;
  }
  .m-r-lg {
    margin-right: 20px;
  }
  .m-l-xs {
    margin-left: 5px;
  }
  .m-l-sm {
    margin-left: 10px;
  }
  .m-l-md {
    margin-left: 15px;
  }
  .m-l-lg {
    margin-left: 20px;
  }

  /* 覆盖ant-mobile样式 */
  .am-top-border-hidden {
    /* 隐藏组件套用的时候边框重叠 */
    margin-top: -1px;
  }
  .am-bottom-border-hidden {
    /* 隐藏组件套用的时候边框重叠 */
    margin-bottom: -1px;
  }
  .am-tabs-tab-bar-wrap {
    .am-tab-bar-bar {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  .am-wingblank-md {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
  .am-list-style {
    .am-list-header-style {
      min-height: 54px;
    }
    .am-list-input {
      height: 40px;
      min-height: 40px;
      padding-left: 0;
      .am-list-line {
        padding-right: 0;
        border: 0 none;
        &::after {
          display: none !important;
        }
      }
    }
    .am-list-textarea {
      padding-left: 0;
      padding-right: 0;
      .am-textarea-control {
        padding-top: 0;
      }
      .am-textarea-count {
        span {
          color: #bbb;
        }
      }
      textarea {
        font-size: 13px;
      }
    }
  }
  .am-list-avatar {
    .am-flexbox-item {
      &::before {
        padding-bottom: 125%;
      }
    }
    .am-flexbox {
      height: 100%;
      justify-content: center;
      overflow: visible;
    }
  }
  .am-switch-sm {
    .checkbox {
      width: 40px;
      height: 20px;
      &:before,
      &:after {
        height: 17px;
      }
      &:before {
        width: 37px;
      }
      &:after {
        width: 17px;
      }
    }
  }
  .am-input-size-sm {
    .am-input-control {
      input {
        font-size: 14px;
      }
    }
  }
  .am-text-line {
    line-height: 19px;
  }
  .ms-white-space-inherit {
    white-space: initial;
  }
`

// 自定义内层包裹容器的背景色
export const PageContainer = styled.div`
  height: 100%;
  background-color: ${(props: { backgroundColor?: string }) =>
    props.backgroundColor};
  overflow-y: auto;
`

// 小号字体及颜色
export const FontXs = styled.div`
  font-size: 12px;
  display: ${(props: { display?: string }) =>
    props.display ? props.display : 'block'};
`

export const FontTiny = styled(FontXs)`
  font-size: 10px;
`

export const FontMm = styled(FontXs)`
  font-size: 13px;
`

export const FontMr = styled(FontXs)`
  font-size: 14px;
`

export const FontMd = styled(FontXs)`
  font-size: 16px;
`

export const FontLg = styled(FontXs)`
  font-size: 18px;
`

export const FontXlg = styled(FontXs)`
  font-size: 20px;
`

// 自定义图标
export const IconStyle = styled.span`
  display: inline-block;
  width: ${(props: IconProps) => (props.width ? props.width + 'px' : '20px')};
  height: ${(props: IconProps) =>
    props.height ? props.height + 'px' : '20px'};
  border-radius: ${(props: IconProps) =>
    props.radius ? props.radius + 'px' : 0};
  background-image: ${(props: IconProps) =>
    'url(' + (props.icon ? props.icon : normalImage) + ')'};
  background-repeat: no-repeat;
  background-size: contain;
`

// 人员头像区域
export const AvatarArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 5px;
  .avatar-box {
    position: relative;
  }
  .block-delete {
    position: absolute;
    right: -8px;
    top: -8px;
    border-radius: 100%;
    z-index: 1;
  }
  .avatar-name {
    margin-top: -2px;
  }
  .add-avatar {
    margin-top: -15px;
  }
`

// 阴影的格子容器
export const GridBox = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 1px 6px 0px rgba(170, 170, 170, 0.5);
  z-index: 1;
  overflow: hidden;
`

// 阴影的格子容器头部
export const GridBoxHeader = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`

// 底部tabBar操作弹窗(中间+号)
export const NewlyOpenedBox = styled.div`
  min-height: 225px;
  padding: 20px 10px;
  .entrance-icon {
    width: 45px;
    height: 45px;
  }
  ~ .cross-circle {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

// 公文管理列表-可用于多种列表结构
export const ListLi = styled.li`
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme['@border-color-base']};
  list-style: none;
  .title {
    margin-top: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .name-date {
    margin-top: 16px;
  }
  .name {
    margin-right: 10px;
  }
`

// 边框
export const Hr = styled.div`
  height: 0;
  border-top: 1px solid ${props => props.theme['@border-color-base']};
`

// 角标
export const Subscript = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme['@color-text-disabled']};
  background-color: ${props => props.theme['@border-color-base']};
`
