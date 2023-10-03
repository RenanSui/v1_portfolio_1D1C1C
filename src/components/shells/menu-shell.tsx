'use client'
import { useSelectKeyboard } from '@/hooks/use-select-keyboard'
import { cn } from '@/lib/utils'
import { HTMLAttributes, useRef } from 'react'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
  layout?: 'default' | 'full' | 'centered'
}

export const MenuShell = ({
  children,
  className,
  layout = 'default',
  ...props
}: MenuOptionsProps) => {
  const MenuRef = useRef<HTMLDivElement>(null)

  useSelectKeyboard(MenuRef)

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
}
