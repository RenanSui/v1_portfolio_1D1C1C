import { cn } from '@/lib/utils'

export const MenuLine = ({ showLine }: { showLine: boolean | undefined }) => (
  <span
    className={cn(
      'line h-[2px] bg-nier-100 transition-all duration-[30ms]',
      showLine
        ? 'w-48 opacity-100 md:w-72'
        : 'w-0 opacity-0 group-data-[active=true]:w-48 group-data-[active=true]:opacity-100 group-data-[active=true]:md:w-[350px]',
    )}
  />
)
