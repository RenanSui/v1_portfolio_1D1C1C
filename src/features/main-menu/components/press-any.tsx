import { menuStateAtom } from '@/atoms/global'
import { AnimatedShell } from '@/components/shells/animated-shell'
import { useAtom } from 'jotai'
import { MenuItem } from './ui/menu-item'

export const PressAny = () => {
  const [, setMenu] = useAtom(menuStateAtom)

  const exitPressAny = () => setMenu('menu')

  return (
    <div className="h-full w-full" onClick={exitPressAny}>
      <AnimatedShell className="absolute bottom-48 left-1/2 -translate-x-1/2 sm:bottom-60">
        <div className="flex flex-col gap-3">
          <MenuItem textHidden={'Main Menu'} showLine>
            Press Any Button
          </MenuItem>
        </div>
      </AnimatedShell>
    </div>
  )
}
