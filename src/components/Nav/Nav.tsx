import * as React from 'react'

import { _Nav, _Nav_Link } from './Nav.styles'

import { IComponentWrapperProps } from '../ComponentWrapper/ComponentWrapper'

interface INavProps extends IComponentWrapperProps {
  links: { title: string }[]
}

export const Nav = ({ className, id, innerRef, links }: INavProps) => {
  return (
    <_Nav className={className} id={id} innerRef={innerRef}>
      {links.map((link) => (
        <_Nav_Link>{link.title}</_Nav_Link>
      ))}
    </_Nav>
  )
}
