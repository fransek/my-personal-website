import { Theme } from './theme.styles'
import { createGlobalStyle } from 'styled-components'
import { theme } from 'style/theme.styles'

export const GlobalStyle = createGlobalStyle`
  body {
      min-height: 100vh;
      background-image: linear-gradient(to bottom right, ${(props: Theme) =>
        props.theme.bg.gradient_1}, ${(props: Theme) =>
  props.theme.bg.gradient_2});
      color: white;
      margin: 0;
      padding: 0;
      font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`
