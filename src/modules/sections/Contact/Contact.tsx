import * as React from 'react'

import { ContactContent } from 'content/ContactContent'
import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { Section } from 'components/Section/Section'

interface IContactProps extends IComponentProps {}

export const Contact = ({ className, id, innerRef }: IContactProps) => {
  return (
    <Section className={className} id={id} innerRef={innerRef}>
      <MD>{ContactContent.text.title}</MD>
    </Section>
  )
}
