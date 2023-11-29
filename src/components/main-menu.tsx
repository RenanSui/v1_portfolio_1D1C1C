'use client'

import { menuStateAtom, optionStateAtom } from '@/atoms/global'
import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { AnimatePresence } from 'framer-motion'
import { useAtom } from 'jotai'
import { MenuList } from './menu/menu-list'
import { MenuSections } from './menu/menu-sections'
import { PressAny } from './menu/press-any'
import { AnimatedShell } from './shells/animated-shell'
import { StarsBackground } from './stars/stars-background'
import { StarsVideo } from './stars/stars-video'

export const MainMenu = () => {
  const [isChecked] = useLocalStorageBoolean('starAnimation', true)

  const [menu] = useAtom(menuStateAtom)
  const [option] = useAtom(optionStateAtom)

  return (
    <AnimatedShell
      className={`relative z-40 flex h-full w-full flex-col bg-[#01040F] bg-[linear-gradient(180deg,_hsla(227,_88%,_3%,_1)_30%,_hsla(222,_67%,_10%,_1)_67%,_hsla(100,_7%,_24%,_1)_100%)] font-medium tracking-[0.15em]`}
    >
      <AnimatePresence>
        {menu === 'press-any' && <PressAny key={'press-any'} />}

        {menu === 'menu' && option === '' && <MenuList key={'list'} />}

        {option !== '' && <MenuSections key={2} />}

        {isChecked && (
          <>
            {menu === 'press-any' && <StarsBackground key={3} />}
            {menu === 'menu' && <StarsVideo key={4} />}
          </>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-50 bg-[rgba(255,0,0,0)] backdrop-blur-[1px]" />
    </AnimatedShell>
  )
}
