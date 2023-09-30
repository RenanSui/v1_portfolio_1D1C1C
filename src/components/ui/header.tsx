import { HTMLAttributes } from 'react'
import { LoadingText } from '../loading/loading-text'
import { Icons } from './icons'

interface HeaderProps extends HTMLAttributes<SVGSVGElement> {
  children: string
}

export const Header = ({ children, onClick }: HeaderProps) => {
  return (
    <div className="mb-7 mt-14 flex cursor-default items-center gap-2 pl-7 md:mt-20">
      <Icons.chevronLeft className="h-8 w-8 cursor-pointer" onClick={onClick} />

      <h1 className="text-4xl font-semibold tracking-[0.2em] text-nier-700 [text-shadow:_6px_6px_0px_rgba(166,161,136,1)] md:text-5xl">
        <LoadingText>{children}</LoadingText>
      </h1>
    </div>
  )
}
