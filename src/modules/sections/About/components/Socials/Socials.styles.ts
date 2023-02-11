import styled, { css } from 'styled-components'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { SocialIcon } from 'react-social-icons'
import { Theme } from 'style/theme.styles'
import { clickable } from 'style/util.styles'

export const _Socials = styled(ComponentWrapper)(({ theme }: Theme) => {
  return css`
    justify-content: center;
    display: flex;
    ${theme.media.from.tablet} {
      justify-content: flex-start;
    }
  `
})
export const _Socials_Link = styled.div(({ theme }: Theme) => {
  return css`
    margin: 1rem;

    ${theme.media.from.tablet} {
      margin: 1rem 2rem 0 0;
    }
  `
})
export const _SocialIcon = styled(SocialIcon)`
  ${clickable}
`
