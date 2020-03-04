import styled from 'styled-components'

export const SearchWrap = styled.div`
  position: relative;
  .search-top {
    padding: 10px;
    background-color: ${props => props.theme['@brand-primary']};
  }
  .search-input {
    flex: 1;
    position: relative;
    input {
      width: 100%;
      height: 26px;
      line-height: 26px;
      background-color: #fff;
      border-radius: 12px;
      border: 0 none;
      padding-left: 15px;
      padding-right: 24px;
    }
    .search-icon {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      padding-left: 5px;
      padding-right: 5px;
      z-index: 2;
    }
    .clean {
      margin-right: 10px;
      border-radius: 100%;
      background-color: ${props => props.theme['@color-icon-base']};
    }
  }
`

export const SearchRange = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 7px 0 rgba(170, 170, 170, 0.5);
  background-color: #fff;
  padding: 3px 0;
  z-index: 1;
  .range-line {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 15px;
  }
  .left-text {
    flex: 0 0 65px;
    width: 65px;
    padding-top: 4px;
    ButtonUi {
      margin-bottom: 10px;
    }
  }
  .range-date {
    font-size: 13px;
    input {
      width: 100px;
      height: 24px;
      line-height: 24px;
      font-size: inherit;
      padding: 0 5px;
      border: 1px solid ${props => props.theme['@input-border-color-base']};
      border-radius: 3px;
    }
    span {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
  .range-button {
    a {
      margin-right: 10px;
      margin-bottom: 15px;
    }
  }
  .range-footer {
    flex: 1;
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid ${props => props.theme['@border-color-base']};
    a {
      margin-right: 10px;
    }
  }
`
