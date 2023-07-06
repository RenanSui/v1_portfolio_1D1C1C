import { RodinPro } from '@/lib/fonts'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ShellAnimated } from './ui/ShellAnimated'
import { MenuOption } from './ui/menu-option'
import { MenuOptions } from './ui/menu-options'

const MainMenu = () => {
  const [showPressAny, setShowPressAny] = useState(true)
  const [showMenuOptions, setShowMenuOptions] = useState(false)

  const HandlePressAny = () => {
    setShowPressAny(false)
    setShowMenuOptions(true)
  }

  const HandleExitGame = () => {
    setShowMenuOptions(false)
    setShowPressAny(true)
  }

  return (
    <AnimatePresence>
      <ShellAnimated
        className={`flex h-full w-full flex-col font-medium tracking-[0.15em] ${RodinPro.className}`}
      >
        <div // z-50
          className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 bg-[rgba(255,0,0,0)] backdrop-blur-[0.7px]"
        />
        <AnimatePresence>
          {showPressAny && (
            <ShellAnimated className="absolute bottom-48 left-1/2 -translate-x-1/2 sm:bottom-60">
              <MenuOptions>
                <MenuOption onClick={HandlePressAny}>
                  Press Any Button
                </MenuOption>
              </MenuOptions>
            </ShellAnimated>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showMenuOptions && (
            <ShellAnimated className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-40">
              <MenuOptions className="flex flex-col gap-3">
                <MenuOption>Continue</MenuOption>
                <MenuOption>New Game</MenuOption>
                <MenuOption>Settings</MenuOption>
                <MenuOption>License</MenuOption>
                <MenuOption onClick={HandleExitGame}>Exit Game</MenuOption>
              </MenuOptions>
            </ShellAnimated>
          )}
        </AnimatePresence>
      </ShellAnimated>
    </AnimatePresence>
  )
}

export { MainMenu }
