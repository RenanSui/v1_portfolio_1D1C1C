import { AnimatedShell } from '@/components/shells/animated-shell'
import { Icons } from '@/components/ui/icons'
import { HTMLAttributes } from 'react'

export const NierSuggestions = ({ children, onClick }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <AnimatedShell
      initial={{ opacity: 0, bottom: 72 }}
      animate={{ bottom: 96, opacity: 1, transition: { duration: 0.3 } }}
      className="z-[10000] mx-12 mt-auto hidden h-[80px] w-auto cursor-default bg-nier-light-100 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex"
    >
      <div className="flex gap-2">
        <div className="h-full w-[15px] bg-nier-light-800" />
        <div className="h-full w-[5px] bg-nier-light-800" />
      </div>
      <div className="mx-8 flex h-full w-full items-center justify-between">
        <h1 className="text-xl tracking-[0.2em]">{children}</h1>

        <div className="hidden gap-8 text-xl tracking-[0.2em] lg:flex">
          <div className="flex items-center gap-1">
            <Icons.chevronUp className="flex items-center justify-center rounded-sm bg-nier-light-800 px-1 py-[2px] text-sm text-nier-light-100" />
            <Icons.chevronDown className="flex items-center justify-center rounded-sm bg-nier-light-800 px-1 py-[2px] text-sm text-nier-light-100" />
            <p>Select</p>
          </div>

          <div className="flex items-center gap-1">
            <span className="flex items-center justify-center rounded-sm bg-nier-light-800 px-1 py-[2px] text-sm text-nier-light-100">
              Enter
            </span>
            <p>Confirm</p>
          </div>

          <div
            className="clickable group flex cursor-pointer items-center gap-1 hover:bg-nier-light-800"
            onClick={onClick}
          >
            <span className="pointer-events-none flex items-center justify-center rounded-sm bg-nier-light-800 px-1 py-[2px] text-sm text-nier-light-100">
              Esc
            </span>

            <p className="pointer-events-none group-hover:text-nier-light-100">Back</p>
          </div>
        </div>
      </div>
    </AnimatedShell>
  )
}
