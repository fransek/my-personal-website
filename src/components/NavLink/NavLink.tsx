import * as React from 'react'

import { _NavLink, _NavLink_Anchor } from './NavLink.styles'
import { useEffect, useState } from 'react'

import { IComponentProps } from 'components/component'

export interface INavLink {
  title: string
  sectionRef: React.RefObject<HTMLDivElement>
}

interface INavLinkProps extends IComponentProps, INavLink {}

export const NavLink = ({
  className,
  id,
  innerRef,
  title,
  sectionRef,
}: INavLinkProps) => {
  const [elementY, setElementY] = useState<number>()
  const [elementHeight, setElementHeight] = useState<number>()
  const [active, setActive] = useState<boolean>(false)

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current !== null && ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const isInView = () => {
      return (
        typeof elementY === 'number' &&
        typeof elementHeight === 'number' &&
        window.scrollY >= elementY - window.innerHeight / 2 &&
        window.scrollY < elementY + elementHeight - window.innerHeight / 2
      )
    }

    const updateActiveState = () => {
      console.log(window.scrollY)
      if (isInView()) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener('scroll', updateActiveState)
    updateActiveState()

    return () => {
      window.removeEventListener('scroll', updateActiveState)
    }
  }, [elementHeight, elementY])

  useEffect(() => {
    const updateElementState = () => {
      setElementY(sectionRef.current?.offsetTop)
      setElementHeight(sectionRef.current?.clientHeight)
      console.log('ElementY: ' + elementY)
      console.log('ElementHeight: ' + elementHeight)
    }

    window.addEventListener('resize', updateElementState)
    updateElementState()

    return () => {
      window.removeEventListener('resize', updateElementState)
    }
  }, [sectionRef])

  return (
    <_NavLink className={className} id={id} innerRef={innerRef}>
      <_NavLink_Anchor active={active} onClick={() => scrollTo(sectionRef)}>
        {title}
      </_NavLink_Anchor>
    </_NavLink>
  )
}
