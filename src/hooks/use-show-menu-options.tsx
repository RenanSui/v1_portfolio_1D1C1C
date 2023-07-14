import { ScreenStates } from '@/app/(lobby)/page'
import { MenuStates, OptionStates } from '@/components/main-menu'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'

const useShowMenuOptions = (
  menuState: MenuStates,
  optionState: OptionStates,
  setScreenState: Dispatch<SetStateAction<ScreenStates>>,
) => {
  const handleExitGame = useCallback(
    () => setScreenState('boot-screen'),
    [setScreenState],
  )
  // const handleExitToAny = () => setShowMenuOptions(false)

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuState === 'menu' && optionState !== '')
        handleExitGame()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [handleExitGame, menuState, optionState])

  return {
    handleExitGame,
  }
}

export { useShowMenuOptions }
