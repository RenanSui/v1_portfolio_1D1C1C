'use client'
import { RodinPro } from '@/lib/fonts'
import { Variants, motion } from 'framer-motion'
import { Dispatch, SetStateAction, useState } from 'react'
import { GlitchText } from './glitch'
import { LoadingDots } from './loading-dots'
import { LoadingSpinner } from './loading-spinner'
import { ShellAnimated } from './ui/ShellAnimated'

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
  setShowLoading: Dispatch<SetStateAction<boolean>>
  setShowMainMenu: Dispatch<SetStateAction<boolean>>
}

const LoadingScreen = ({ setShowLoading, setShowMainMenu }: ILoadingScreen) => {
  const [showLoadingState, setShowLoadingState] = useState(false)

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setShowLoadingState(true)
    }, 1500)

    setTimeout(() => {
      setShowLoading(false)
      setShowMainMenu(true)
    }, 1000 * (LoadingState.length * 1.15))
  }

  const handleEndAnimation = () => {
    setShowLoading(false)
    setShowMainMenu(true)
  }

  return (
    <ShellAnimated
      className="absolute h-full w-full bg-nier-950 tracking-widest"
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      onAnimationComplete={handleAnimationComplete}
      onClick={handleEndAnimation}
    >
      <LoadingSpinner />
      <motion.div // z-50
        className={`absolute z-50 h-full w-full transition-all duration-500 ${
          showLoadingState ? 'backdrop-blur-[1.2px]' : 'backdrop-blur-[5px]'
        }`}
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
        <GlitchText
          className={`glitchHeading text-4xl font-medium tracking-[0.3em] sm:text-5xl lg:text-5xl ${RodinPro.className}`}
          text="LOADING"
          index={-1}
        />
        <span className="ml-2 mr-2 mt-3">-</span>
        <span
          className={`self-end text-lg font-semibold ${RodinPro.className}`}
        >
          BOOTING SYSTEM
        </span>
        <span className="mb-[2px] self-end">
          <LoadingDots />
        </span>
      </div>

      {showLoadingState && (
        <ShellAnimated
          // z-30
          className="relative flex cursor-default select-none flex-col gap-1 px-12 text-nier-300 sm:px-24 md:px-44"
          variants={LoadingTextContainer}
          initial="initial"
          animate="animate"
        >
          {LoadingState.map((text, index) => {
            return <GlitchText key={index} {...{ text, index }} />
          })}
        </ShellAnimated>
      )}
    </ShellAnimated>
  )
}

export { LoadingScreen }
