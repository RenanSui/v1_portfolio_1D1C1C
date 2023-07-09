'use client'
import { appScreenStates } from '@/app/(lobby)/page'
import { Concielian } from '@/lib/fonts'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { Icons } from './icons'
import { ShellAnimated } from './ui/ShellAnimated'

interface BootScreenProps {
  setScreenState: Dispatch<SetStateAction<appScreenStates>>
}

const BootScreen = ({ setScreenState }: BootScreenProps) => {
  const stateTimeout = setTimeout(() => {
    setScreenState('loading-screen')
  }, 2000)

  // const handleAnimationComplete = () => {
  //   const stateTimeout = setTimeout(() => {
  //     setScreenState('loading-screen')
  //   }, 1500)
  // }

  const finishAnimation = useCallback(() => {
    setScreenState('loading-screen')
    clearTimeout(stateTimeout)
  }, [setScreenState, stateTimeout])

  useEffect(() => {
    window.addEventListener('keydown', finishAnimation, true)
    return () => window.removeEventListener('keydown', finishAnimation, true)
  }, [finishAnimation])

  return (
    <ShellAnimated
      className="absolute bottom-0 left-0 right-0 top-0 flex cursor-default select-none items-center justify-center bg-nier-100 text-9xl font-bold text-nier-900"
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
      // onAnimationComplete={handleAnimationComplete}
      onClick={finishAnimation}
    >
      <div // z-10
        className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-[rgba(255,0,0,0)] backdrop-blur-[1.2px]"
      />
      <h1 className={`${Concielian.className}`}>R</h1>
      <Icons.stars />
    </ShellAnimated>
  )
}

export { BootScreen }
