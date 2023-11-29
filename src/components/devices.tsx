import { DesktopDevice } from './devices/desktop'
import { MobileDevice } from './devices/mobile'
import { TabletDevice } from './devices/tablet'

export const Devices = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 cursor-default bg-[url(/images/windows-background.jpg)] bg-cover bg-center">
      <section className="lg:hidden">
        <MobileDevice />
      </section>
      <section className="hidden lg:block xl:hidden">
        <TabletDevice />
      </section>
      <section className="hidden xl:block">
        <DesktopDevice />
      </section>
    </div>
  )
}
