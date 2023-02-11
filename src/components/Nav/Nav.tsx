import * as React from 'react'

import { INavLink, NavLink } from '../NavLink/NavLink'
import { _Nav, _Nav_Aside, _Nav_Center } from './Nav.styles'

import { IComponentProps } from 'components/component'
import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch'

interface INavProps extends IComponentProps {
  links: INavLink[]
}

export const Nav = ({ className, id, innerRef, links }: INavProps) => {
  return (
    <_Nav className={className} id={id} innerRef={innerRef}>
      <_Nav_Aside />
      <_Nav_Center>
        {links.map((link, index) => (
          <NavLink
            title={link.title}
            sectionRef={link.sectionRef}
            key={index}
          />
        ))}
      </_Nav_Center>
      <_Nav_Aside>
        <ThemeSwitch />
      </_Nav_Aside>
    </_Nav>
  )
}
