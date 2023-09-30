import { useTypingText } from '@/hooks/useTypingText'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { FC, HTMLAttributes, forwardRef } from 'react'

interface GlitchTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  index: number
  children: string
}

const GlitchText: FC<GlitchTextProps> = forwardRef<
  HTMLParagraphElement,
  GlitchTextProps
>(({ children, className, index = 0, ...props }, ref) => {
  const { word, start } = useTypingText(children, index === -1 ? 0 : 30)

  setTimeout(() => {
    start()
  }, 1250 * (index / 1.5))

  return (
    <section
      ref={ref}
      className={cn(
        'relative text-xs text-transparent [text-shadow:_0.03em_0.03em_0.05em_#91433B,_-0.03em_-0.03em_0.05em_#314E45,_0_0_5px_#FAF8EF]',
        className,
      )}
      // sm:text-sm lg:text-lg
      {...props}
    >
      <GlitchTop>{word}</GlitchTop>
      <h1 className="inline-block">{word}</h1>
      <GlitchBottom>{word}</GlitchBottom>

      <GlitchLastWord>
        {word.length === children.length ? '' : word[0]}
      </GlitchLastWord>
    </section>
  )
})
GlitchText.displayName = 'GlitchText'

const GlitchTop = ({ children }: HTMLAttributes<HTMLSpanElement>) => (
  <motion.span
    className="absolute left-0 top-0 text-nier-100 "
    initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
    animate={{
      x: [-4, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: ((2 * Math.floor(Math.random() * 35)) / 40) * 10,
      },
    }}
  >
    {children}
  </motion.span>
)

const GlitchBottom = ({ children }: HTMLAttributes<HTMLSpanElement>) => (
  <motion.span
    className="absolute left-0 top-0 text-nier-100 "
    initial={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
    animate={{
      x: [-4, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: ((2 * Math.floor(Math.random() * 35)) / 40) * 10,
      },
    }}
  >
    {children}
  </motion.span>
)

const GlitchLastWord = ({ children }: HTMLAttributes<HTMLSpanElement>) => (
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
    {children}
  </motion.span>
)

export { GlitchText }
