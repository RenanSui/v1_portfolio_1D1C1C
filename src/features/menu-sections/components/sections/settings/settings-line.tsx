import { cn } from '@/lib/utils'

export const TopLine = ({ isChecked }: { isChecked: boolean }) => (
  <div
    className={cn(
      'h-[6px] border-t-2 border-transparent group-hover:border-t-nier-700 group-hover:bg-nier-500',
      isChecked
        ? 'border-t-nier-700'
        : 'group-data-[active=true]:border-t-nier-700',
    )}
  />
)

export const BottomLine = ({ isChecked }: { isChecked: boolean }) => (
  <div
    className={cn(
      'h-[6px] border-b-2 border-transparent group-hover:border-b-2 group-hover:border-b-nier-700 group-hover:bg-nier-500',
      isChecked
        ? 'border-b-nier-700'
        : 'group-data-[active=true]:border-b-nier-700',
    )}
  />
)
