'use client'
import { LoadingState } from '@/config/site'
import { useSkipScreen } from '@/hooks/use-skip-screen'
import { cn } from '@/lib/utils'
import { Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
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

const LoadingScreen = () => {
  const [showLoadingState, setShowLoadingState] = useState(false)

  useEffect(() => {
    const loadingState = setTimeout(() => setShowLoadingState(true), 1000 * 2)
    return () => clearTimeout(loadingState)
  }, [])

  const { finishAnimation } = useSkipScreen(
    'loadingAnimation',
    'menu-screen',
    1000 * (LoadingState.length * 1.2),
  )

  return (
    <AnimatedShell
      className={cn(
        'absolute z-20 h-full w-full tracking-widest transition-all duration-500',
        showLoadingState ? 'blur-[1.2px]' : 'blur-[5px]',
      )}
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
            {LoadingState.map((text, index) => (
              <TextGlitched className="text-nier-100" key={index} index={index}>
                {text}
              </TextGlitched>
            ))}
          </AnimatedShell>
        )}
      </div>
    </AnimatedShell>
  )
}

export { LoadingScreen }
