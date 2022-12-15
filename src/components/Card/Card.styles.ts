import { ComponentWrapper } from 'components/ComponentWrapper/ComponentWrapper'
import { Theme } from 'style/theme.styles'
import styled from 'styled-components'

export const _Card = styled(ComponentWrapper)`
  background-color: ${(props: Theme) => props.theme.bg.card};
  border-radius: 1rem;
  padding: 1rem;
`
