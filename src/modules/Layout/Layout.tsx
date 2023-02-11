import '@fontsource/anek-devanagari/300.css'
import 'animate.css/animate.min.css'

import React, { createContext, useState } from 'react'
import { darkTheme, defaultTheme } from 'style/theme.styles'

import { GlobalStyle } from 'style/global.styles'
import { ThemeProvider } from 'styled-components'
import { _Content } from './Layout.styles'
import { useContext } from 'react'

interface ILayoutProps {
  children: React.ReactNode
}

interface IThemeContext {
  darkMode: boolean
  switchTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({
  darkMode: false,
  switchTheme: () => {},
})

export const useThemeContext = () => {
  return useContext<IThemeContext>(ThemeContext)
}

export default function Layout({ children }: ILayoutProps) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme)

  const switchTheme = () => {
    setCurrentTheme(currentTheme === defaultTheme ? darkTheme : defaultTheme)
  }

  return (
    <ThemeContext.Provider
      value={{ darkMode: currentTheme === darkTheme, switchTheme }}
    >
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <_Content>{children}</_Content>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
