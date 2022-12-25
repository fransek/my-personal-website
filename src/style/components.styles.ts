import { Theme } from './theme.styles'
import styled from 'styled-components'

export const _HR = styled.hr`
  border: 1px solid ${({ theme }: Theme) => theme.fg.hr};
`
