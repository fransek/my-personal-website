import { ComponentWrapper } from '../ComponentWrapper/ComponentWrapper'
import { flexRow } from 'style/util.styles'
import styled from 'styled-components'

export const _Nav = styled(ComponentWrapper)`
  ${flexRow}
  position: fixed;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 3rem;
`
