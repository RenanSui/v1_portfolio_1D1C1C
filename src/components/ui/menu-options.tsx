'use client'
import { useMenuSelectByKeyboard } from '@/hooks/use-menu-select-keyboard'
import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode, forwardRef, useRef } from 'react'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  layout?: 'default' | 'full' | 'centered'
}

const Menu = forwardRef<HTMLDivElement, MenuOptionsProps>(
  ({ children, className, layout = 'default', ...props }, ref) => {
    const MenuRef = useRef<HTMLDivElement>(null)

    useMenuSelectByKeyboard(MenuRef)

    return (
      <div
        ref={MenuRef}
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
Menu.displayName = 'Menu'

export { Menu }
