import React from 'react'
import { _Caret } from './Caret.styles'

interface ICaretProps {
  size?: number
  onClick?: () => void
}

export const Caret = ({ onClick, size = 36 }: ICaretProps) => (
  <>
    <_Caret
      width={`${size}px`}
      height={`${size}px`}
      viewBox='0 -6 524 524'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
    >
      <title>caret</title>
      <path d='M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z' />
    </_Caret>
  </>
)
