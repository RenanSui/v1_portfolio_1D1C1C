import { NierLoadingText, NierSelector } from '@/features/nier'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

type CardMenuProps = React.HTMLAttributes<HTMLDivElement>

const CardMenu = ({ children, className }: CardMenuProps) => {
  // const CardShadow = 'shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)]'
  const CardShadow = 'shadow-lg'

  return (
    <div
      className={cn(
        'relative z-[10000] bg-nier-light-100',
        CardShadow,
        className,
      )}
    >
      <div className="mx-3 mb-2 mt-2 h-[1px] bg-nier-light-800 opacity-70" />
      {children}
    </div>
  )
}

const CardMenuItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h2
      className={cn(
        'clickable group relative flex h-[60px] w-full transition-all duration-300',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 h-full w-0 bg-nier-light-800 transition-all duration-500 ease-in-out group-data-[active=true]:w-full" />
      <NierSelector
        className={cn(
          'pointer-events-none -left-11 hidden group-hover:opacity-100 md:block',
        )}
      />
      {children}
    </h2>
  )
})
CardMenuItem.displayName = 'CardMenuItem'

type CardMenuHeadingProps = {
  children: string
} & React.HTMLAttributes<HTMLDivElement>

const CardMenuHeading = ({ children, className }: CardMenuHeadingProps) => {
  return (
    <h1
      className={cn(
        'pointer-events-none z-10 mx-3 flex cursor-default items-center gap-3 transition-colors duration-500 group-data-[active=true]:text-nier-light-100 md:text-xl',
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
        'h-[25px] w-[25px] bg-nier-light-800 transition-all group-data-[active=true]:bg-nier-light-100',
        className,
      )}
    ></span>
  )
}

export { CardMenu, CardMenuHeading, CardMenuItem, CardMenuSquare }
