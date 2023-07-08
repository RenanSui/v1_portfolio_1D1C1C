'use client'
import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode, forwardRef } from 'react'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  layout?: 'default' | 'full' | 'centered'
}

const MenuOptions = forwardRef<HTMLDivElement, MenuOptionsProps>(
  ({ children, className, layout = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          '',
          layout === 'default' && '',
          layout === 'full' && 'h-full w-full',
          layout === 'centered' &&
            'flex h-full w-full flex-col items-center justify-center',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
MenuOptions.displayName = 'MenuOptions'

export { MenuOptions }
