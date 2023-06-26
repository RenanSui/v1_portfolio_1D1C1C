'use client'
import { Variants, motion } from 'framer-motion'
import localFont from 'next/font/local'
import { Dispatch, SetStateAction, useState } from 'react'
import { LoadingSpinner } from './LoadingSpinner'
import LoadingText from './LoadingText'
import { TextGlitch } from './TextGlitch'

export const RodinPro = localFont({
  src: [
    {
      path: '../../public/fonts/FOT-Rodin Pro L.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FOT-Rodin Pro M.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FOT-Rodin Pro DB.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FOT-Rodin Pro B.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FOT-Rodin Pro UB.otf',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const LoadingState = [
  'Initializing Client',
  'Initializing HTML',
  'Initializing CSS',
  'Commencing JavaScript',
  'Activating Styles',
  'Activating Scripts',
  'Vitals: Complete',
  'Loading Animations',
  'Loading Geographic Data',
  'Performance: Green',
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
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
}

interface ILoadingScreen {
  setShowBootScreen: Dispatch<SetStateAction<boolean>>
  setShowLoading: Dispatch<SetStateAction<boolean>>
}

const LoadingScreen = ({
  setShowBootScreen,
  setShowLoading,
}: ILoadingScreen) => {
  const [showLoadingState, setShowLoadingState] = useState(false)

  const showOnAnimationComplete = () => {
    setTimeout(() => {
      setShowLoadingState(true)
      setShowBootScreen(false)
    }, 1 * 1000)
  }

  setTimeout(() => {
    setShowLoading(false)
  }, 1000 * (LoadingState.length * 1.15))

  return (
    <motion.div
      className="h-full w-full bg-nier-950 tracking-widest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      onAnimationComplete={showOnAnimationComplete}
      onClick={() => setShowLoading(false)}
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
        <div className="absolute z-10 h-full w-full backdrop-blur-[3px]" />
        <p
          className={`select-none text-5xl font-bold tracking-widest text-nier-300 opacity-10 transition-all sm:text-7xl ${RodinPro.className}`}
        >
          1D1C1C
        </p>
        <p className="select-none text-center text-nier-300">[ エラー ]</p>
      </div>

      <div // z-30
        className="relative flex cursor-default select-none flex-wrap items-center p-8 text-nier-100 sm:p-12 md:px-32 md:pt-32"
      >
        <TextGlitch
          className={`relative text-4xl font-medium tracking-[0.3em] transition-all sm:text-5xl ${RodinPro.className}`}
          data-text="LOADING"
        >
          LOADING
        </TextGlitch>
        <span className="ml-2 mr-2 mt-3">-</span>
        <span
          className={`self-end text-lg font-semibold ${RodinPro.className}`}
        >
          BOOTING SYSTEM
        </span>
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
          className="relative flex cursor-default select-none flex-col gap-1 px-12 text-nier-300 sm:px-24 md:px-44"
          variants={LoadingTextContainer}
          initial="initial"
          animate="animate"
        >
          {LoadingState.map((text, index) => {
            return <LoadingText key={index} {...{ text, index }} />
          })}
        </motion.ul>
      )}
    </motion.div>
  )
}

export { LoadingScreen }
