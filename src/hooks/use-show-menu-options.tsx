import { ScreenStates } from '@/app/(lobby)/page'
import { MenuStates, OptionStates } from '@/components/main-menu'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'

const useShowMenuOptions = (
  menuState: MenuStates,
  optionState: OptionStates,
  setScreenState: Dispatch<SetStateAction<ScreenStates>>,
) => {
  const exitMainMenu = useCallback(
    () => setScreenState('devices'),
    [setScreenState],
  )
  // const handleExitToAny = () => setShowMenuOptions(false)

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      // if (e.key === 'Escape' && menuState === 'menu' && optionState !== '')
      //   exitMainMenu()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [exitMainMenu, menuState, optionState])

  return {
    exitMainMenu,
  }
}

export { useShowMenuOptions }
