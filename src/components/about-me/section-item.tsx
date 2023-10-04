import { useSelectMouse } from '@/hooks/use-select-mouse'
import { cn } from '@/lib/utils'
import { HTMLAttributes, useRef } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSelector } from '../nier/nier-selector'
import { NierSquare } from '../nier/nier-square'

interface SectionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: string
}

export const SectionItem = ({
  children,
  className,
  onClick,
  ...props
}: SectionItemProps) => {
  const SectionRef = useRef<HTMLDivElement>(null)

  useSelectMouse(SectionRef)

  return (
    <div
      className={cn(
        'group relative flex h-[45px] w-full transition-all duration-300 data-[active=true]:bg-nier-700',
        className,
      )}
      ref={SectionRef}
      onClick={onClick}
      data-elementtype="sectionItem"
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
