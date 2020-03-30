import styled from 'styled-components'

export const PersonnelSearch = styled.div`
  background-color: ${props => props.theme['@brand-primary']};
  .personnel-search {
    .am-search-cancel {
      display: none;
    }
    .am-search-value {
      font-size: 14px;
      color: inherit;
    }
    background-color: transparent;
  }
`

export const TabMenu = styled.div`
  background-color: ${props => props.theme['@brand-primary']};
`

export const TabMenuBox = styled.div`
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  overflow: hidden;
  .am-grid {
    &.am-grid-square .am-grid-item:before {
      padding-bottom: 80%;
    }
    .am-flexbox .am-flexbox-item .am-grid-item-content {
      padding: 0;
    }
  }
`

export const TabItem = styled.div`
  height: 100%;
  padding-top: 16px;
  position: relative;
  box-sizing: border-box;
  .dep-name {
    margin-top: 8px;
    position: relative;
    color: ${props => props.theme['@color-text-subhead']};
    .dep-people {
      position: absolute;
      top: 1px;
      margin-left: 1px;
      color: ${props => props.theme['@color-text-disabled']};
    }
  }
  &.active {
    .dep-name {
      color: ${props => props.theme['@brand-primary']};
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 32%;
      right: 32%;
      height: 0;
      border-top: 2px solid ${props => props.theme['@brand-primary']};
    }
  }
`
