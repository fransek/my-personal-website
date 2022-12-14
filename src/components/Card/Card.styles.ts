import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { Theme } from 'style/theme.styles'
import styled from 'styled-components'

export const _Card = styled(ComponentWrapper)`
  background-color: ${({ theme }: Theme) => theme.bg.darkTransparent};
  border-radius: 1rem;
  padding: 1rem;
`
