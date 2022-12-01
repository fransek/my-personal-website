import * as React from 'react'

import { _AppFooter, _AppFooter_Icon } from './AppFooter.styles'

import { IComponentProps } from 'components/component'
import { SocialIcon } from 'react-social-icons'

interface IAppFooterProps extends IComponentProps {}

export const AppFooter = ({ className, id, innerRef }: IAppFooterProps) => {
  const style: React.CSSProperties = {
    height: 30,
    width: 30,
  }

  return (
    <_AppFooter className={className} id={id} innerRef={innerRef}>
      <_AppFooter_Icon>
        <SocialIcon
          url='https://linkedin.com/in/frans-ekman/'
          bgColor='white'
          style={style}
        />
      </_AppFooter_Icon>
      <_AppFooter_Icon>
        <SocialIcon
          url='https://github.com/fransek'
          bgColor='white'
          style={style}
        />
      </_AppFooter_Icon>
      <_AppFooter_Icon>
        <SocialIcon
          url='mailto:fransedvinekman@gmail.com'
          bgColor='white'
          style={style}
        />
      </_AppFooter_Icon>
    </_AppFooter>
  )
}
