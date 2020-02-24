// 全局样式

import styled from 'styled-components'

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

// 中等字体及颜色
export const FontMm = styled(FontXs)`
  font-size: 13px;
`

// 较大字体及颜色
export const FontMd = styled(FontXs)`
  font-size: 16px;
`

// 底部标签栏图标
export const FootItemIcon = styled.i`
  width: 22px;
  height: 22px;
  background-image: url(${(props: { icon: string }) => props.icon});
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
