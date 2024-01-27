import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export const NierLine = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('z-10 flex gap-2', className)}>
    <div className="h-full w-[15px] bg-nier-light-trans-500" />
    <div className="h-full w-[5px] bg-nier-light-trans-500" />
  </div>
)
