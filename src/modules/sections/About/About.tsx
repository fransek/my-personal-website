import * as React from 'react'

import { _About_Body, _About_Img, _About_Text } from './About.styles'

import { AboutContent } from 'content/AboutContent'
import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { Section } from 'components/Section/Section'

interface IAboutProps extends IComponentProps {
  nextSectionRef: React.RefObject<HTMLDivElement>
}

export const About = ({
  className,
  id,
  innerRef,
  nextSectionRef,
}: IAboutProps) => {
  return (
    <Section
      className={className}
      id={id}
      innerRef={innerRef}
      nextSectionRef={nextSectionRef}
    >
      <MD>{AboutContent.text.title}</MD>
      <_About_Body>
        <_About_Text>
          <MD>{AboutContent.text.body}</MD>
        </_About_Text>
        <_About_Img>
          <img
            src={AboutContent.images.me.src}
            alt={AboutContent.images.me.alt}
          />
        </_About_Img>
      </_About_Body>
    </Section>
  )
}
