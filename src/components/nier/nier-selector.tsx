import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export const NierSelector = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${cn(
        'absolute w-fit -rotate-90 opacity-0 group-data-[active=true]:opacity-100',
        className,
      )}`}
    >
      <div
        className="h-10 w-10 bg-nier-700"
        style={{
          clipPath: 'polygon(50% 0%, 70% 30%, 50% 100%, 50% 100%, 30% 30%)',
        }}
      />
      <div className="absolute left-[18px] top-3 h-1 w-1 rounded-full bg-nier-500" />
      <div className="absolute bottom-0 left-2 h-1 w-1 bg-nier-700" />
      <div className="absolute bottom-0 right-2 h-1 w-1 bg-nier-700" />
    </div>
  )
}
