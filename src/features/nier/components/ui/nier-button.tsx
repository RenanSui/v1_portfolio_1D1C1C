import { NierLoadingText, NierSelector, NierSquare } from '@/features/nier'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface NierButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string
  reverse?: boolean
}

export const NierButton = ({
  children,
  className,
  reverse,
  ...props
}: NierButtonProps) => {
  return (
    <button
      className={cn(
        'transitin-all group relative flex cursor-default items-center gap-4 bg-nier-400 p-2 pl-3 pr-6 duration-300 hover:bg-nier-700 hover:text-nier-600 hover:shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:pr-16 md:text-xl',
        className,
      )}
      {...props}
    >
      <NierSelector
        className={cn(
          'pointer-events-none hidden group-hover:opacity-100 md:block',
          reverse ? '-right-12 rotate-90' : '-left-12',
        )}
      />
      <NierSquare className="pointer-events-none h-[20px] w-[20px] cursor-default bg-nier-900 group-hover:bg-nier-600" />
      <NierLoadingText>{children}</NierLoadingText>
    </button>
  )
}
