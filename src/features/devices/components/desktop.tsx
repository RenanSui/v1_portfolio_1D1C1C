import { Icons } from '@/components/ui/icons'
import { useDate } from '../hooks/use-date'
import { PortfolioIcon } from './ui/portfolio-icon'

export const DesktopDevice = () => {
  const {
    date: { day, month, year },
    time: { hours, minutes },
  } = useDate()

  return (
    <>
      <h1 className="sr-only">Desktop Devices</h1>

      <div className="m-4 flex flex-col gap-4">
        <div className="group relative flex w-fit flex-col gap-1">
          <PortfolioIcon className="hover:scale-100" />
          <p className="drop-shadow-2xl">Portfolio</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-[#291E3C] backdrop-blur-lg">
        <div className="flex items-center">
          <div className="px-5 py-3 hover:bg-[#57425F]">
            <Icons.scan className="h-5 w-5" />
          </div>
          <div className="flex cursor-default bg-white px-3 py-3">
            <Icons.search className="h-5 w-5 text-black" />
            <div className="cursor-text bg-white px-32" />
          </div>
        </div>

        <div className="flex items-center">
          <Icons.chevronUp className="mx-4 h-5 w-5 hover:bg-zinc-700 hover:opacity-50" />
          <div className="mx-2 flex flex-col items-center font-sans text-sm">
            <p>
              {hours}:{minutes}
            </p>
            <p>
              {day}/{month}/{year}
            </p>
          </div>
          <div className="px-5 py-3 hover:bg-[#57425F]">
            <Icons.newSpaper className="h-5 w-5" />
          </div>
        </div>
      </div>
    </>
  )
}
// #282747
// #291E3C
// #3C2F4D
