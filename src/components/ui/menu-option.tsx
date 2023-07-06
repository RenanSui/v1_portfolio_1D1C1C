import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const MenuOption: FC<MenuOptionsProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className="group flex w-full max-w-[280px] flex-col items-center"
      {...props}
    >
      <h1
        className={cn(
          'select-none text-lg text-nier-100 md:text-xl',
          className,
        )}
      >
        {children}
      </h1>
      <div className="flex items-center justify-center gap-1">
        <span className="h-[6px] w-[6px] rounded-full bg-nier-100 opacity-0 group-hover:opacity-100" />
        <div className="h-[2px] w-0 bg-nier-100 transition-all duration-[30ms] group-hover:w-48 group-hover:md:w-72" />
        <span className="h-[6px] w-[6px] rounded-full bg-nier-100 opacity-0 group-hover:opacity-100" />
      </div>
    </div>
  )
}

export { MenuOption }
