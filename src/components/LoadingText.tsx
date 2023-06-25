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
      className="loadingList font-RodinProL text-sm tracking-[0.15em] text-nier-100 sm:text-lg"
      variants={LoadingTextVariants}
    >
      {word}
      <motion.span
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
