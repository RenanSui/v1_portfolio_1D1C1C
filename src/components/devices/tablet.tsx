import { ScreenStates } from '@/app/(lobby)/page'
import { Months, WeekDays } from '@/db/date'
import { Mail, Music, Settings } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Icons } from '../ui/icons'
import { AppIcon } from './app-icon'
import { PortfolioIcon } from './portfolio-icon'

interface TabletDeviceProps {
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

export const TabletDevice = ({ setScreenState }: TabletDeviceProps) => {
  const [date, setDate] = useState(new Date())

  // time
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')

  // date
  const day = String(date.getDate())
  const weekDay = WeekDays[date.getDay()]
  const month = Months[date.getMonth()]

  const timeInterval = setInterval(() => {
    setDate(new Date())
  }, 1000)

  useEffect(() => {
    return () => {
      clearInterval(timeInterval)
    }
  }, [timeInterval, date])

  return (
    <>
      <div className="absolute right-0 top-0">
        <div className="m-4 flex w-[180px] flex-wrap items-center justify-center gap-4 rounded-xl bg-nier-900 p-4">
          <PortfolioIcon {...{ setScreenState }} />
          <AppIcon icon={Settings} />
          <AppIcon className="bg-red-500" icon={Music} />
          <AppIcon className="bg-red-500" icon={Mail} notification={7} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 m-8 flex gap-4">
        <div>
          <p className="mx-2">
            {weekDay}, {month} {day}
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
