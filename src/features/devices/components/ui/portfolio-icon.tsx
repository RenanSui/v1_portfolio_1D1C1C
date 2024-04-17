import { screenStateAtom } from '@/atoms/global'
import { cn } from '@/lib/utils'
import { useAtom } from 'jotai'
import { HTMLAttributes } from 'react'

export const PortfolioIcon = ({
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  const [, setScreen] = useAtom(screenStateAtom)

  return (
    <div
      className={cn(
        'flex h-16 w-16 cursor-pointer items-center justify-center rounded-xl border-2 border-nier-light-900 bg-nier-light-100 hover:scale-105',
        className,
      )}
      title="portfolio"
      onClick={() => setScreen('boot-screen')}
    >
      <div className="relative flex h-[55px] w-[55px] items-center justify-center rounded-full border-[6px] border-nier-light-900 bg-transparent after:h-10 after:w-10  after:rounded-full after:border-4 after:border-transparent ">
        <div className="absolute h-6 w-6 rounded-full border-[6px] border-nier-light-900 bg-transparent" />
      </div>
    </div>
  )
}
