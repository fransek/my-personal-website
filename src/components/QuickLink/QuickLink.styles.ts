import styled, { css } from 'styled-components'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { Theme } from 'style/theme.styles'
import { clickable } from './../../style/util.styles'

export const _QuickLink = styled(ComponentWrapper)``

export const _QuickLink_Anchor = styled.a(({ theme }: Theme) => {
  return css`
    ${clickable}

    margin: 0 1rem;
    font-size: larger;

    ${theme.media.from.tablet} {
      margin: 0 2rem 0 0;
    }
  `
})
