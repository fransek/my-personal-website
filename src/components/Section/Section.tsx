import * as React from 'react'

import { _Section, _Section_Title } from './Section.styles'

import { IComponentWrapperProps } from 'components/ComponentWrapper/ComponentWrapper'

interface ISectionProps extends IComponentWrapperProps {
  title: string
  children: React.ReactNode
}

export const Section = ({
  children,
  title,
  className,
  id,
  innerRef,
}: ISectionProps) => {
  return (
    <_Section className={className} id={id} innerRef={innerRef}>
      <_Section_Title>{title}</_Section_Title>
      {children}
    </_Section>
  )
}
