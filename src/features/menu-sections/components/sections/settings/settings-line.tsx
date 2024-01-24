import { cn } from '@/lib/utils'

export const TopLine = ({ isChecked }: { isChecked: boolean }) => (
  <div
    className={cn(
      'h-[6px] border-t-2 border-transparent  group-hover:bg-nier-light-100',
      isChecked ? 'border-t-nier-light-800' : '',
    )}
  />
)

export const BottomLine = ({ isChecked }: { isChecked: boolean }) => (
  <div
    className={cn(
      'h-[6px] border-b-2 border-transparent group-hover:border-b-2  group-hover:bg-nier-light-100',
      isChecked ? 'border-b-nier-light-800' : '',
    )}
  />
)
