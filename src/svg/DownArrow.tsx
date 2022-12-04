import React from 'react'

export const DownArrow = ({ onClick }: { onClick?: () => void }) => (
  <svg
    width='40px'
    height='40px'
    viewBox='0 -6 524 524'
    xmlns='http://www.w3.org/2000/svg'
    fill='white'
    onClick={onClick}
  >
    <title>down</title>
    <path d='M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z' />
  </svg>
)
