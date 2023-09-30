import { BigStarsStyles } from '@/db/stars'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface StarsBigProps {
  index: number
  screenSize: { width: number; height: number }
}

export const StarsBig = ({ index, screenSize }: StarsBigProps) => {
  const randomStar = Math.floor(Math.random() * BigStarsStyles.length)
  const AnimationDuration = Math.floor(Math.random() * 100)

  const { width, height } = screenSize

  return (
    <motion.div
      layout
      key={`B${index}`}
      className={cn(
        'fixed bg-nier-50 will-change-auto',
        BigStarsStyles[randomStar],
      )}
      style={{
        top: Math.floor(Math.random() * height),
        left: Math.floor(Math.random() * width),
      }}
      animate={{
        x: width,
        y: -height,
        opacity: [0, 1, 1, 1, 1, 1, 1, 0, 0],
      }}
      transition={{
        repeat: Infinity,
        delay: Math.floor(Math.random() * 15),
        repeatDelay: Math.floor(Math.random() * 5),
        duration: AnimationDuration,
      }}
    />
  )
}
