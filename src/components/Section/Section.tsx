import * as React from 'react'

import { _Section, _Section_Title } from './Section.styles'

import { AnimationOnScroll } from 'react-animation-on-scroll'
import { IComponentProps } from 'components/component'

interface ISectionProps extends IComponentProps {
  children: React.ReactNode
}

export const Section = ({
  children,
  className,
  id,
  innerRef,
}: ISectionProps) => {
  return (
    <_Section className={className} id={id} innerRef={innerRef}>
      <AnimationOnScroll animateIn='animate__fadeIn'>
        {children}
      </AnimationOnScroll>
    </_Section>
  )
}
