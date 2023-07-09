import { appScreenStates } from '@/app/(lobby)/page'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'

const useShowMenuOptions = (
  setScreenState: Dispatch<SetStateAction<appScreenStates>>,
) => {
  const [showMenuOptions, setShowMenuOptions] = useState(false)

  const handleExitToDesktop = useCallback(() => {
    setScreenState('boot-screen')
  }, [setScreenState])

  const handleExitToAny = useCallback(
    () => setScreenState('boot-screen'),
    [setScreenState],
  )
  // const handleExitToAny = () => setShowMenuOptions(false)

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showMenuOptions) handleExitToAny()
      // if (e.key !== 'Escape' && showMenuOptions) handleExitToAny()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [handleExitToAny, showMenuOptions])

  return {
    showMenuOptions,
    setShowMenuOptions,
    handleExitToAny,
    handleExitToDesktop,
  }
}

export { useShowMenuOptions }
