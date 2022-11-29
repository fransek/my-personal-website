import * as React from 'react'

import { IComponentProps } from 'components/component'
import { _Subsection } from './Subsection.styles'

interface ISubsectionProps extends IComponentProps {
  title: string
  children: React.ReactNode
}

export const Subsection = ({
  className,
  id,
  innerRef,
  children,
  title,
}: ISubsectionProps) => {
  return (
    <_Subsection className={className} id={id} innerRef={innerRef}>
      <h3>{title}</h3>
      {children}
    </_Subsection>
  )
}
