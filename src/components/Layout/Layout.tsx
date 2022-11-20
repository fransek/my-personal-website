import { GlobalStyle } from 'style/global.styles'
import { Nav } from 'components/Nav/Nav'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { _Content } from './Layout.styles'
import { theme } from 'style/theme.styles'

interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav
        links={[
          { title: 'About me' },
          { title: 'Work' },
          { title: 'Education' },
          { title: 'Projects' },
          { title: 'Contact' },
        ]}
      />
      <_Content>{children}</_Content>
    </ThemeProvider>
  )
}
