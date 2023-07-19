import { MenuStates } from '@/components/main-menu'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'

const useShowPressAny = (
  menuState: MenuStates,
  setMenuState: Dispatch<SetStateAction<MenuStates>>,
) => {
  const exitPressAny = useCallback(() => setMenuState('menu'), [setMenuState])

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (menuState === 'press-any') exitPressAny()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [exitPressAny, menuState])
  return { exitPressAny }
}

export { useShowPressAny }
