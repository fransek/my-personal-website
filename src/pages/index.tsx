import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import Layout from 'components/Layout/Layout'
import { Section } from 'components/Section/Section'

const IndexPage: React.FC<PageProps> = () => {
  const section = (
    <Section title='Section'>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
        consequuntur a illum corporis ipsum tenetur sed nulla quasi nam dolorem
        magnam repudiandae vero id inventore, eaque error in laboriosam commodi
        sit voluptatem sint officiis corrupti modi. Eum veniam exercitationem
        laudantium neque quos quis magnam distinctio consequuntur libero,
        similique delectus dignissimos obcaecati sequi laborum quasi eaque error
        autem aliquid aspernatur tempore. Repudiandae molestiae, explicabo rem
        maxime facilis assumenda exercitationem aperiam incidunt soluta eum eos
        dignissimos laboriosam, sint nostrum eaque numquam possimus maiores.
        Amet nam sed, quod ullam alias veritatis mollitia reiciendis delectus ea
        cumque vel, ad maiores autem iure nisi illo.
      </p>
    </Section>
  )
  return (
    <Layout>
      {section}
      {section}
      {section}
      {section}
      {section}
      {section}
      {section}
      {section}
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
