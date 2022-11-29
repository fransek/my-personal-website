import * as React from 'react'

import { IComponentProps } from 'components/component'
import { _Footer } from './Footer.styles'

interface IFooterProps extends IComponentProps {}

export const Footer = ({ className, id, innerRef }: IFooterProps) => {
  return (
    <_Footer className={className} id={id} innerRef={innerRef}>
      Footer
    </_Footer>
  )
}
