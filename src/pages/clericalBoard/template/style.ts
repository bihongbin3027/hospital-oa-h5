import styled from 'styled-components'

export const TempWrap = styled.div`
  padding: 0 0 15px 15px;
  .temp-line {
    margin-bottom: 20px;
  }
  .temp-box {
    flex: 1;
  }
  .temp-icon {
    flex: 0 0 19px;
    margin-right: 8px;
    margin-top: 15px;
  }
  .temp-title {
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid ${props => props.theme['@border-color-base']};
    border-bottom: 1px solid ${props => props.theme['@border-color-base']};
  }
  .temp-tag {
    padding-top: 15px;
  }
  .temp-tag > div {
    margin-right: 15px;
    margin-bottom: 15px;
  }
`
