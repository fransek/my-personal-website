import styled, { css } from 'styled-components'

import { Theme } from 'style/theme.styles'
import { clickable } from '../../style/util.styles'

export const _Caret = styled.svg(({ theme }: Theme) => {
  return css`
    ${clickable}
    fill: ${theme.colors.text.primary};
  `
})
