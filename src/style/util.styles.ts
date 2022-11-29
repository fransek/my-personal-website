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
export const fixedField = css`
  position: fixed;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
`
