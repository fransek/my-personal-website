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
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
`
