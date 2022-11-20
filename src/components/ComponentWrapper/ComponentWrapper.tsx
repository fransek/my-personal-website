import * as React from 'react'

export interface IComponentWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  innerRef?: React.RefObject<HTMLDivElement>
}

export const ComponentWrapper = ({
  className,
  id,
  innerRef,
  children,
}: IComponentWrapperProps) => {
  return (
    <div className={className} id={id} ref={innerRef}>
      {children}
    </div>
  )
}
