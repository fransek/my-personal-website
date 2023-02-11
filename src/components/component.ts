export interface IComponentProps {
  className?: string
  id?: string
  innerRef?: React.RefObject<HTMLDivElement>
  onClick?: () => void
}
