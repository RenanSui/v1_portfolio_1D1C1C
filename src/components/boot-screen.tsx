'use client'

import { ScreenStates } from '@/app/(lobby)/page'
import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { Concielian } from '@/lib/fonts'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { Icons } from './icons'
import { ShellAnimated } from './ui/ShellAnimated'

interface BootScreenProps {
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

const BootScreen = ({ setScreenState }: BootScreenProps) => {
  const [isChecked] = useLocalStorageBoolean('bootAnimation', true)

  const finishAnimation = useCallback(() => {
    setScreenState('loading-screen')
  }, [setScreenState])

  const stateTimeout = setTimeout(() => {
    finishAnimation()
  }, 3000)

  useEffect(() => {
    if (!isChecked) finishAnimation()

    window.addEventListener('keydown', finishAnimation, true)
    return () => {
      window.removeEventListener('keydown', finishAnimation, true)
      clearTimeout(stateTimeout)
    }
  }, [finishAnimation, isChecked, setScreenState, stateTimeout])

  return (
    <ShellAnimated
      className="absolute bottom-0 left-0 right-0 top-0 flex cursor-default select-none items-center justify-center bg-nier-100 text-9xl font-bold text-nier-900"
      style={{ filter: 'blur(1.2px)' }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
      onClick={finishAnimation}
    >
      <h1 className={`${Concielian.className}`}>R</h1>
      <Icons.stars />
    </ShellAnimated>
  )
}

export { BootScreen }
