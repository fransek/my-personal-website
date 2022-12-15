import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import styled from 'styled-components'

export const _Grid = styled(ComponentWrapper)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-gap: 1rem;
`
