import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes, JSX } from 'react'

const LinePatternVariants = cva('transition-all duration-300', {
  variants: {
    variant: {
      top: 'absolute left-0 top-4 w-full md:top-8',
      bottom: 'absolute bottom-4 left-0 w-full md:bottom-8',
    },
  },
  defaultVariants: {
    variant: 'top',
  },
})

interface LinePatternProps
  extends HTMLAttributes<HTMLDivElement>, // Change HTMLDivElement
    VariantProps<typeof LinePatternVariants> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const LinePattern: FC<LinePatternProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <div // Change html tag
      {...props}
      className={cn(LinePatternVariants({ variant, className }))}
    >
      {children}
      <div className="h-[2px] w-full bg-nier-700 " />
      <div className="mx-auto h-[27px] w-[90%] bg-[url(/images/pattern2.png)]" />
    </div>
  )
}

export { LinePattern, LinePatternVariants }
