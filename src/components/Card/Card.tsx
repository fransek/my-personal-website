import * as React from 'react'

import { IComponentProps } from 'components/component'
import { _Card } from './Card.styles'

interface ICardProps extends IComponentProps {
  children: React.ReactNode
}

export const Card = ({ className, id, innerRef, children }: ICardProps) => {
  return (
    <_Card className={className} id={id} innerRef={innerRef}>
      {children}
    </_Card>
  )
}
