import { Theme } from 'style/theme.styles'
import styled from 'styled-components'

export const _DownArrow = styled.svg`
  filter: drop-shadow(${(props: Theme) => props.theme.textShadow.inactive});
  transition: filter 0.5s;
  &:hover {
    filter: drop-shadow(${(props: Theme) => props.theme.textShadow.active});
  }
`
