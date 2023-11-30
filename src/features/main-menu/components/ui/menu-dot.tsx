import { cn } from '@/lib/utils'

export const MenuDot = ({ showLine }: { showLine: boolean | undefined }) => (
  <span
    className={cn(
      'dot h-[6px] w-[6px] rounded-full bg-nier-100',
      showLine
        ? 'opacity-100'
        : 'opacity-0 group-data-[active=true]:opacity-100',
    )}
  />
)
