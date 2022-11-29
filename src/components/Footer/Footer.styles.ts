import { fixedField, flexRow } from 'style/util.styles'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import styled from 'styled-components'

export const _Footer = styled(ComponentWrapper)`
  ${flexRow}
  ${fixedField}
  bottom: 0;
`