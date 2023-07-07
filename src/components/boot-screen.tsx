'use client'
import { Concielian } from '@/lib/fonts'
import { Dispatch, SetStateAction } from 'react'
import { Icons } from './icons'
import { ShellAnimated } from './ui/ShellAnimated'

interface BootScreenProps {
  setShowBootScreen: Dispatch<SetStateAction<boolean>>
}

const BootScreen = ({ setShowBootScreen }: BootScreenProps) => {
  const handleAnimationComplete = () => {
    setTimeout(() => {
      setShowBootScreen(false)
    }, 1500)
  }

  const finishAnimation = () => setShowBootScreen(false)

  return (
    <ShellAnimated
      className="absolute bottom-0 left-0 right-0 top-0 flex cursor-default select-none items-center justify-center bg-nier-100 text-9xl font-bold text-nier-900"
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      onAnimationComplete={handleAnimationComplete}
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
