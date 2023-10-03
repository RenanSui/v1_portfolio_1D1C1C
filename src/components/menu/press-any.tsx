import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { MenuStates } from '../main-menu'
import { AnimatedShell } from '../shells/animated-shell'
import { MenuShell } from '../shells/menu-shell'
import { MenuItem } from './menu-item'

interface PressAnyProps {
  menuState: MenuStates
  setMenuState: Dispatch<SetStateAction<MenuStates>>
}

export const PressAny = ({ menuState, setMenuState }: PressAnyProps) => {
  const exitPressAny = useCallback(() => setMenuState('menu'), [setMenuState])

  useEffect(() => {
    const onKeyPressed = () => {
      if (menuState === 'press-any') exitPressAny()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [exitPressAny, menuState])

  return (
    <div className="h-full w-full" onClick={exitPressAny}>
      <AnimatedShell className="absolute bottom-48 left-1/2 -translate-x-1/2 sm:bottom-60">
        <MenuShell className="flex flex-col gap-3">
          <MenuItem textHidden={'Main Menu'} showLine>
            Press Any Button
          </MenuItem>
        </MenuShell>
      </AnimatedShell>
    </div>
  )
}
