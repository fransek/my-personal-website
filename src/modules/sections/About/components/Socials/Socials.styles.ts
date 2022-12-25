import { clickable, media } from 'style/util.styles'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'

export const _Socials = styled(ComponentWrapper)`
  justify-content: center;
  display: flex;
  @media (min-width: ${media.tablet}) {
    justify-content: flex-start;
  }
`

export const _Socials_Link = styled.div`
  margin: 1rem;

  @media (min-width: ${media.tablet}) {
    margin: 1rem 2rem 0 0;
  }
`

export const _SocialIcon = styled(SocialIcon)`
  ${clickable}
`
