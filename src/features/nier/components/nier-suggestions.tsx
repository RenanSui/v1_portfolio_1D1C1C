import { Icons } from '@/components/ui/icons'
import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'

export const NierSuggestions = ({
  children,
  onClick,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, bottom: 72 }}
    //   animate={{ bottom: 96, opacity: 1, transition: { duration: 0.3 } }}
    //   className="absolute bottom-24 left-12 right-12 z-50 mt-auto hidden h-[80px] w-auto cursor-default bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex"
    // >
    <motion.div
      initial={{ opacity: 0, bottom: 72 }}
      animate={{ bottom: 96, opacity: 1, transition: { duration: 0.3 } }}
      className="mx-12 mt-auto hidden h-[80px] w-auto cursor-default bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex"
    >
      <div className="flex gap-2">
        <div className="h-full w-[15px] bg-nier-700" />
        <div className="h-full w-[5px] bg-nier-700" />
      </div>
      <div className="mx-8 flex h-full w-full items-center justify-between">
        <p className="text-xl tracking-[0.2em]">{children}</p>

        <div className="hidden gap-8 text-xl tracking-[0.2em] lg:flex">
          <div className="flex items-center gap-1">
            <Icons.chevronUp className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500" />
            <Icons.chevronDown className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500" />
            <p>Select</p>
          </div>

          <div className="flex items-center gap-1">
            <span className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500">
              Enter
            </span>
            <p>Confirm</p>
          </div>

          <div
            className="clickable flex cursor-pointer items-center gap-1"
            onClick={onClick}
          >
            <span className="pointer-events-none flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500">
              Esc
            </span>

            <p className="pointer-events-none">Back</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
