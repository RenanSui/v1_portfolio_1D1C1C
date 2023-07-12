import { MenuStates } from '@/components/main-menu'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'

const useShowPressAny = (
  menuState: MenuStates,
  setMenuState: Dispatch<SetStateAction<MenuStates>>,
) => {
  const HandlePressAny = useCallback(() => setMenuState('menu'), [setMenuState])

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (menuState === 'press-any') HandlePressAny()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [HandlePressAny, menuState])
  return { HandlePressAny }
}

export { useShowPressAny }
