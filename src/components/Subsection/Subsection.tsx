import * as React from 'react'

import { IComponentProps } from 'components/component'
import { _Subsection } from './Subsection.styles'

interface ISubsectionProps extends IComponentProps {}

export const Subsection = ({ className, id, innerRef }: ISubsectionProps) => {
  return (
    <_Subsection className={className} id={id} innerRef={innerRef}>
      Subsection
    </_Subsection>
  )
}
