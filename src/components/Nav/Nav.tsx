import * as React from 'react'

import { IComponentWrapperProps } from '../ComponentWrapper/ComponentWrapper'
import { _Nav } from './Nav.styles'

interface INavProps extends IComponentWrapperProps {}

export const Nav = ({ className, id, innerRef }: INavProps) => {
  return (
    <_Nav className={className} id={id} innerRef={innerRef}>
      Nav
    </_Nav>
  )
}
