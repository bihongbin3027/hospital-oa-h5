import styled from 'styled-components'

export const TabWrap = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${props => props.theme['@brand-primary']};
  position: relative;
  .am-flexbox {
    overflow: visible !important;
  }
  .tab-item {
    color: #fff;
    position: relative;
    &.active {
      &:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-top: -2px;
        margin-left: -4px;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
        z-index: 1;
      }
    }
    .color-text-secondary {
      margin-left: 6px;
    }
  }
`
