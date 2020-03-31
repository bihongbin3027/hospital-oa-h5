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
  box-shadow: 0px 1px 3px 0px rgba(170, 170, 170, 0.5);
  .am-grid {
    &.am-grid-square .am-grid-item:before {
      padding-bottom: 0;
    }
    .am-flexbox .am-flexbox-item .am-grid-item-content {
      position: relative;
      top: 0;
      padding: 0;
      transform: translateY(0);
    }
  }
`

export const TabItem = styled.div`
  height: 75px;
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

export const DepTab = styled.div`
  margin-bottom: 3px;
`

export const DepItem = styled.div`
  width: 75px;
  flex: 0 0 75px;
  .dep-box {
    height: 42px;
    position: relative;
    color: ${props => props.theme['@color-text-caption']};
    &.active {
      font-size: 16px;
      color: inherit;
      &:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 30%;
        right: 30%;
        height: 0;
        border-top: 2px solid ${props => props.theme['@brand-primary']};
      }
    }
  }
`

export const PersonnelItem = styled.div`
  flex: 0 0 50%;
  &.a {
    column-count: 2;
  }
  .personnel-box {
    padding: 10px 5px;
    margin: 5px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 65%,
      rgba(226, 244, 252, 1) 100%
    );
    box-shadow: 0px 2px 3px 0px rgba(209, 210, 210, 1);
    border-radius: 8px;
  }
  .personnel-photo {
    flex: 0 0 60px;
    width: 60px;
    height: 84px;
    background-color: #ddd;
    border-radius: 8px;
    margin-right: 5px;
  }
  .personnel-user {
    flex: 1;
    height: 84px;
  }
`

export const Falls = styled.div`
  column-count: 2;
  column-gap: 0;
`
