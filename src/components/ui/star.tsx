import { HTMLMotionProps, motion } from 'framer-motion'
import { memo } from 'react'

const StarComponent = ({ ...props }: HTMLMotionProps<'div'>) => {
  return <motion.div layout {...props} />
}

export const Star = memo(StarComponent)
