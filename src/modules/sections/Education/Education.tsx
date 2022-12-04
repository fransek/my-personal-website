import * as React from 'react'

import { EducationContent } from 'content/EducationContent'
import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { Section } from 'components/Section/Section'

interface IEducationProps extends IComponentProps {
  nextSectionRef: React.RefObject<HTMLDivElement>
}

export const Education = ({
  className,
  id,
  innerRef,
  nextSectionRef,
}: IEducationProps) => {
  return (
    <Section
      className={className}
      id={id}
      innerRef={innerRef}
      nextSectionRef={nextSectionRef}
    >
      <MD>{EducationContent.text.title}</MD>
    </Section>
  )
}
