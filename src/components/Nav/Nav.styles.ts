import styled, { css } from 'styled-components'

import { ComponentWrapper } from '../ComponentWrapper/ComponentWrapper'
import { Theme } from 'style/theme.styles'
import { flexRow } from 'style/util.styles'

export const _Nav = styled(ComponentWrapper)(({ theme }: Theme) => {
  return css`
    z-index: 1000;
    position: fixed;
    right: 0;
    left: 0;
    height: 3rem;
    background-color: ${theme.colors.bg.transparent};
    backdrop-filter: blur(5px);
    ${flexRow}
  `
})

export const _Nav_Center = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;
  ${flexRow}
`

export const _Nav_Aside = styled.div`
  height: 100%;
  justify-content: end;
  align-items: center;
  margin-left: auto;
  min-width: 3rem;
  ${flexRow}
`
