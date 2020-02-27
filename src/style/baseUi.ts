import styled from 'styled-components'

export const ButtonUi = styled.a`
  display: block;
  outline: 0 none;
  padding: 4px 8px;
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  background-color: #f2f2f2;
  border-radius: ${(props: { radius?: boolean }) => (props.radius ? 0 : '3px')};
  &.button-inline {
    display: inline-block;
  }
  &.button-primary {
    color: #fff;
    background-color: ${props => props.theme['@brand-primary']};
  }
  &.button-warning {
    color: #fff;
    background-color: ${props => props.theme['@warning-button-fill']};
  }
`

export const TagUi = styled.div`
  padding: 2px 5px;
  border-radius: 2px;
  &.md {
    padding: 3px 9px;
  }
  &.tag-fill {
    color: ${props => props.theme['@color-text-fill']};
    background: ${props => props.theme['@tag-fill']};
  }
  &.tag-primary {
    color: ${props => props.theme['@brand-primary']};
    background: ${props => props.theme['@tag-primary']};
  }
  &.tag-active {
    color: #fff;
    background: ${props => props.theme['@tag-active']};
  }
  &.tag-grey {
    color: ${props => props.theme['@color-text-caption']};
    background: ${props => props.theme['@tag-grey']};
  }
`
