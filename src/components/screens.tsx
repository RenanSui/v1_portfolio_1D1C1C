'use client'

import { screenStateAtom } from '@/atoms/global'
import { useAtom } from 'jotai'
import { BootScreen } from './boot-screen'
import { Devices } from './devices'
import { LoadingScreen } from './loading-screen'
import { MainMenu } from './main-menu'
import { AnimatedPresenceShell } from './shells/animated-presence-shell'

export const Screens = () => {
  const [screen] = useAtom(screenStateAtom)

  return (
    <AnimatedPresenceShell>
      {screen === 'boot-screen' && <BootScreen key={'boot'} />}
      {screen === 'loading-screen' && <LoadingScreen key={'loading'} />}
      {screen === 'menu-screen' && <MainMenu key={'menu'} />}
      {screen === 'devices' && <Devices key={'devices'} />}
    </AnimatedPresenceShell>
  )
}
