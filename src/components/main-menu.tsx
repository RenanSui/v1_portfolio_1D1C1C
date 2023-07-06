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
    <ShellAnimated
      className={`flex h-full w-full flex-col bg-nier-800 font-medium tracking-[0.15em] ${RodinPro.className}`}
    >
      {/* <div className="h-full w-full">
        <div className="stars1 absolute h-full w-full bg-[url(/images/stars-3.jpg)] bg-cover opacity-30" />
        <div className="stars2 absolute h-full w-full bg-[url(/images/stars-3.jpg)] bg-cover opacity-30 blur-sm" />
        <div></div>
      </div> */}

      <AnimatePresence>
        {showPressAny && (
          <ShellAnimated className="absolute bottom-48 left-1/2 -translate-x-1/2 sm:bottom-60">
            <MenuOptions>
              <MenuOption onClick={HandlePressAny}>Press Any Button</MenuOption>
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
  )
}

export { MainMenu }
