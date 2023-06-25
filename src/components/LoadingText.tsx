import { useTypingText } from '@/hooks/useTypingText'
import { Variants, motion } from 'framer-motion'
import { LoadingState } from './LoadingScreen'

const LoadingTextVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

const LoadingText = ({ text, index }: { text: string; index: number }) => {
  const { word, start } = useTypingText(text, 40)

  setTimeout(() => {
    start()
  }, 1250 * (index / 1.5))

  return (
    <motion.li
      className="loadingList relative font-RodinProL text-sm tracking-[0.15em] text-transparent sm:text-lg"
      variants={LoadingTextVariants}
      data-text={word}
    >
      <motion.span
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
        animate={{
          x: [-2, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay:
              ((2 * Math.floor(Math.random() * 14)) / text.length) * 8,
          },
        }}
        className="absolute left-0 top-0 text-nier-100"
      >
        {word}
      </motion.span>

      {word}

      <motion.span
        initial={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
        animate={{
          x: [-2, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay:
              ((2 * Math.floor(Math.random() * 8)) / text.length) * 8,
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
    </motion.li>
  )
}

export default LoadingText
