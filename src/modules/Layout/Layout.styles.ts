import styled, { css } from 'styled-components'

import { Theme } from 'style/theme.styles'

export const _Content = styled.div(({ theme }: Theme) => {
  return css`
    margin-bottom: 3rem;
    ${theme.media.from.tablet} {
      width: clamp(${theme.media.px.tablet}, 70%, ${theme.media.px.laptop_l});
      margin: auto;
    }
  `
})
