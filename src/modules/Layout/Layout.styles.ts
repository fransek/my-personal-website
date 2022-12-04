import { media } from 'style/util.styles'
import styled from 'styled-components'

export const _Content = styled.div`
  margin-bottom: 3rem;
  @media (min-width: ${media.tablet}) {
    width: clamp(${media.tablet}, 70%, ${media.laptop_l});
    margin: auto;
  }
`
