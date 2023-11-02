import { useSelectMouse } from '@/hooks/use-select-mouse'
import { cn } from '@/lib/utils'
import { HTMLAttributes, useRef } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSelector } from '../nier/nier-selector'
import { NierSquare } from '../nier/nier-square'

interface SkillItemProps extends HTMLAttributes<HTMLDivElement> {
  children: string
}

export const SkillItem = ({
  children,
  className,
  onClick,
  id,
  ...props
}: SkillItemProps) => {
  const SkillRef = useRef<HTMLDivElement>(null)

  useSelectMouse(SkillRef)

  return (
    <div
      className={cn(
        'group relative flex h-[45px] w-full transition-all duration-300 hover:h-[90px] data-[active=true]:bg-nier-700',
        className,
      )}
      ref={SkillRef}
      onClick={onClick}
      data-elementtype="skillItem"
      title={children}
      id={id}
      {...props}
    >
      <NierSelector className="-left-12 top-1/2 z-50 hidden -translate-y-1/2 md:block" />

      <h1 className="mx-3 flex items-center gap-3 group-data-[active=true]:text-nier-600 md:text-xl">
        <NierSquare className="h-[23px] w-[23px]" />
        <span className="hidden xl:inline-block">
          <LoadingText>{children}</LoadingText>
        </span>
        <span className="inline-block xl:hidden">
          <LoadingText>{`Course ${id}`}</LoadingText>
        </span>
      </h1>
    </div>
  )
}
