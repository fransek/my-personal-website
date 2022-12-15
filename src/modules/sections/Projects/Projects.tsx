import * as React from 'react'

import { Card } from 'components/Card/Card'
import { Grid } from 'components/Grid/Grid'
import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { ProjectsContent } from 'content/ProjectsContent'
import { Section } from 'components/Section/Section'

interface IProjectsProps extends IComponentProps {
  nextSectionRef: React.RefObject<HTMLDivElement>
}

export const Projects = ({
  className,
  id,
  innerRef,
  nextSectionRef,
}: IProjectsProps) => {
  return (
    <Section
      className={className}
      id={id}
      innerRef={innerRef}
      nextSectionRef={nextSectionRef}
    >
      <MD>{ProjectsContent.text.title}</MD>
      <Grid>
        <Card>
          <MD>{ProjectsContent.text.cards.project}</MD>
        </Card>
        <Card>
          <MD>{ProjectsContent.text.cards.project}</MD>
        </Card>
        <Card>
          <MD>{ProjectsContent.text.cards.project}</MD>
        </Card>
        <Card>
          <MD>{ProjectsContent.text.cards.project}</MD>
        </Card>
      </Grid>
    </Section>
  )
}
