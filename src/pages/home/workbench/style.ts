import styled from 'styled-components'

export const GridBox = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 1px 6px 0px rgba(170, 170, 170, 0.5);
  z-index: 1;
  overflow: hidden;
`

export const GridBoxBg = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: -10px;
    right: -10px;
    top: -21px;
    bottom: 28px;
    border-bottom-left-radius: 3%;
    border-bottom-right-radius: 3%;
    background-color: ${props => props.theme['@brand-primary']};
  }
`

export const GridIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-image: url(${(props: { src: string }) => props.src});
  margin-bottom: 5px;
  ~ div {
    font-size: 12px;
  }
`
export const AgentBox = styled.div`
  .agent-title {
    margin-top: 20px;
  }
  .agent-num {
    margin-left: 8px;
  }
`

export const AgentUl = styled.ul`
  margin: 10px 0 0;
  padding: 0;
`

export const AgentLi = styled.li`
  display: flex;
  list-style: none;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme['@border-color-base']};
  .agent-text {
    flex: 1;
  }
  .color-text-caption {
    margin-top: 16px;
  }
`
