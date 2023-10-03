import { HTMLAttributes } from 'react'
import { NierSelector } from '../nier/nier-selector'
import { NierSquare } from '../nier/nier-square'

export const ContactButton = ({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="transitin-all group relative flex cursor-default items-center gap-4 bg-nier-400 p-2 pl-3 pr-16 text-sm text-black duration-300 hover:bg-nier-700 hover:text-nier-600 hover:shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:text-xl"
      {...props}
    >
      <NierSelector className="-left-12 hidden group-hover:opacity-100 md:block" />
      <NierSquare className="h-[20px] w-[20px] cursor-default bg-nier-900 group-hover:bg-nier-600" />
      {children}
    </button>
  )
}
