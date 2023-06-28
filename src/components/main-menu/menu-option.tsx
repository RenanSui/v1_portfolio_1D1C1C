import { VariantProps, cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { FC, HTMLAttributes, JSX } from 'react'

const MenuOptionVariants = cva('transition-all duration-300', {
  variants: {
    variant: { default: '', primary: '' },
    size: { default: '', sm: '' },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface MenuOptionsProps
  extends HTMLAttributes<HTMLDivElement>, // Change HTMLDivElement
    VariantProps<typeof MenuOptionVariants> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const MenuOption: FC<MenuOptionsProps> = ({
  children,
  className,
  size,
  variant,
  ...props
}) => {
  return (
    <motion.div className="h-full w-full" exit={{ opacity: 0 }}>
      <div className="group absolute bottom-60 left-1/2 flex w-fit -translate-x-1/2 flex-col items-center">
        <h1 className="select-none text-lg text-nier-100 md:text-2xl">
          {children}
        </h1>
        <div className="flex items-center justify-center gap-1">
          <span className="h-[6px] w-[6px] rounded-full bg-nier-100 opacity-0 group-hover:opacity-100" />
          <div className="h-[2px] w-0 bg-nier-100 transition-all duration-[30ms] group-hover:w-48 group-hover:md:w-72" />
          <span className="h-[6px] w-[6px] rounded-full bg-nier-100 opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </motion.div>
  )
}

export { MenuOption, MenuOptionVariants }
