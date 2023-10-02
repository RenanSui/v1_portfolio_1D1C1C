import { HTMLAttributes } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSquare } from '../nier/nier-square'

interface ProjectItemProps extends HTMLAttributes<HTMLDivElement> {
  children: string
}

export const ProjectItem = ({ children }: ProjectItemProps) => {
  return (
    <div className="group flex h-[45px] w-full max-w-[770px] transition-all duration-300 hover:bg-nier-700">
      <h1 className="mx-3 flex items-center gap-3 group-hover:text-nier-600 md:text-xl">
        <NierSquare className="h-[23px] w-[23px] group-hover:bg-nier-600" />
        <LoadingText>{children}</LoadingText>
      </h1>
    </div>
  )
}
