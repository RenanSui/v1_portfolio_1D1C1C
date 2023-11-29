'use client'

import { screenStateAtom } from '@/atoms/global'
import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { Concielian } from '@/lib/fonts'
import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'
import { AnimatedShell } from './shells/animated-shell'
import { Icons } from './ui/icons'

const BootScreen = () => {
  const [isChecked] = useLocalStorageBoolean('bootAnimation', true)
  const [, setScreen] = useAtom(screenStateAtom)

  const finishAnimation = useCallback(
    () => setScreen('loading-screen'),
    [setScreen],
  )

  useEffect(() => {
    if (!isChecked) finishAnimation()

    const timeout = setTimeout(() => setScreen('loading-screen'), 3000)
    return () => clearTimeout(timeout)
  }, [finishAnimation, isChecked, setScreen])

  return (
    <AnimatedShell
      className="absolute bottom-0 left-0 right-0 top-0 flex cursor-default select-none items-center justify-center bg-nier-100 text-9xl font-bold text-nier-900 blur-[1.2px]"
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
      onClick={finishAnimation}
    >
      <h1 className={`${Concielian.className}`}>R</h1>
      <Icons.stars />
    </AnimatedShell>
  )
}

export { BootScreen }
