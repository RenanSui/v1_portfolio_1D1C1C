import { useTypingText } from '@/hooks/useTypingText'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { FC, forwardRef } from 'react'
import { LoadingState } from './loading-screen'

interface GlitchTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string
  index: number
}

const GlitchText: FC<GlitchTextProps> = forwardRef<
  HTMLParagraphElement,
  GlitchTextProps
>(({ children, className, text, index, ...props }, ref) => {
  const { word, start } = useTypingText(text, index === -1 ? 0 : 30)

  setTimeout(() => {
    start()
  }, 1250 * (index / 1.5))

  return (
    <p
      ref={ref}
      className={cn(
        'relative text-xs text-transparent sm:text-sm lg:text-lg',
        className,
      )}
      {...props}
    >
      <motion.span
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
        animate={{
          x: [-4, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: ((2 * Math.floor(Math.random() * 35)) / 40) * 10,
          },
        }}
        className="absolute left-0 top-0 text-nier-100"
      >
        {word}
      </motion.span>
      {/* Original Children */}
      {word}
      {/* Original Children */}
      <motion.span
        initial={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
        animate={{
          x: [-4, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: ((2 * Math.floor(Math.random() * 35)) / 40) * 10,
          },
        }}
        className="absolute left-0 top-0 text-nier-100"
      >
        {word}
      </motion.span>
      <motion.span
        className="text-nier-100"
        animate={{
          opacity: [1, 0, 0, 1, 0, 0, 1, 1, 1, 0],
          transition: {
            duration: 2,
            ease: 'anticipate',
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
      >
        {word.length === text.length ? '' : word[0]}
      </motion.span>
      {LoadingState.length - 1 === index && word.length === text.length && (
        <motion.span
          className="text-nier-100"
          animate={{
            opacity: [0, 0, 1],
            transition: {
              duration: 1,
              ease: 'anticipate',
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
        >
          _
        </motion.span>
      )}
    </p>
  )
})
GlitchText.displayName = 'GlitchText'

export { GlitchText }
