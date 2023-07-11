import { ScreenStates } from '@/app/(lobby)/page'
// import { useMenuOptionsKeyboard } from '@/hooks/use-menu-options-keyboard'
import { useShowMenuOptions } from '@/hooks/use-show-menu-options'
import { useShowPressAny } from '@/hooks/use-show-press-any'
import { AnimatePresence } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import { StarsBackground } from './stars-background'
import { ShellAnimated } from './ui/ShellAnimated'
import { MenuOption } from './ui/menu-option'
import { MenuOptions } from './ui/menu-options'

interface MainMenuProps {
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

const MainMenu = ({ setScreenState }: MainMenuProps) => {
  // const MenuRef = useRef<HTMLDivElement>(null)
  // const PressAnyRef = useRef<HTMLDivElement>(null)

  const { HandlePressAny, setShowPressAny, showPressAny } = useShowPressAny()
  const { showMenuOptions, setShowMenuOptions, handleExitToAny } =
    useShowMenuOptions(setScreenState)

  // useMenuOptionsKeyboard(MenuRef)

  return (
    <ShellAnimated
      className={`flex h-full w-full flex-col bg-[#01040F] bg-[linear-gradient(180deg,_hsla(227,_88%,_3%,_1)_30%,_hsla(222,_67%,_10%,_1)_67%,_hsla(100,_7%,_24%,_1)_100%)] font-medium tracking-[0.15em]`}
    >
      <StarsBackground />

      <AnimatePresence onExitComplete={() => setShowMenuOptions(true)}>
        {showPressAny && (
          <div className="h-full w-full" onClick={HandlePressAny}>
            <ShellAnimated className="absolute bottom-48 left-1/2 -translate-x-1/2 sm:bottom-60">
              {/* <MenuOptions className="flex flex-col gap-3" ref={PressAnyRef}> */}
              <MenuOptions className="flex flex-col gap-3">
                <MenuOption textHidden={'Main Menu'} showLine>
                  Press Any Button
                </MenuOption>
              </MenuOptions>
            </ShellAnimated>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence onExitComplete={() => setShowPressAny(true)}>
        {showMenuOptions && (
          <ShellAnimated className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-40">
            {/* <MenuOptions className="flex flex-col gap-3" ref={MenuRef}> */}
            <MenuOptions className="flex flex-col gap-3">
              <MenuOption textHidden={'About Me'} data-active="true">
                Continue
              </MenuOption>
              <MenuOption textHidden={'Projects'}>New Game</MenuOption>
              <MenuOption textHidden={'Nothing'}>Settings</MenuOption>
              <MenuOption textHidden={'Nothing'}>License</MenuOption>
              <MenuOption textHidden={'Exit Game'} onClick={handleExitToAny}>
                Exit Game
              </MenuOption>
            </MenuOptions>
          </ShellAnimated>
        )}
      </AnimatePresence>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 bg-[rgba(255,0,0,0)] backdrop-blur-[0.7px]" />
    </ShellAnimated>
  )
}

export { MainMenu }
