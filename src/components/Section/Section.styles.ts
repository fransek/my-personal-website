import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { media } from 'style/util.styles'
import styled from 'styled-components'

export const _Section = styled(ComponentWrapper)`
  padding: 1rem;
  padding-top: 3rem;
  min-height: 100vh;

  @media (min-width: ${media.tablet}) {
    padding-top: 5rem;
  }
`

export const _Section_Title = styled.h2``

export const _Section_Next = styled.div`
  margin: 2rem auto;
  width: min-content;
  &:hover {
    cursor: pointer;
  }
`
