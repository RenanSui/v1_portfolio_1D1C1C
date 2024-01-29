'use client'

import { motion } from 'framer-motion'

export const NierLoadingDots = () => {
  return (
    <>
      <motion.span
        animate={{
          opacity: [0, 1, 1, 1],
          transition: {
            ease: 'anticipate',
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1.5,
          },
        }}
      >
        .
      </motion.span>
      <motion.span
        animate={{
          opacity: [0, 0, 1, 1],
          transition: {
            ease: 'anticipate',
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1.5,
          },
        }}
      >
        .
      </motion.span>
      <motion.span
        animate={{
          opacity: [0, 0, 0, 1],
          transition: {
            ease: 'anticipate',
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1.5,
          },
        }}
      >
        .
      </motion.span>
    </>
  )
}
