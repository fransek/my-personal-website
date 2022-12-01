import * as React from 'react'

import { IComponentProps } from 'components/component'
import { _Footer } from './Footer.styles'

interface IFooterProps extends IComponentProps {
  children: React.ReactNode
}

export const Footer = ({ className, id, innerRef, children }: IFooterProps) => {
  return (
    <_Footer className={className} id={id} innerRef={innerRef}>
      {children}
    </_Footer>
  )
}
