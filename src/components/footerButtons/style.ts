import styled from 'styled-components'

export const BackNextWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 800px;
  border-top: 1px solid ${props => props.theme['@border-color-base']};
  background-color: #fff;
  margin: 0 auto;
  z-index: 1;
  .bw-btn {
    height: 50px;
  }
`
