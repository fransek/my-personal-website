import { NormalComponents } from 'react-markdown/lib/complex-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { SpecialComponents } from 'react-markdown/lib/ast-to-react'

interface IMDProps {
  children: string
}

export const MD = ({ children }: IMDProps) => {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>
}

const components: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {}
