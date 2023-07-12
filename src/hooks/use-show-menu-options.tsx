import { ScreenStates } from '@/app/(lobby)/page'
import { MenuStates } from '@/components/main-menu'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'

const useShowMenuOptions = (
  menuState: MenuStates,
  setScreenState: Dispatch<SetStateAction<ScreenStates>>,
) => {
  const handleExitGame = useCallback(
    () => setScreenState('boot-screen'),
    [setScreenState],
  )
  // const handleExitToAny = () => setShowMenuOptions(false)

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuState === 'menu') handleExitGame()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [handleExitGame, menuState])

  return {
    handleExitGame,
  }
}

export { useShowMenuOptions }
