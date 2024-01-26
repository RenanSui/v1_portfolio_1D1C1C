import { Icons } from '@/components/ui/icons'
import { NierLoadingText } from '@/features/nier'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: string
}

export const SectionHeading = ({
  children,
  className,
  onClick,
}: HeaderProps) => {
  return (
    <div className="flex cursor-default items-center gap-2">
      <div
        className="clickable group transition-colors duration-150 hover:bg-nier-light-800"
        onClick={onClick}
      >
        <Icons.chevronLeft className="pointer-events-none h-8 w-8 group-hover:text-nier-light-100" />
      </div>

      <h1
        className={cn(
          'text-4xl font-semibold tracking-[0.2em] text-nier-light-800 [text-shadow:_6px_6px_0px_rgba(166,161,136,1)] md:text-4xl',
          className,
        )}
      >
        <NierLoadingText>{children}</NierLoadingText>
      </h1>
    </div>
  )
}
