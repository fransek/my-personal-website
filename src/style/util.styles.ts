import { Theme } from './theme.styles'
import { css } from 'styled-components'

export const flexRow = css`
  display: flex;
  flex-direction: row;
`

export const flexCol = css`
  display: flex;
  flex-direction: column;
`

export const fixedField = ({ theme }: Theme) => css`
  position: fixed;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: ${theme.colors.bg.transparent};
  backdrop-filter: blur(5px);
`

export const clickable = ({ theme }: Theme) => css`
  filter: drop-shadow(${theme.shadows.inactive});
  transition: filter 0.5s;
  &:hover {
    cursor: pointer;
    filter: drop-shadow(${theme.shadows.hover});
  }
  &:active {
    transition: filter 0.2s;
    filter: drop-shadow(${theme.shadows.active});
  }
`
