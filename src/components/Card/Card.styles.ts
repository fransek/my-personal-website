import styled, { ThemedCssFunction, css } from 'styled-components'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { Theme } from 'style/theme.styles'

export const _Card = styled(ComponentWrapper)(({ theme }: Theme) => {
  return css`
    background-color: ${theme.colors.bg.transparent};
    border-radius: 1rem;
    padding: 1rem;
  `
})

export const _Card2 = styled(ComponentWrapper)`
  background-color: ${({ theme }: Theme) => theme.colors.bg.transparent};
  border-radius: 1rem;
  padding: 1rem;
`
