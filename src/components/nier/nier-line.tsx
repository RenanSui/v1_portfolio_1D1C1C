import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export const NierLine = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('hidden gap-2 md:flex', className)}>
    <div className="h-full w-[15px] bg-nier-400" />
    <div className="h-full w-[5px] bg-nier-400" />
  </div>
)
