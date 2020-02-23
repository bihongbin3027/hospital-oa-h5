// 全局样式

import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
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

export const PageContainer = styled.div`
  height: 100%;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor};
  overflow-y: auto;
`

export const FootItemIcon = styled.i`
  width: 22px;
  height: 22px;
  background-image: url(${(props: { icon: string }) => props.icon});
  background-size: contain;
`
