import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'

const useShowMenuOptions = (
  setShowMainMenu: Dispatch<SetStateAction<boolean>>,
) => {
  const [showMenuOptions, setShowMenuOptions] = useState(false)

  const handleExitToDesktop = useCallback(() => {
    setShowMainMenu(false)
  }, [setShowMainMenu])
  const handleExitToAny = () => setShowMenuOptions(false)

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showMenuOptions) handleExitToAny()
      // if (e.key !== 'Escape' && showMenuOptions) handleExitToAny()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [showMenuOptions])

  return {
    showMenuOptions,
    setShowMenuOptions,
    handleExitToAny,
    handleExitToDesktop,
  }
}

export { useShowMenuOptions }
