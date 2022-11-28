import * as React from 'react'

import { IComponentProps } from 'components/component'
import { Section } from 'components/Section/Section'

interface IAboutMeProps extends IComponentProps {}

export const AboutMe = ({ className, id, innerRef }: IAboutMeProps) => {
  return (
    <Section title='About me' className={className} id={id} innerRef={innerRef}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus
      in alias labore quod a excepturi dolorum accusantium eius soluta
      reiciendis ut quisquam, vitae incidunt, fugiat sed repudiandae expedita
      itaque officiis omnis nisi corporis voluptates. Suscipit eum quia, rem
      maiores odit tempora unde harum voluptas cumque optio iusto deserunt
      repellat. Saepe necessitatibus inventore, tenetur dicta voluptas explicabo
      quos, maxime at dolor cum, sunt non. Perspiciatis mollitia culpa illum ut
      ipsum consectetur minus explicabo cupiditate repellendus aut repudiandae
      sed perferendis tenetur laborum animi at aspernatur deleniti molestias
      quasi obcaecati, assumenda consequatur? Omnis fugiat dolorem vel, eveniet
      sed maxime blanditiis molestias? Pariatur?
    </Section>
  )
}
