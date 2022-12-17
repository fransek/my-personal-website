import { Theme } from './theme.styles'
import styled from 'styled-components'

export const _Hr = styled.hr`
  border: 1px solid ${(props: Theme) => props.theme.fg.hr};
`
