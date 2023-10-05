import { ScreenStates } from '@/app/(lobby)/page'
import { cn } from '@/lib/utils'
import { Dispatch, HTMLAttributes, SetStateAction } from 'react'

interface PortfolioIconProps extends HTMLAttributes<HTMLDivElement> {
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

export const PortfolioIcon = ({
  setScreenState,
  className,
}: PortfolioIconProps) => {
  return (
    <div
      className={cn(
        'flex h-16 w-16 cursor-pointer items-center justify-center rounded-xl border-2 border-nier-900 bg-nier-300 hover:scale-105',
        className,
      )}
      onClick={() => setScreenState('boot-screen')}
    >
      <div className="relative flex h-[55px] w-[55px] items-center justify-center rounded-full border-[6px] border-nier-900 bg-transparent after:h-10 after:w-10  after:rounded-full after:border-4 after:border-transparent ">
        <div className="absolute h-6 w-6 rounded-full border-[6px] border-nier-900 bg-transparent" />
      </div>
    </div>
  )
}
