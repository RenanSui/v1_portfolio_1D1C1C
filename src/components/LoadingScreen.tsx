'use client'
import { Variants, motion } from 'framer-motion'
import { Dispatch, SetStateAction, useState } from 'react'
import { LoadingSpinner } from './LoadingSpinner'
import { TextGlitch } from './TextGlitch'

const LoadingState = [
  'Initializing HTML',
  'Initializing CSS',
  'Commencing JavaScript',
  'Activating Styles',
  'Activating Scripts',
  'Vitals: Complete',
  'Loading Animations',
  'Loading Geographic Data',
  'Performance: Normal',
  'Accessibility: Error',
  'Equipment Authentication: Complete',
  'Equipment Status: Green',
  'Initializing API Connection',
  'Initializing Server',
  'All Systems Green',
  'Systems Preparations Complete',
]

const LoadingTextContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 1,
      delayChildren: 1,
    },
  },
}
const LoadingTextVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

const LoadingScreen = ({
  setShowBootScreen,
}: {
  setShowBootScreen: Dispatch<SetStateAction<boolean>>
}) => {
  const [showLoadingState, setShowLoadingState] = useState(false)

  const showOnAnimationComplete = () => {
    setTimeout(() => {
      setShowLoadingState(true)
      setShowBootScreen(false)
    }, 1 * 1000)
  }

  return (
    <motion.div
      className="h-full w-full bg-nier-950 font-RodinProDB tracking-widest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      onAnimationComplete={showOnAnimationComplete}
    >
      <LoadingSpinner />
      <motion.div // z-50
        className={`absolute z-50 h-full w-full transition-all duration-500 ${
          showLoadingState ? 'backdrop-blur-[1.2px]' : 'backdrop-blur-[5px]'
        }`}
      />
      <div // z-10
        className="absolute h-full w-full bg-[url(/images/pattern.png)] bg-[length:15px_15px] bg-repeat opacity-30"
      />
      <div // z-10
        className="absolute h-full w-full bg-[radial-gradient(circle,_hsla(0,_0%,_100%,_0.05)_0%,_hsla(0,_0%,_0%,_0.5)_100%)]"
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute z-10 h-full w-full backdrop-blur-[6px]" />
        <p className="font-RodinProDB text-5xl font-bold tracking-widest text-nier-300 opacity-10 transition-all sm:text-7xl ">
          1D1C1C
        </p>
      </div>

      <div // z-30
        className="relative flex cursor-default select-none flex-wrap items-center p-8 text-nier-100 sm:p-12"
      >
        <TextGlitch
          className="relative font-RodinProM text-4xl tracking-[0.3em] transition-all sm:text-5xl"
          data-text="LOADING"
        >
          LOADING
        </TextGlitch>
        <span className="ml-2 mr-2 mt-3">-</span>
        <span className="self-end text-lg">BOOTING SYSTEM</span>
        <motion.span className="mb-[2px] self-end">
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
        </motion.span>
      </div>
      {showLoadingState && (
        <motion.ul
          // z-30
          className="relative flex cursor-default select-none flex-col gap-1 px-12 text-nier-300 sm:px-24"
          variants={LoadingTextContainer}
          initial="initial"
          animate="animate"
        >
          {LoadingState.map((state, index) => (
            <motion.li
              className="loadingList font-RodinProL text-sm text-nier-100 sm:text-lg"
              key={index}
              variants={LoadingTextVariants}
            >
              {state}{' '}
              {LoadingState.length - 1 === index && (
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
          ))}
        </motion.ul>
      )}
    </motion.div>
  )
}

export { LoadingScreen }
