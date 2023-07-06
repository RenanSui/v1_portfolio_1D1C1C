import { RodinPro } from '@/lib/fonts'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
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
    <motion.div
      className={`flex h-full w-full flex-col bg-nier-800 ${RodinPro.className} font-medium tracking-[0.15em]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.6, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      // animate={{ opacity: 1, transition: { delay: 1, duration: 3 } }}
    >
      {/* <div className="h-full w-full">
        <div className="stars1 absolute h-full w-full bg-[url(/images/stars-3.jpg)] bg-cover opacity-30" />
        <div className="stars2 absolute h-full w-full bg-[url(/images/stars-3.jpg)] bg-cover opacity-30 blur-sm" />
        <div></div>
      </div> */}

      <AnimatePresence>
        {showPressAny && (
          <motion.div
            className="absolute bottom-48 left-1/2 -translate-x-1/2 sm:bottom-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <MenuOptions>
              <MenuOption onClick={HandlePressAny}>Press Any Button</MenuOption>
            </MenuOptions>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMenuOptions && (
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <MenuOptions className="flex flex-col gap-3">
              <MenuOption>Continue</MenuOption>
              <MenuOption>New Game</MenuOption>
              <MenuOption>Settings</MenuOption>
              <MenuOption>License</MenuOption>
              <MenuOption onClick={HandleExitGame}>Exit Game</MenuOption>
            </MenuOptions>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export { MainMenu }
