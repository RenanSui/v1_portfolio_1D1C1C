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

export const MenuList = ({ setOptionState, setScreenState }: MenuListProps) => {
  return (
    <AnimatedShell className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-40">
      <MenuShell data-elementtype="menu" className="flex flex-col gap-3">
        <MenuItem
          textHidden={'About Me'}
          data-active="true"
          onClick={() => setOptionState('about-me')}
        >
          About Me
        </MenuItem>

        <MenuItem
          textHidden={'Projects'}
          onClick={() => setOptionState('projects')}
        >
          Projects
        </MenuItem>

        <MenuItem
          textHidden={'Settings'}
          onClick={() => setOptionState('settings')}
        >
          Settings
        </MenuItem>

        <MenuItem
          textHidden={'Contact'}
          onClick={() => setOptionState('contact')}
        >
          Contact
        </MenuItem>

        <MenuItem
          textHidden={'Exit Game'}
          // onClick={() => setScreenState('devices')}
          onClick={() => setOptionState('exit-game')}
        >
          Exit Game
        </MenuItem>
      </MenuShell>
    </AnimatedShell>
  )
}
