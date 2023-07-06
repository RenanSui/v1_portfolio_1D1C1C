import { cn } from '@/lib/utils'
import { AnimationProps, motion } from 'framer-motion'
import { HTMLAttributes, ReactNode, forwardRef } from 'react'

interface ShellAnimatedProps
  extends HTMLAttributes<HTMLDivElement>,
    AnimationProps {
  children: ReactNode
}

const ShellAnimated = forwardRef(
  ({ children, className }: ShellAnimatedProps, ref) => {
    return (
      <motion.div
        className={cn('', className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6, duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {children}
      </motion.div>
    )
  },
)
ShellAnimated.displayName = 'ShellAnimated'

export { ShellAnimated }
