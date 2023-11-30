import { Months, WeekDays } from '@/config/site'
import { useEffect, useState } from 'react'

export const useDate = () => {
  const [date, setDate] = useState(new Date())

  // time
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')

  // date
  const day = String(date.getDate())
  const week = date.getDay()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  // formatted
  const fWeekDay = WeekDays[date.getDay()]
  const fMonth = Months[date.getMonth()]

  useEffect(() => {
    const timeInterval = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(timeInterval)
    }
  }, [date])

  return {
    date: { day, week, month, year },
    time: { hours, minutes },
    formatted: { fWeekDay, fMonth },
  }
}
