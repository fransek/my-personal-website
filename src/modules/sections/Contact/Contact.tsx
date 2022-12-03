import * as React from 'react'

import { ContactText } from 'content/ContactText'
import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { Section } from 'components/Section/Section'

interface IContactProps extends IComponentProps {}

export const Contact = ({ className, id, innerRef }: IContactProps) => {
  return (
    <Section className={className} id={id} innerRef={innerRef}>
      <MD>{ContactText.content}</MD>
    </Section>
  )
}
