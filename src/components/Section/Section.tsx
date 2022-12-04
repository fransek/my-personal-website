import * as React from 'react'

import { _Section, _Section_Next, _Section_Title } from './Section.styles'

import { AnimationOnScroll } from 'react-animation-on-scroll'
import { DownArrow } from 'components/DownArrow/DownArrow'
import { IComponentProps } from 'components/component'

interface ISectionProps extends IComponentProps {
  children: React.ReactNode
  nextSectionRef?: React.RefObject<HTMLDivElement>
}

export const Section = ({
  children,
  className,
  id,
  innerRef,
  nextSectionRef,
}: ISectionProps) => {
  return (
    <_Section className={className} id={id} innerRef={innerRef}>
      <AnimationOnScroll animateIn='animate__fadeIn'>
        {children}
        {nextSectionRef && (
          <_Section_Next>
            <DownArrow
              onClick={() =>
                nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </_Section_Next>
        )}
      </AnimationOnScroll>
    </_Section>
  )
}
