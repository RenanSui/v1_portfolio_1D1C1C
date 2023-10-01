import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export const ShellContent = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'projects mx-3 max-h-[80vh] overflow-y-scroll pb-24 md:mx-12 md:max-h-[60vh]',
        className,
      )}
    >
      {children}
    </div>
  )
}
