import { useDate } from '@/hooks/use-date'
import { Mail, Music, Settings } from 'lucide-react'
import { Icons } from '../ui/icons'
import { AppIcon } from './app-icon'
import { PortfolioIcon } from './portfolio-icon'

export const TabletDevice = () => {
  const {
    date: { day },
    time: { hours, minutes },
    formatted: { fMonth, fWeekDay },
  } = useDate()

  return (
    <>
      <div className="absolute right-0 top-0">
        <div className="m-4 flex w-[180px] flex-wrap items-center justify-center gap-4 rounded-xl bg-nier-900 p-4">
          <PortfolioIcon />
          <AppIcon icon={Settings} />
          <AppIcon className="bg-red-500" icon={Music} />
          <AppIcon className="bg-red-500" icon={Mail} notification={7} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 m-8 flex gap-4">
        <div>
          <p className="mx-2">
            {fWeekDay}, {fMonth} {day}
          </p>
          <p className="text-6xl font-bold">
            {hours}:{minutes}
          </p>
        </div>
        <div className="flex gap-1 self-end">
          <Icons.wifi className="h-5 w-5" />
          <Icons.signal className="h-5 w-5" />
          <Icons.batteryMedium className="h-6 w-6" />
        </div>
      </div>
    </>
  )
}
