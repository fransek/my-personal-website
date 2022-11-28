import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { AboutMe } from 'components/sections/AboutMe/AboutMe'
import { Contact } from 'components/sections/Contact/Contact'
import { Education } from 'components/sections/Education/Education'
import Layout from 'components/Layout/Layout'
import { Nav } from 'components/Nav/Nav'
import { Projects } from 'components/sections/Projects/Projects'
import { Work } from 'components/sections/Work/Work'
import { useRef } from 'react'

const IndexPage: React.FC<PageProps> = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <Layout>
      <Nav
        links={[
          { title: 'About me', sectionRef: aboutMeRef },
          { title: 'Work', sectionRef: workRef },
          { title: 'Education', sectionRef: educationRef },
          { title: 'Projects', sectionRef: projectsRef },
          { title: 'Contact', sectionRef: contactRef },
        ]}
      />
      <AboutMe innerRef={aboutMeRef} />
      <Work innerRef={workRef} />
      <Education innerRef={educationRef} />
      <Projects innerRef={projectsRef} />
      <Contact innerRef={contactRef} />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
