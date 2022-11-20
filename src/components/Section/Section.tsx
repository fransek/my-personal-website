import * as React from 'react'

import { IComponentWrapperProps } from 'components/ComponentWrapper/ComponentWrapper'
import { _Section } from './Section.styles'

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
      <h1>{title}</h1>
      {children}
    </_Section>
  )
}
