import styled, { css } from 'styled-components'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { Theme } from 'style/theme.styles'
import { flexRow } from 'style/util.styles'

export const _About = styled(ComponentWrapper)``

export const _About_Body = styled.div(({ theme }: Theme) => {
  return css`
    display: flex;
    flex-direction: column-reverse;
    ${theme.media.from.tablet} {
      ${flexRow}
    }
  `
})

export const _About_Text = styled.div`
  width: 100%;
`

export const _About_Img = styled.div(({ theme }: Theme) => {
  return css`
    width: 50%;
    margin: 0 auto;
    max-width: 16rem;
    ${theme.media.from.tablet} {
      width: auto;
    }
    img {
      width: 100%;
    }
  `
})

export const _About_Links = styled.div(({ theme }: Theme) => {
  return css`
    justify-content: center;
    display: flex;
    ${theme.media.from.tablet} {
      justify-content: flex-start;
    }
  `
})
