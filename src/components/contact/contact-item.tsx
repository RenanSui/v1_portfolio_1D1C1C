import { useSelectMouse } from '@/hooks/use-select-mouse'
import { cn } from '@/lib/utils'
import { HTMLAttributes, useRef } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSelector } from '../nier/nier-selector'
import { NierSquare } from '../nier/nier-square'

interface ContactItemProps extends HTMLAttributes<HTMLDivElement> {
  children: string
}

export const ContactItem = ({
  children,
  className,
  onClick,
  ...props
}: ContactItemProps) => {
  const ContactRef = useRef<HTMLDivElement>(null)

  useSelectMouse(ContactRef)

  return (
    <div
      className={cn(
        'group relative flex h-[45px] w-full transition-all duration-300 data-[active=true]:bg-nier-700',
        className,
      )}
      ref={ContactRef}
      onClick={onClick}
      data-elementtype="contactItem"
      {...props}
    >
      <NierSelector className="-left-12 top-1/2 z-50 hidden -translate-y-1/2 md:block" />

      <h1 className="mx-3 flex items-center gap-3 group-data-[active=true]:text-nier-600 md:text-xl">
        <NierSquare className="h-[23px] w-[23px]" />
        <LoadingText>{children}</LoadingText>
      </h1>
    </div>
  )
}
