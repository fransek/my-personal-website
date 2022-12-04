import React from 'react'
import { _DownArrow } from './DownArrow.styles'

export const DownArrow = ({ onClick }: { onClick?: () => void }) => (
  <>
    <_DownArrow
      width='36px'
      height='36px'
      viewBox='0 -6 524 524'
      xmlns='http://www.w3.org/2000/svg'
      fill='white'
      onClick={onClick}
    >
      <title>down</title>
      <path d='M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z' />
    </_DownArrow>
  </>
)
