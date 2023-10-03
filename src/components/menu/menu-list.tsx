import { ScreenStates } from '@/app/(lobby)/page'
import { Dispatch, SetStateAction } from 'react'
import { OptionStates } from '../main-menu'
import { AnimatedShell } from '../shells/animated-shell'
import { MenuShell } from '../shells/menu-shell'
import { MenuItem } from './menu-item'

interface MenuListProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

export const MenuList = ({ setOptionState }: MenuListProps) => {
  return (
    <AnimatedShell className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-40">
      <MenuShell data-elementtype="menu" className="flex flex-col gap-3">
        <MenuItem
          textHidden={'About Me'}
          data-active="true"
          index={1}
          onClick={() => setOptionState('about-me')}
        >
          About Me
        </MenuItem>

        <MenuItem
          textHidden={'Projects'}
          index={1.1}
          onClick={() => setOptionState('projects')}
        >
          Projects
        </MenuItem>

        <MenuItem
          textHidden={'Settings'}
          index={1.2}
          onClick={() => setOptionState('settings')}
        >
          Settings
        </MenuItem>

        <MenuItem
          textHidden={'Contact'}
          index={1.3}
          onClick={() => setOptionState('contact')}
        >
          Contact
        </MenuItem>

        <MenuItem
          textHidden={'Exit Game'}
          index={1.4}
          onClick={() => setOptionState('exit-game')}
        >
          Exit Game
        </MenuItem>
      </MenuShell>
    </AnimatedShell>
  )
}
