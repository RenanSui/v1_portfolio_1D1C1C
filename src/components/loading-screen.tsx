'use client'
import { ScreenStates } from '@/app/(lobby)/page'
import { LoadingState } from '@/db/loading'
import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { Variants } from 'framer-motion'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { LoadingDots } from './loading/loading-dots'
import { LoadingSpinner } from './loading/loading-spinner'
import { AnimatedShell } from './shells/animated-shell'
import { TextGlitched } from './ui/text-glitched'

const LoadingTextContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
}

interface LoadingScreenProps {
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

const LoadingScreen = ({ setScreenState }: LoadingScreenProps) => {
  const [showLoadingState, setShowLoadingState] = useState(false)
  const [isChecked] = useLocalStorageBoolean('loadingAnimation', true)

  const finishAnimation = useCallback(() => {
    setScreenState('menu-screen')
  }, [setScreenState])

  // exit Loading Screen
  const stateTimeout = setTimeout(() => {
    finishAnimation()
  }, 1000 * (LoadingState.length * 1.15))

  // Show Loading States after X seconds
  const loadingState = setTimeout(() => {
    setShowLoadingState(true)
  }, 1000 * 2)

  useEffect(() => {
    if (!isChecked) finishAnimation()

    window.addEventListener('keydown', finishAnimation, true)
    return () => {
      window.removeEventListener('keydown', finishAnimation, true)
      clearTimeout(stateTimeout)
      clearTimeout(loadingState)
    }
  }, [finishAnimation, isChecked, loadingState, setScreenState, stateTimeout])

  return (
    <AnimatedShell
      className="absolute z-20 h-full w-full tracking-widest transition-all duration-500"
      style={{ filter: showLoadingState ? 'blur(1.2px)' : 'blur(5px)' }}
      onClick={finishAnimation}
    >
      <LoadingSpinner />

      <AnimatedShell className="fixed left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-4xl font-bold tracking-widest text-nier-300 blur-[5px]">
        <p className="opacity-10 md:text-7xl">1D1C1C</p>
        <p className="text-center">[ エラー ]</p>
      </AnimatedShell>

      <div className="p-8 sm:p-12 md:p-20 lg:px-24 lg:pt-24">
        <div className="relative flex cursor-default select-none flex-wrap items-center gap-1 text-nier-100">
          <span className="text-3xl font-medium tracking-[0.3em] sm:text-4xl lg:text-5xl">
            <TextGlitched className={`text-nier-100`}>LOADING</TextGlitched>
          </span>
          <span className="mr-1 mt-3">—</span>
          <span className={`self-end text-base font-semibold sm:text-lg`}>
            BOOTING SYSTEM
          </span>
          <span className="self-end sm:mb-[2px]">
            <LoadingDots />
          </span>
        </div>

        {showLoadingState && (
          <AnimatedShell
            className="relative flex cursor-default select-none flex-col gap-1 px-6 pt-9 text-nier-300 sm:px-12 sm:pt-12 lg:px-24 lg:pt-12"
            variants={LoadingTextContainer}
            initial="initial"
            animate="animate"
          >
            {LoadingState.map((text, index) => {
              return (
                // <GlitchText
                //   className="[text-shadow:_0.03em_0.03em_0.05em_#91433B,_-0.03em_-0.03em_0.05em_#314E45] sm:text-sm lg:text-lg"
                //   key={index}
                //   index={index}
                // >
                //   {text}
                // </GlitchText>
                <TextGlitched
                  className="text-nier-100"
                  key={index}
                  index={index}
                >
                  {text}
                </TextGlitched>
              )
            })}
          </AnimatedShell>
        )}
      </div>
    </AnimatedShell>
  )
}

export { LoadingScreen }
