import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export const NierLine = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('gap-2', className)}>
    <div className="h-full w-[15px] bg-nier-400" />
    <div className="h-full w-[5px] bg-nier-400" />
  </div>
)
