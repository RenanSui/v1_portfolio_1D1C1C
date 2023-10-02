import { ScreenStates } from '@/app/(lobby)/page'
import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { useShowMenuOptions } from '@/hooks/use-show-menu-options'
import { useShowPressAny } from '@/hooks/use-show-press-any'
import { AnimatePresence } from 'framer-motion'
import { Dispatch, SetStateAction, useState } from 'react'
import { AboutMe } from './about-me'
import { ContactMe } from './contact-me'
import { MenuItem } from './menu/menu-item'
import { Projects } from './projects'
import { SiteSettings } from './settings'
import { AnimatedShell } from './shells/animated-shell'
import { MenuShell } from './shells/menu-shell'
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

  const Validate = (func: Function) => {
    if (optionState !== '') return null
    if (menuState !== 'menu') return null
    func()
  }

  const { exitPressAny } = useShowPressAny(menuState, setMenuState)
  const { exitMainMenu } = useShowMenuOptions(
    menuState,
    optionState,
    setScreenState,
  )

  return (
    <AnimatePresence>
      <AnimatedShell
        className={`relative z-40 flex h-full w-full flex-col bg-[#01040F] bg-[linear-gradient(180deg,_hsla(227,_88%,_3%,_1)_30%,_hsla(222,_67%,_10%,_1)_67%,_hsla(100,_7%,_24%,_1)_100%)] font-medium tracking-[0.15em]`}
      >
        <AnimatePresence>
          {menuState === 'press-any' && isChecked && (
            <AnimatedShell exit={{ opacity: 0, transition: { duration: 2 } }}>
              <StarsBackground {...{ optionState }} />
            </AnimatedShell>
          )}
        </AnimatePresence>

        <AnimatePresence>
          <AnimatedShell>
            {!(menuState === 'press-any') && <StarsVideo />}
          </AnimatedShell>
        </AnimatePresence>

        <AnimatePresence>
          {menuState === 'press-any' && (
            <div className="h-full w-full" onClick={exitPressAny}>
              <AnimatedShell className="absolute bottom-48 left-1/2 -translate-x-1/2 sm:bottom-60">
                <MenuShell className="flex flex-col gap-3">
                  <MenuItem textHidden={'Main Menu'} showLine>
                    Press Any Button
                  </MenuItem>
                </MenuShell>
              </AnimatedShell>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {menuState === 'menu' && (
            <AnimatedShell className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-40">
              <MenuShell
                data-elementType="menu"
                className="flex flex-col gap-3"
              >
                <MenuItem
                  textHidden={'About Me'}
                  data-active="true"
                  onClick={() => Validate(() => setOptionState('about-me'))}
                >
                  About Me
                </MenuItem>
                <MenuItem
                  textHidden={'Projects'}
                  onClick={() => Validate(() => setOptionState('projects'))}
                >
                  Projects
                </MenuItem>
                <MenuItem
                  textHidden={'Settings'}
                  onClick={() => Validate(() => setOptionState('settings'))}
                >
                  Settings
                </MenuItem>
                <MenuItem
                  textHidden={'Contact'}
                  onClick={() => Validate(() => setOptionState('contact'))}
                >
                  Contact
                </MenuItem>
                <MenuItem
                  textHidden={'Exit Game'}
                  onClick={() => Validate(exitMainMenu)}
                >
                  Exit Game
                </MenuItem>
              </MenuShell>
            </AnimatedShell>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {optionState !== '' && (
            <AnimatedShell
              className="z-10 h-full w-full"
              animate={{ opacity: 1, transition: { delay: 0, duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {optionState === 'about-me' && (
                <AboutMe {...{ setOptionState }} />
              )}

              {optionState === 'projects' && (
                <Projects {...{ setOptionState }} />
              )}

              {optionState === 'settings' && (
                <SiteSettings {...{ setOptionState }} />
              )}

              {optionState === 'contact' && (
                <ContactMe {...{ setOptionState }} />
              )}
            </AnimatedShell>
          )}
        </AnimatePresence>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-50 bg-[rgba(255,0,0,0)] backdrop-blur-[1px]" />
      </AnimatedShell>
    </AnimatePresence>
  )
}

export { MainMenu }
