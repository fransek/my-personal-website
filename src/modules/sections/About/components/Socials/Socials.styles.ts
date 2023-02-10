import { clickable, media } from 'style/util.styles'
import styled, { css } from 'styled-components'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { SocialIcon } from 'react-social-icons'
import { Theme } from 'style/theme.styles'

export const _Socials = styled(ComponentWrapper)(
  ({ theme }: Theme) => css`
    justify-content: center;
    display: flex;
    ${theme.media.from.tablet} {
      justify-content: flex-start;
    }
  `
)
export const _Socials_Link = styled.div(
  ({ theme }: Theme) => css`
    margin: 1rem;

    ${theme.media.from.tablet} {
      margin: 1rem 2rem 0 0;
    }
  `
)
export const _SocialIcon = styled(SocialIcon)`
  ${clickable}
`
