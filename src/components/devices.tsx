import { ScreenStates } from '@/app/(lobby)/page'
import { Dispatch, SetStateAction } from 'react'
import { DesktopDevice } from './devices/desktop'
import { MobileDevice } from './devices/mobile'
import { TabletDevice } from './devices/tablet'

interface DeviceProps {
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

export const Devices = ({ setScreenState }: DeviceProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 cursor-default bg-[url(/images/windows-background.jpg)] bg-cover bg-center">
      <section className="lg:hidden">
        <MobileDevice {...{ setScreenState }} />
      </section>
      <section className="hidden lg:block xl:hidden">
        <TabletDevice {...{ setScreenState }} />
      </section>
      <section className="hidden xl:block">
        <DesktopDevice {...{ setScreenState }} />
      </section>
    </div>
  )
}
