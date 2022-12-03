import * as React from 'react'

import { IComponentProps } from 'components/component'
import { MD } from 'components/MD/MD'
import { Section } from 'components/Section/Section'
import { WorkText } from 'content/WorkText'

interface IWorkProps extends IComponentProps {}

export const Work = ({ className, id, innerRef }: IWorkProps) => {
  return (
    <Section className={className} id={id} innerRef={innerRef}>
      <MD>{WorkText.content}</MD>
    </Section>
  )
}
