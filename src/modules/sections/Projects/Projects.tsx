import * as React from 'react'

import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { ProjectsContent } from 'content/ProjectsContent'
import { Section } from 'components/Section/Section'

interface IProjectsProps extends IComponentProps {}

export const Projects = ({ className, id, innerRef }: IProjectsProps) => {
  return (
    <Section className={className} id={id} innerRef={innerRef}>
      <MD>{ProjectsContent.text.title}</MD>
    </Section>
  )
}
