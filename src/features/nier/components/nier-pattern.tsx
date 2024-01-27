import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes, JSX } from 'react'

const NierPatternVariants = cva('transition-all duration-300 z-10', {
  variants: {
    variant: {
      block: 'py-4 md:py-6',
      top: 'absolute left-0 top-4 w-full md:top-8',
      bottom: 'absolute bottom-4 left-0 w-full md:bottom-8',
    },
  },
  defaultVariants: {
    variant: 'top',
  },
})

interface NierPatternProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof NierPatternVariants> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

export const NierPattern: FC<NierPatternProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <div // Change html tag
      {...props}
      className={cn(NierPatternVariants({ variant, className }))}
    >
      {children}
      <div className="h-[2px] w-full bg-nier-light-900 " />
      <div className="mx-auto h-[27px] w-[90%] bg-[url(/images/pattern.png)]" />
    </div>
  )
}
