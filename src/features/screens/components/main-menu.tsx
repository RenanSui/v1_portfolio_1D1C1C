'use client'

import { menuStateAtom } from '@/atoms/global'
import { AnimatedShell } from '@/components/shells/animated-shell'
import { MenuList, MenuSections, PressAny } from '@/features/main-menu'
import { NierVignette } from '@/features/nier'
import { StarsOrbiting, StarsVideo } from '@/features/stars'
import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { AnimatePresence } from 'framer-motion'
import { useAtom } from 'jotai'

export const MainMenu = () => {
  const [isChecked] = useLocalStorageBoolean('starAnimation', true)
  const [menu] = useAtom(menuStateAtom)

  return (
    <AnimatedShell
      className={`relative z-40 flex h-full w-full flex-col bg-[#01040F] bg-[linear-gradient(180deg,_hsla(227,_88%,_3%,_1)_30%,_hsla(222,_67%,_10%,_1)_67%,_hsla(100,_7%,_24%,_1)_100%)] font-medium tracking-[0.15em] blur-[1px]`}
    >
      <NierVignette variant={'darker'} className="z-10" />

      <AnimatePresence>
        {menu === 'press-any' && <PressAny key={'press-any'} />}

        {menu === 'menu' && <MenuList key={'menu-list'} />}

        {menu === 'menu-sections' && <MenuSections key={'menu-sections'} />}

        {isChecked && menu === 'press-any' && <StarsOrbiting key={'star-bg'} />}

        {isChecked && menu === 'menu' && <StarsVideo key={'star-video'} />}
      </AnimatePresence>
    </AnimatedShell>
  )
}
