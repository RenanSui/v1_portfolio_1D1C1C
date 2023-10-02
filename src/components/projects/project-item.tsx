import { useSelectMouse } from '@/hooks/use-select-mouse'
import { HTMLAttributes, useRef } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSelector } from '../nier/nier-selector'
import { NierSquare } from '../nier/nier-square'

interface ProjectItemProps extends HTMLAttributes<HTMLDivElement> {
  children: string
}

export const ProjectItem = ({ children }: ProjectItemProps) => {
  const ProjectRef = useRef<HTMLDivElement>(null)

  useSelectMouse(ProjectRef)

  return (
    <div
      className="group relative flex h-[45px] w-full max-w-[770px] transition-all duration-300 data-[active=true]:bg-nier-700"
      ref={ProjectRef}
    >
      <NierSelector className="-left-12 top-1/2 z-50 hidden -translate-y-1/2 md:block" />

      <h1 className="mx-3 flex items-center gap-3 group-data-[active=true]:text-nier-600 md:text-xl">
        <NierSquare className="h-[23px] w-[23px]" />
        <LoadingText>{children}</LoadingText>
      </h1>
    </div>
  )
}
