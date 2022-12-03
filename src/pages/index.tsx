import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { About } from 'modules/sections/About/About'
import { AppFooter } from 'modules/AppFooter/AppFooter'
import { Contact } from 'modules/sections/Contact/Contact'
import { Education } from 'modules/sections/Education/Education'
import Layout from 'modules/Layout/Layout'
import { Nav } from 'components/Nav/Nav'
import { Projects } from 'modules/sections/Projects/Projects'
import { Work } from 'modules/sections/Work/Work'
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
          { title: 'About', sectionRef: aboutMeRef },
          { title: 'Work', sectionRef: workRef },
          { title: 'Education', sectionRef: educationRef },
          { title: 'Projects', sectionRef: projectsRef },
          { title: 'Contact', sectionRef: contactRef },
        ]}
      />
      <About innerRef={aboutMeRef} />
      <Work innerRef={workRef} />
      <Education innerRef={educationRef} />
      <Projects innerRef={projectsRef} />
      <Contact innerRef={contactRef} />
      <AppFooter />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Frans Ekman</title>
