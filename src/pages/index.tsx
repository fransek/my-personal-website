import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import Layout from 'components/Layout/Layout'
import { Section } from 'components/Section/Section'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Section title='Section'>
        <p>This is a section</p>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
