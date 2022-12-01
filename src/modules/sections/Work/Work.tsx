import * as React from 'react'

import { IComponentProps } from 'components/component'
import { Section } from 'components/Section/Section'
import { Subsection } from 'components/Subsection/Subsection'

interface IWorkProps extends IComponentProps {}

export const Work = ({ className, id, innerRef }: IWorkProps) => {
  return (
    <Section title='Work' className={className} id={id} innerRef={innerRef}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus
        in alias labore quod a excepturi dolorum accusantium eius soluta
        reiciendis ut quisquam, vitae incidunt, fugiat sed repudiandae expedita
        itaque officiis omnis nisi corporis voluptates. Suscipit eum quia, rem
        maiores odit tempora unde harum voluptas cumque optio iusto deserunt
        repellat. Saepe necessitatibus inventore, tenetur dicta voluptas
        explicabo quos, maxime at dolor cum, sunt non. Perspiciatis mollitia
        culpa illum ut ipsum consectetur minus explicabo cupiditate repellendus
        aut repudiandae sed perferendis tenetur laborum animi at aspernatur
        deleniti molestias quasi obcaecati, assumenda consequatur? Omnis fugiat
        dolorem vel, eveniet sed maxime blanditiis molestias? Pariatur?
      </p>
      <Subsection title='Nexer Tech Talent'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          nihil consequatur, laborum minima nisi asperiores ipsum praesentium
          amet sequi sapiente impedit vero accusantium commodi temporibus libero
          magnam voluptate, rem neque!
        </p>
      </Subsection>
    </Section>
  )
}
