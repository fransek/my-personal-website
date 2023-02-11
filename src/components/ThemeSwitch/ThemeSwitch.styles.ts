import { clickable, flexRow } from 'style/util.styles'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import styled from 'styled-components'

export const _ThemeSwitch = styled(ComponentWrapper)`
  ${flexRow}
  ${clickable}
  margin: 0.5rem;
`
