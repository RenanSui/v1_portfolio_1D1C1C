import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { HTMLAttributes } from 'react'
import { RandomIcon } from './randomIcons'

interface AppIconProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  notification?: number
}

export const AppIcon = ({
  className,
  icon,
  notification = 0,
}: AppIconProps) => {
  return (
    <div
      className={cn(
        'relative cursor-pointer rounded-xl bg-violet-500 p-2 hover:scale-105',
        className,
      )}
    >
      {!!notification && (
        <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white text-center text-black">
          {notification}
        </div>
      )}
      <RandomIcon as={icon} className="h-12 w-12 stroke-1" />
    </div>
  )
}
