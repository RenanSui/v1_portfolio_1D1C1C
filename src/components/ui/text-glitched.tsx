import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { LoadingText } from '../loading/loading-text'

interface LoadinTextProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  index?: number
}

export const TextGlitched = ({
  children,
  index,
  className,
}: LoadinTextProps) => {
  const [isChecked] = useLocalStorageBoolean('glitchAnimation', true)

  if (!isChecked)
    return (
      <h1 className={cn('inline-block select-none', className)}>
        <LoadingText index={index}>{children}</LoadingText>
      </h1>
    )

  return (
    <section
      className={cn(
        'relative select-none text-transparent [text-shadow:_0.03em_0.03em_0.05em_#91433B,_-0.03em_-0.03em_0.05em_#314E45]',
      )}
    >
      <GlitchTop className={className}>
        <LoadingText index={index}>{children}</LoadingText>
      </GlitchTop>
      <h1 className="inline-block">
        <LoadingText index={index}>{children}</LoadingText>
      </h1>
      <GlitchBottom className={className}>
        <LoadingText index={index}>{children}</LoadingText>
      </GlitchBottom>
    </section>
  )
}

const GlitchTop = ({
  children,
  className,
}: HTMLAttributes<HTMLSpanElement>) => (
  <motion.span
    className={cn('absolute left-0 top-0', className)}
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

const GlitchBottom = ({
  children,
  className,
}: HTMLAttributes<HTMLSpanElement>) => (
  <motion.span
    className={cn('absolute left-0 top-0', className)}
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
