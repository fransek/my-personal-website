import { flexRow, media } from 'style/util.styles'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import styled from 'styled-components'

export const _About = styled(ComponentWrapper)``

export const _About_Body = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${media.tablet}) {
    ${flexRow}
  }
`

export const _About_Text = styled.div`
  width: 100%;
`

export const _About_Img = styled.div`
  width: 50%;
  margin: 0 auto;
  max-width: 16rem;
  @media (min-width: ${media.tablet}) {
    width: auto;
  }
  img {
    width: 100%;
  }
`

export const _About_Links = styled.div`
  justify-content: center;
  display: flex;
  @media (min-width: ${media.tablet}) {
    justify-content: flex-start;
  }
`
