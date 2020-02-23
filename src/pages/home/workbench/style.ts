import styled from 'styled-components'

export const GridWrap = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: -10px;
    right: -10px;
    top: -21px;
    bottom: 30px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: ${props => props.theme['@brand-primary']};
  }
  .am-grid {
    position: relative;
    border-radius: 8px;
    box-shadow: 0px 1px 6px 0px rgba(170, 170, 170, 0.5);
    z-index: 1;
    overflow: hidden;
  }
`

export const GridIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-image: url(${(props: { src: string }) => props.src});
  margin-bottom: 4px;
  ~ div {
    font-size: 12px;
  }
`
export const AgentTitle = styled.div`
  font-size: 16px;
  margin-top: 20px;
  span {
    font-size: 12px;
    margin-left: 8px;
    color: ${props => props.theme['@color-text-caption']};
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
`

export const AgentIcon = styled.i`
  width: 20px;
  height: 20px;
  background-color: ${(props: { src: string }) => props.src};
  margin-right: 12px;
`

export const AgentLiTitle = styled.div`
  font-size: 16px;
`

export const AgentLiStatus = styled.div`
  color: ${props => props.color};
  font-size: 12px;
`

export const AgentLiAid = styled.div`
  color: ${props => props.theme['@color-text-caption']};
  font-size: 12px;
  margin-top: 16px;
`
