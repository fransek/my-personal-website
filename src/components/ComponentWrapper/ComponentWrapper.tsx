import * as React from 'react'

import { IComponentProps } from 'components/component'

export interface IComponentWrapperProps extends IComponentProps {
  children: React.ReactNode
}

export const ComponentWrapper = ({
  className,
  id,
  innerRef,
  children,
  onClick,
}: IComponentWrapperProps) => {
  return (
    <div className={className} id={id} ref={innerRef} onClick={onClick}>
      {children}
    </div>
  )
}
