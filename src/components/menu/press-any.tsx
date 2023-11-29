import { menuStateAtom } from '@/atoms/global'
import { useAtom } from 'jotai'
import { AnimatedShell } from '../shells/animated-shell'
import { MenuShell } from '../shells/menu-shell'
import { MenuItem } from './menu-item'

export const PressAny = () => {
  const [, setMenu] = useAtom(menuStateAtom)

  const exitPressAny = () => setMenu('menu')

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
