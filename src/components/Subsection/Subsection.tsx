import * as React from 'react'

import { IComponentWrapperProps } from '../ComponentWrapper/ComponentWrapper'
import { _Subsection } from './Subsection.styles'

interface ISubsectionProps extends IComponentWrapperProps {}

export const Subsection = ({ className, id, innerRef }: ISubsectionProps) => {
  return (
    <_Subsection className={className} id={id} innerRef={innerRef}>
      Subsection
    </_Subsection>
  )
}
