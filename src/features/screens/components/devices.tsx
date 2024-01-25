import { DesktopDevice, MobileDevice, TabletDevice } from '@/features/devices'

export const Devices = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 cursor-default bg-[url(/images/sections/devices/windows-background.jpg)] bg-cover bg-center">
      <div className="lg:hidden">
        <MobileDevice />
      </div>
      <div className="hidden lg:block xl:hidden">
        <TabletDevice />
      </div>
      <div className="hidden xl:block">
        <DesktopDevice />
      </div>
    </div>
  )
}
