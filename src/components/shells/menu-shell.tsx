'use client'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
  layout?: 'default' | 'full' | 'centered'
}

export const MenuShell = ({
  children,
  className,
  layout = 'default',
  ...props
}: MenuOptionsProps) => {
  return (
    <div
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
}
