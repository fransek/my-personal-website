import * as React from 'react'

import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { Section } from 'components/Section/Section'
import { WorkContent } from 'content/WorkText'

interface IWorkProps extends IComponentProps {
  nextSectionRef: React.RefObject<HTMLDivElement>
}

export const Work = ({
  className,
  id,
  innerRef,
  nextSectionRef,
}: IWorkProps) => {
  return (
    <Section
      className={className}
      id={id}
      innerRef={innerRef}
      nextSectionRef={nextSectionRef}
    >
      <MD>{WorkContent.text.title}</MD>
    </Section>
  )
}
