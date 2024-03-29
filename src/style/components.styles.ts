import styled, { css } from 'styled-components'

import { Theme } from './theme.styles'

export const _HR = styled.hr(({ theme }: Theme) => {
  return css`
    border: 1px solid ${theme.colors.border.primary};
  `
})
