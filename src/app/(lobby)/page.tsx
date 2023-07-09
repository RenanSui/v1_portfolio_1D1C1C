'use client'

import { BootScreen } from '@/components/boot-screen'
import { LoadingScreen } from '@/components/loading-screen'
import { MainMenu } from '@/components/main-menu'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export type ScreenStates = 'boot-screen' | 'loading-screen' | 'menu-screen'

export default function Home() {
  const [screenState, setScreenState] = useState<ScreenStates>('boot-screen')

  return (
    <main className="relative h-screen w-screen text-zinc-100">
      <AnimatePresence onExitComplete={() => setScreenState('loading-screen')}>
        {screenState === 'boot-screen' && (
          <BootScreen {...{ setScreenState }} />
        )}
      </AnimatePresence>

      <AnimatePresence onExitComplete={() => setScreenState('menu-screen')}>
        {screenState === 'loading-screen' && (
          <LoadingScreen {...{ setScreenState }} />
        )}
      </AnimatePresence>

      <AnimatePresence onExitComplete={() => setScreenState('boot-screen')}>
        {screenState === 'menu-screen' && <MainMenu {...{ setScreenState }} />}
      </AnimatePresence>
    </main>
  )
}
