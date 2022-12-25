import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { Theme } from './../../style/theme.styles'
import styled from 'styled-components'

export const _NavLink = styled(ComponentWrapper)`
  margin: 0.5rem;
`
interface I_NavLink_Anchor_Props {
  active: boolean
}

export const _NavLink_Anchor = styled.a`
  &:hover {
    cursor: pointer;
  }

  transition: text-shadow 0.5s;
  text-shadow: ${({ active }: I_NavLink_Anchor_Props) =>
    active
      ? ({ theme }: Theme) => theme.fg.textShadow.active
      : ({ theme }: Theme) => theme.fg.textShadow.inactive};
`
