import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { useSelectMouse } from '@/hooks/use-select-mouse'
import { cn } from '@/lib/utils'
import { useRef } from 'react'
import { NierSelector } from '../nier/nier-selector'
import { NierSquare } from '../nier/nier-square'
import { Icons } from '../ui/icons'
import { BottomLine, TopLine } from './settings-line'

interface SettingItemProps {
  children: string
  keyValue: string
}

export const SettingItem = ({
  children,
  keyValue,
  ...props
}: SettingItemProps) => {
  const [isChecked, setIsChecked] = useLocalStorageBoolean(keyValue, false)
  const SettingsRef = useRef<HTMLDivElement>(null)

  useSelectMouse(SettingsRef)

  return (
    <div
      ref={SettingsRef}
      className="group relative z-50 w-full md:max-w-[400px]"
      onClick={() => setIsChecked(!isChecked)}
      {...props}
    >
      <NierSelector className="-left-12 top-1/2 z-50 hidden -translate-y-1/2 md:block" />

      <TopLine isChecked={isChecked} />

      <div
        className={cn(
          'flex h-[70px] cursor-default items-center gap-2 bg-nier-400 text-nier-900 hover:bg-nier-700 hover:text-nier-500 group-data-[active=true]:bg-nier-700 group-data-[active=true]:text-nier-500 md:h-[50px]',
          isChecked ? 'bg-nier-700 text-nier-500' : '',
        )}
      >
        <h1 className="mx-3 flex items-center gap-3 md:text-xl">
          <NierSquare className={isChecked ? 'bg-nier-500' : ''}>
            <Icons.x className={isChecked ? 'hidden' : 'text-nier-50'} />
          </NierSquare>
          {!isChecked ? `Disabled: ${children}` : `Enabled: ${children}`}
        </h1>
      </div>

      <BottomLine isChecked={isChecked} />
    </div>
  )
}
