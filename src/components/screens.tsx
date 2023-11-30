'use client'

import { screenStateAtom } from '@/atoms/global'
import {
  BootScreen,
  Devices,
  LoadingScreen,
  MainMenu,
} from '@/features/screens'
import { useAtom } from 'jotai'

import { AnimatedPresenceShell } from './shells/animated-presence-shell'

export const Screens = () => {
  const [screen] = useAtom(screenStateAtom)

  console.log(screen)

  return (
    <AnimatedPresenceShell>
      {screen === 'boot-screen' && <BootScreen key={'boot'} />}
      {screen === 'loading-screen' && <LoadingScreen key={'loading'} />}
      {screen === 'menu-screen' && <MainMenu key={'menu'} />}
      {screen === 'devices' && <Devices key={'devices'} />}
    </AnimatedPresenceShell>
  )
}
