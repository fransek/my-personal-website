import * as React from 'react'

import { DarkMode } from './components/DarkMode'
import { IComponentProps } from 'components/component'
import { LightMode } from './components/LightMode'
import { _ThemeSwitch } from './ThemeSwitch.styles'
import { useThemeContext } from '../../modules/Layout/Layout'

interface IThemeSwitchProps extends IComponentProps {}

export const ThemeSwitch = ({ className, id, innerRef }: IThemeSwitchProps) => {
  const { darkMode, switchTheme } = useThemeContext()

  return (
    <_ThemeSwitch
      className={className}
      id={id}
      innerRef={innerRef}
      onClick={switchTheme}
    >
      {darkMode ? <LightMode /> : <DarkMode />}
    </_ThemeSwitch>
  )
}
