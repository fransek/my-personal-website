import { NormalComponents } from 'react-markdown/lib/complex-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { SpecialComponents } from 'react-markdown/lib/ast-to-react'

interface IMDProps {
  children: string
  customize?: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
  >
}

export const MD = ({ children, customize }: IMDProps) => {
  return (
    <ReactMarkdown components={{ ...components, ...customize }}>
      {children}
    </ReactMarkdown>
  )
}

const components: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {}
