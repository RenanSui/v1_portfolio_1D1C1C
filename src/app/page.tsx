'use client'
import { BootScreen } from '@/components/boot/boot-screen'
import { LoadingScreen } from '@/components/boot/loading-screen'
import { MainMenu } from '@/components/main-menu/main-menu'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [showLoading, setShowLoading] = useState(false)
  const [showBootScreen, setShowBootScreen] = useState(true)
  const [showMainMenu, setShowMainMenu] = useState(false)

  return (
    <>
      <main className="relative h-screen w-screen bg-black text-zinc-100">
        {showBootScreen && <BootScreen {...{ setShowLoading }} />}
        <AnimatePresence>
          {showLoading && (
            <LoadingScreen
              {...{ setShowBootScreen, setShowLoading, setShowMainMenu }}
            />
          )}
          {showMainMenu && <MainMenu></MainMenu>}
        </AnimatePresence>
      </main>
    </>
  )
}

{
  /* <div // z-10
          className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-[url(/images/pattern.png)] bg-[length:15px_15px] bg-repeat opacity-30"
        />
        <div // z-10
          className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-[radial-gradient(circle,_hsla(0,_0%,_100%,_0.05)_0%,_hsla(0,_0%,_0%,_0.5)_100%)]"
        /> */
}
