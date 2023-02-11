import { createGlobalStyle, css } from 'styled-components'

import { Theme } from './theme.styles'

export const GlobalStyle = createGlobalStyle(({ theme }: Theme) => {
  return css`
    * {
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      background-image: linear-gradient(
        to right,
        ${theme.colors.bg.gradient_1},
        ${theme.colors.bg.gradient_2}
      );
      color: ${theme.colors.text.primary};
      margin: 0;
      padding: 0;
      font-family: 'Anek Devanagari', sans-serif;
    }
  `
})
