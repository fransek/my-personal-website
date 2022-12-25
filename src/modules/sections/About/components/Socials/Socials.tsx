import * as React from 'react'

import { _SocialIcon, _Socials, _Socials_Link } from './Socials.styles'

import { IComponentProps } from 'components/component'
import { SocialIcon } from 'react-social-icons'

interface ISocialsProps extends IComponentProps {}

export const Socials = ({ className, id, innerRef }: ISocialsProps) => {
  return (
    <_Socials className={className} id={id} innerRef={innerRef}>
      <_Socials_Link>
        <_SocialIcon
          url='https://linkedin.com/in/frans-ekman/'
          bgColor='white'
        />
      </_Socials_Link>
      <_Socials_Link>
        <_SocialIcon url='https://github.com/fransek' bgColor='white' />
      </_Socials_Link>
      <_Socials_Link>
        <_SocialIcon url='mailto:fransedvinekman@gmail.com' bgColor='white' />
      </_Socials_Link>
    </_Socials>
  )
}
