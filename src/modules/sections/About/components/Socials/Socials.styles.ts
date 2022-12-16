import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { media } from 'style/util.styles'
import styled from 'styled-components'

export const _Socials = styled(ComponentWrapper)`
  justify-content: center;
  display: flex;
  @media (min-width: ${media.tablet}) {
    justify-content: flex-start;
  }
`

export const _Socials_Link = styled.div`
  padding: 0 1rem;
`
