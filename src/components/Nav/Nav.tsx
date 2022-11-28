import * as React from 'react'

import { INavLink, NavLink } from '../NavLink/NavLink'

import { IComponentProps } from 'components/component'
import { _Nav } from './Nav.styles'

interface INavProps extends IComponentProps {
  links: INavLink[]
}

export const Nav = ({ className, id, innerRef, links }: INavProps) => {
  return (
    <_Nav className={className} id={id} innerRef={innerRef}>
      {links.map((link) => (
        <NavLink title={link.title} sectionRef={link.sectionRef} />
      ))}
    </_Nav>
  )
}
