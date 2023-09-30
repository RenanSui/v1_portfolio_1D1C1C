import { HTMLMotionProps, motion } from 'framer-motion'
import { forwardRef } from 'react'

const ShellAnimated = forwardRef(
  (
    {
      children,
      className,
      initial,
      animate,
      exit,
      ...props
    }: HTMLMotionProps<'div'>,
    ref,
  ) => {
    return (
      <motion.section
        className={className}
        initial={initial || { opacity: 0 }}
        animate={
          animate || { opacity: 1, transition: { delay: 0.6, duration: 1 } }
        }
        exit={exit || { opacity: 0, transition: { duration: 0.3 } }}
        {...props}
      >
        {children}
      </motion.section>
    )
  },
)
ShellAnimated.displayName = 'ShellAnimated'

export { ShellAnimated }
