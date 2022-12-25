import { Theme } from './theme.styles'
import { css } from 'styled-components'

export const media = {
  mobile_s: '320px',
  mobile_m: '375px',
  mobile_l: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptop_l: '1440px',
  four_k: '2560px',
}

export const flexRow = css`
  display: flex;
  flex-direction: row;
`

export const flexCol = css`
  display: flex;
  flex-direction: column;
`

export const fixedField = css`
  position: fixed;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: ${({ theme }: Theme) => theme.bg.darkTransparent};
  backdrop-filter: blur(5px);
`

export const clickable = css`
  filter: drop-shadow(${({ theme }: Theme) => theme.fg.textShadow.inactive});
  transition: filter 0.5s;
  &:hover {
    cursor: pointer;
    filter: drop-shadow(${({ theme }: Theme) => theme.fg.textShadow.hover});
  }
  &:active {
    transition: filter 0.2s;
    filter: drop-shadow(${({ theme }: Theme) => theme.fg.textShadow.active});
  }
`
