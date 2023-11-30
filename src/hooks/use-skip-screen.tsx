import { screenStateAtom } from '@/atoms/global'
import { ScreenStates } from '@/types'
import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'
import { useLocalStorageBoolean } from './use-local-storage-state'

export const useSkipScreen = (
  storageKey: string,
  nextScreen: ScreenStates,
  delay = 3000,
) => {
  const [isChecked] = useLocalStorageBoolean(storageKey, true)
  const [, setScreen] = useAtom(screenStateAtom)

  const finishAnimation = useCallback(
    () => setScreen(nextScreen),
    [nextScreen, setScreen],
  )

  useEffect(() => {
    if (!isChecked) finishAnimation()

    const timeout = setTimeout(() => setScreen(nextScreen), delay)
    return () => clearTimeout(timeout)
  }, [delay, finishAnimation, isChecked, nextScreen, setScreen])

  return { finishAnimation }
}
