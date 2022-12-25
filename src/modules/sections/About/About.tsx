import * as React from 'react'

import {
  _About_Body,
  _About_Img,
  _About_Links,
  _About_Text,
} from './About.styles'

import { AboutContent } from 'content/AboutContent'
import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { NavLink } from 'components/NavLink/NavLink'
import { QuickLink } from '../../../components/QuickLink/QuickLink'
import { Section } from 'components/Section/Section'
import { Socials } from './components/Socials/Socials'
import { _HR } from '../../../style/components.styles'

interface IAboutProps extends IComponentProps {
  nextSectionRef: React.RefObject<HTMLDivElement>
  navLinks: {
    title: string
    sectionRef: React.RefObject<HTMLDivElement>
  }[]
}

export const About = ({
  className,
  id,
  innerRef,
  nextSectionRef,
  navLinks,
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
          <_HR />
          <_About_Links>
            {navLinks.map((link) => (
              <QuickLink
                sectionRef={link.sectionRef}
                title={link.title}
                key={link.title}
              />
            ))}
          </_About_Links>
          <_HR />
          <Socials />
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
