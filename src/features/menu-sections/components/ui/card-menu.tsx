import { NierLoadingText, NierSelector } from '@/features/nier'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

type CardMenuProps = React.HTMLAttributes<HTMLDivElement>

const CardMenu = ({ children, className }: CardMenuProps) => {
  const CardShadow = 'shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)]'

  return (
    <div className={cn('bg-nier-600', CardShadow, className)}>
      <div className="mx-3 mb-2 mt-2 h-[1px] bg-nier-700 opacity-70" />
      {children}
    </div>
  )
}

const CardMenuItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        'group relative flex h-[60px] w-full transition-all duration-300  data-[active=true]:bg-nier-700',
        className,
      )}
      ref={ref}
      {...props}
    >
      <NierSelector
        className={cn('-left-11 hidden group-hover:opacity-100 md:block')}
      />
      {children}
    </div>
  )
})
CardMenuItem.displayName = 'CardMenuItem'

type CardMenuSelectorProps = React.HTMLAttributes<HTMLDivElement>

const CardMenuSelector = ({ className }: CardMenuSelectorProps) => {
  return (
    <div
      className={`${cn(
        'absolute w-fit -rotate-90 opacity-0 transition-all duration-75 group-data-[active=true]:opacity-100',
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

type CardMenuHeadingProps = {
  children: string
} & React.HTMLAttributes<HTMLDivElement>

const CardMenuHeading = ({ children, className }: CardMenuHeadingProps) => {
  return (
    <h1
      className={cn(
        'mx-3 flex cursor-default items-center gap-3 group-data-[active=true]:text-nier-600 md:text-xl',
        className,
      )}
    >
      <CardMenuSquare />
      <NierLoadingText>{children}</NierLoadingText>
    </h1>
  )
}

type CardMenuSquareProps = React.HTMLAttributes<HTMLDivElement>

const CardMenuSquare = ({ className }: CardMenuSquareProps) => {
  return (
    <span
      className={cn(
        'h-[25px] w-[25px] bg-nier-700 transition-all group-data-[active=true]:bg-nier-500',
        className,
      )}
    ></span>
  )
}

export {
  CardMenu,
  CardMenuHeading,
  CardMenuItem,
  CardMenuSelector,
  CardMenuSquare,
}
