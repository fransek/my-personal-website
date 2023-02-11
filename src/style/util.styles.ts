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

export const clickable = ({ theme }: Theme) => {
  return css`
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
}
