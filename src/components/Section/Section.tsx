import * as React from 'react'

import { _Section, _Section_Title } from './Section.styles'

import { IComponentProps } from 'components/component'

interface ISectionProps extends IComponentProps {
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
