import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { media } from 'style/util.styles'
import styled from 'styled-components'

export const _QuickLink = styled(ComponentWrapper)``

export const _QuickLink_Anchor = styled.a`
  margin: 0 1rem;
  font-size: larger;

  @media (min-width: ${media.tablet}) {
    margin: 0 2rem 0 0;
  }

  &:hover {
    cursor: pointer;
  }
`
