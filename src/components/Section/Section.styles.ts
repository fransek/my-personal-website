import styled, { css } from 'styled-components'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { Theme } from 'style/theme.styles'

export const _Section = styled(ComponentWrapper)(({ theme }: Theme) => {
  return css`
    padding: 1rem;
    padding-top: 3rem;
    min-height: 100vh;

    ${theme.media.from.tablet} {
      padding-top: 5rem;
    }
  `
})

export const _Section_Title = styled.h2``

export const _Section_Next = styled.div`
  margin: 2rem auto;
  width: min-content;
  &:hover {
    cursor: pointer;
  }
`
