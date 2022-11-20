import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { Section } from 'components/Section/Section'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Section title='Section'>
        <p>This is a section</p>
      </Section>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
