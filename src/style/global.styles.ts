import { Theme, theme } from './theme.styles'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
      min-height: 100vh;
      background-image: linear-gradient(to right, ${({ theme }: Theme) =>
        theme.bg.gradient});
      color: white;
      margin: 0;
      padding: 0;
      font-family: "Anek Devanagari", sans-serif;
  }
`
