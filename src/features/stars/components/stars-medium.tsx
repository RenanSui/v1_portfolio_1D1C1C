import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { BigStarsNoAnimation, BigStarsStyles } from '../config'

interface StarsMediumProps {
  index: number
  size: { width: number; height: number }
}

export const StarsMedium = ({ index, size: screenSize }: StarsMediumProps) => {
  const randomStar = Math.floor(Math.random() * BigStarsStyles.length)
  const AnimationDuration = Math.floor(Math.random() * 100)

  const { height, width } = screenSize

  // Range between -160 ~ 160
  const randomStarAnimation = () => Math.trunc(Math.random() * 320 - 160)

  return (
    <motion.div
      layout
      key={`B${index}`}
      className={cn(
        'fixed bg-white shadow-[0px_0px_10px_0px_rgba(255,255,255,1)] will-change-auto',
        BigStarsNoAnimation[randomStar],
      )}
      style={{
        top: Math.floor(Math.random() * height),
        left: Math.floor(Math.random() * width),
      }}
      animate={{
        x: [0, randomStarAnimation()],
        y: [0, randomStarAnimation()],
        opacity: [0, 0, 1, 0, 1, 1, 1, 0, 0],
      }}
      transition={{
        repeat: Infinity,
        delay: Math.floor(Math.random() * 5),
        repeatDelay: Math.floor(Math.random() * 5),
        duration: AnimationDuration <= 3 ? 3 : AnimationDuration,
      }}
    />
  )
}
