import styled, { css, useTheme } from 'styled-components'

import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { Theme } from './../../style/theme.styles'

export const _NavLink = styled(ComponentWrapper)`
  margin: 0.5rem;
`
interface I_NavLink_Anchor_Props extends Theme {
  active: boolean
}

export const _NavLink_Anchor = styled.a(
  ({ active, theme }: I_NavLink_Anchor_Props) => css`
    transition: text-shadow 0.5s;
    text-shadow: ${active ? theme.shadows.active : theme.shadows.inactive};

    &:hover {
      text-shadow: ${theme.shadows.hover};
      cursor: pointer;
    }
  `
)
