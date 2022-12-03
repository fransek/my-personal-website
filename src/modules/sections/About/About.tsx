import * as React from 'react'

import { AboutText } from 'content/AboutText'
import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { Section } from 'components/Section/Section'

interface IAboutProps extends IComponentProps {}

export const About = ({ className, id, innerRef }: IAboutProps) => {
  return (
    <Section className={className} id={id} innerRef={innerRef}>
      <MD>{AboutText.content}</MD>
    </Section>
  )
}
