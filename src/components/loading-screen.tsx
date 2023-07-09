'use client'
import { appScreenStates } from '@/app/(lobby)/page'
import { RodinPro } from '@/lib/fonts'
import { Variants } from 'framer-motion'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
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

interface LoadingScreenProps {
  setScreenState: Dispatch<SetStateAction<appScreenStates>>
}

const LoadingScreen = ({ setScreenState }: LoadingScreenProps) => {
  const [showLoadingState, setShowLoadingState] = useState(false)

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setShowLoadingState(true)
    }, 1000)

    setTimeout(() => {
      setScreenState('menu-screen')
    }, 1000 * (LoadingState.length * 1.15))
  }

  const finishAnimation = useCallback(
    () => setScreenState('menu-screen'),
    [setScreenState],
  )

  useEffect(() => {
    window.addEventListener('keydown', finishAnimation, true)
    return () => window.removeEventListener('keydown', finishAnimation, true)
  }, [finishAnimation])

  return (
    <>
      <div // z-50
        className={`pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-50 transition-all duration-500 ${
          showLoadingState ? 'backdrop-blur-[1.2px]' : 'backdrop-blur-[5px]'
        }`}
      />

      <div className="fixed bottom-0 left-0 right-0 top-0 z-10 backdrop-blur-[5px] transition-all" />
      <ShellAnimated className="fixed left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
        <p
          className={`select-none text-5xl font-bold tracking-widest text-nier-300 opacity-10 transition-all md:text-7xl ${RodinPro.className}`}
        >
          1D1C1C
        </p>
        <p className="select-none text-center text-nier-300">[ エラー ]</p>
      </ShellAnimated>

      <ShellAnimated
        className="absolute z-20 h-full w-full tracking-widest"
        onAnimationComplete={handleAnimationComplete}
        onClick={finishAnimation}
      >
        <LoadingSpinner />

        <div className="p-8 sm:p-12 md:p-20 lg:px-24 lg:pt-24">
          <div className="relative flex cursor-default select-none flex-wrap items-center text-nier-100 ">
            <GlitchText
              className={`glitchHeading text-3xl font-medium tracking-[0.3em] sm:text-4xl lg:text-5xl ${RodinPro.className}`}
              text="LOADING"
              index={-1}
            />
            <span className="ml-2 mr-2 mt-3">-</span>
            <span
              className={`self-end text-base font-semibold sm:text-lg ${RodinPro.className}`}
            >
              BOOTING SYSTEM
            </span>
            <span className="self-end sm:mb-[2px]">
              <LoadingDots />
            </span>
          </div>

          {showLoadingState && (
            <ShellAnimated
              className="relative flex cursor-default select-none flex-col gap-1 px-6 pt-3 text-nier-300 sm:px-12 sm:pt-6 lg:px-24 lg:pt-12"
              variants={LoadingTextContainer}
              initial="initial"
              animate="animate"
            >
              {LoadingState.map((text, index) => {
                return <GlitchText key={index} {...{ text, index }} />
              })}
            </ShellAnimated>
          )}
        </div>
      </ShellAnimated>
    </>
  )
}

export { LoadingScreen }
