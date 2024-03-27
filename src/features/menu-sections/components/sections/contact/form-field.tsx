import { NierSelector } from '@/features/nier'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export const FormField = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('group relative', className)}>
      <NierSelector className="-left-12 top-1/2 z-50 hidden -translate-y-1/2 group-focus-within:opacity-100 md:block" />
      {children}
    </div>
  )
}
