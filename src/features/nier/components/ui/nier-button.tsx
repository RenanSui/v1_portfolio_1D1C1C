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
        'transitin-all group relative flex cursor-default items-center gap-4 bg-nier-light-trans-500 p-2 pl-3 pr-6 text-black duration-300 hover:bg-nier-light-800 hover:text-nier-light-100 hover:shadow-[_5px_5px_0px_0px_rgba(151,147,129,0.6)] md:pr-16 md:text-xl',
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
      <NierSquare className="pointer-events-none h-[20px] w-[20px] cursor-default bg-nier-light-800 group-hover:bg-nier-light-100" />
      <NierLoadingText>{children}</NierLoadingText>
    </button>
  )
}
