import React from 'react'
import { _Grid } from './Grid.styles'

interface IGridProps {
  children: React.ReactNode
}

export const Grid = ({ children }: IGridProps) => {
  return <_Grid>{children}</_Grid>
}
