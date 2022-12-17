import * as React from 'react'

import { _QuickLink, _QuickLink_Anchor } from './QuickLink.styles'

import { IComponentProps } from 'components/component'

interface IQuickLinkProps extends IComponentProps {
  title: string
  sectionRef: React.RefObject<HTMLDivElement>
}

export const QuickLink = ({
  className,
  id,
  innerRef,
  sectionRef,
  title,
}: IQuickLinkProps) => {
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current !== null && ref.current.scrollIntoView()
  }

  return (
    <_QuickLink className={className} id={id} innerRef={innerRef}>
      <_QuickLink_Anchor onClick={() => scrollTo(sectionRef)}>
        {title}
      </_QuickLink_Anchor>
    </_QuickLink>
  )
}
