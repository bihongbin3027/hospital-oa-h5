// 全局样式

import styled from 'styled-components'
import { normalImage } from '../utils/config'

interface IconProps {
  width?: string
  height?: string
  icon?: string
  radius?: string
}

// 最外层包裹容器
export const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  /* 定义全局颜色 */
  .color-text-caption {
    color: ${props => props.theme['@color-text-caption']};
  }
  .color-text-secondary {
    color: ${props => props.theme['@color-text-secondary']};
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
  .m-r-10 {
    margin-right: 10px;
  }

  /* 覆盖ant-mobile样式 */
  .am-tabs-tab-bar-wrap {
    .am-tab-bar-bar {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  .am-wingblank-md {
    margin-left: 10px;
    margin-right: 10px;
  }
`

// 自定义内层包裹容器的背景色
export const PageContainer = styled.div`
  height: 100%;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor};
  overflow-y: auto;
`

// 小号字体及颜色
export const FontXs = styled.div`
  font-size: 12px;
  display: ${(props: { display?: string }) =>
    props.display ? props.display : 'block'};
`

// 特别小号字体及颜色
export const FontTiny = styled(FontXs)`
  font-size: 10px;
`

// 中等字体及颜色
export const FontMm = styled(FontXs)`
  font-size: 13px;
`

// 重置默认字体及颜色
export const FontMr = styled(FontXs)`
  font-size: 14px;
`

// 较大字体及颜色
export const FontMd = styled(FontXs)`
  font-size: 16px;
`

// 自定义图标
export const IconStyle = styled.span`
  display: inline-block;
  width: ${(props: IconProps) => (props.width ? props.width + 'px' : '20px')};
  height: ${(props: IconProps) =>
    props.height ? props.height + 'px' : '20px'};
  border-radius: ${(props: IconProps) =>
    props.radius ? props.radius + 'px' : 0};
  background-image: url(${(props: IconProps) =>
    props.icon ? props.icon : normalImage});
  background-size: contain;
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
    width: 26px;
    height: 26px;
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
