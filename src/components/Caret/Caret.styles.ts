import { Theme } from 'style/theme.styles'
import { clickable } from '../../style/util.styles'
import styled from 'styled-components'

export const _Caret = styled.svg`
  ${clickable}
  fill: ${({ theme }: Theme) => theme.fg.text}
`
