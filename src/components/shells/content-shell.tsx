import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export const ContentShell = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'projects mx-3 max-h-[70vh] overflow-y-scroll pb-24 md:mx-12 md:max-h-[55vh] xl:max-h-[65vh] 2xl:max-h-[70vh]',
        className,
      )}
    >
      {children}
    </div>
  )
}
