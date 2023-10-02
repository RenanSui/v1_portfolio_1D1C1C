import { ScreenStates } from '@/app/(lobby)/page'
import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { AnimatePresence } from 'framer-motion'
import { Dispatch, SetStateAction, useState } from 'react'
import { MenuList } from './menu/menu-list'
import { MenuSections } from './menu/menu-sections'
import { PressAny } from './menu/press-any'
import { AnimatedShell } from './shells/animated-shell'
import { StarsBackground } from './stars/stars-background'
import { StarsVideo } from './stars/stars-video'

export type MenuStates = '' | 'start' | 'press-any' | 'menu'

export type OptionStates = '' | 'about-me' | 'projects' | 'settings' | 'contact'

interface MainMenuProps {
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

const MainMenu = ({ setScreenState }: MainMenuProps) => {
  const [menuState, setMenuState] = useState<MenuStates>('press-any')
  const [optionState, setOptionState] = useState<OptionStates>('')

  const [isChecked] = useLocalStorageBoolean('starAnimation', true)

  return (
    <AnimatePresence>
      <AnimatedShell
        className={`relative z-40 flex h-full w-full flex-col bg-[#01040F] bg-[linear-gradient(180deg,_hsla(227,_88%,_3%,_1)_30%,_hsla(222,_67%,_10%,_1)_67%,_hsla(100,_7%,_24%,_1)_100%)] font-medium tracking-[0.15em]`}
      >
        {/* Press Any Button */}
        <AnimatePresence>
          {menuState === 'press-any' && (
            <PressAny {...{ menuState, setMenuState }} />
          )}
        </AnimatePresence>

        {/* Menu List */}
        <AnimatePresence>
          {menuState === 'menu' && optionState === '' && (
            <MenuList {...{ setOptionState, setScreenState }} />
          )}
        </AnimatePresence>

        {/* Menu Sections */}
        <AnimatePresence>
          {optionState !== '' && (
            <MenuSections {...{ optionState, setOptionState }} />
          )}
        </AnimatePresence>

        {/* Star Background */}
        <AnimatePresence>
          {menuState === 'press-any' && isChecked && (
            <StarsBackground {...{ optionState }} />
          )}
        </AnimatePresence>

        {/* Star Video */}
        <AnimatePresence>
          {menuState !== 'press-any' && <StarsVideo />}
        </AnimatePresence>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-50 bg-[rgba(255,0,0,0)] backdrop-blur-[1px]" />
      </AnimatedShell>
    </AnimatePresence>
  )
}

export { MainMenu }
