import { useSelectMouse } from '@/hooks/use-select-mouse'
import { HTMLAttributes, useRef } from 'react'
import { CardMenuHeading, CardMenuItem } from '../ui/card-menu'

export const CardMenuItemShell = ({
  'data-elementtype': elementType,
  onClick,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  'data-elementtype': string
  children: string
}) => {
  const CardItemRef = useRef<HTMLDivElement>(null)

  useSelectMouse(CardItemRef, elementType)

  return (
    <CardMenuItem onClick={onClick} ref={CardItemRef} {...props}>
      <CardMenuHeading>{children}</CardMenuHeading>
    </CardMenuItem>
  )
}
