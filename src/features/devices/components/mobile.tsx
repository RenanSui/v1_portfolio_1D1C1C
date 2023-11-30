import { Icons } from '@/components/ui/icons'
import { Camera, Mail, Music, Phone, Settings } from 'lucide-react'
import { useDate } from '../hooks/use-date'
import { AppIcon } from './ui/app-icon'
import { PortfolioIcon } from './ui/portfolio-icon'

export const MobileDevice = () => {
  const {
    date: { day },
    time: { hours, minutes },
    formatted: { fMonth, fWeekDay },
  } = useDate()

  return (
    <>
      <div className="flex justify-between px-4 py-1">
        <p>
          {hours}:{minutes}
        </p>

        <div className="flex gap-1">
          <Icons.wifi className="h-5 w-5" />
          <Icons.signal className="h-5 w-5" />
          <Icons.batteryMedium className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-2">
        <p className="text-6xl font-bold">
          {hours}:{minutes}
        </p>
        <p>
          {fWeekDay}, {day} {fMonth}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-8">
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="flex w-4/5 cursor-text items-center justify-between rounded-full bg-[#291E3C] px-4 py-2 md:py-4">
            <p>Search</p>
            <Icons.search className="cursor-default" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <AppIcon icon={Settings} />

          <PortfolioIcon />
        </div>

        <div className="flex justify-center gap-6">
          <div className="h-3 w-3 cursor-pointer rounded-full bg-white" />
          <div className="h-3 w-3 cursor-pointer rounded-full bg-violet-500" />
          <div className="h-3 w-3 cursor-pointer rounded-full bg-violet-500" />
          <div className="h-3 w-3 cursor-pointer rounded-full bg-violet-500" />
        </div>

        <div className="mb-6 flex justify-center gap-4">
          <AppIcon icon={Phone} notification={1} />
          <AppIcon className="bg-red-500" icon={Music} />
          <AppIcon className="bg-cyan-500" icon={Camera} />
          <AppIcon className="bg-red-500" icon={Mail} notification={7} />
        </div>
      </div>
    </>
  )
}
