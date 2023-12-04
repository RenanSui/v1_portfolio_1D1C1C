import { Icons } from '@/components/ui/icons'
import { NierLoadingText, NierSelector, NierSquare } from '@/features/nier'
import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { activateItem, cn } from '@/lib/utils'
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

  return (
    <div
      className="group relative z-50 w-full md:max-w-[450px]"
      onClick={() => setIsChecked(!isChecked)}
      onMouseOver={(e) => {
        const parentElement = e.currentTarget.parentElement || document.body
        activateItem(e.currentTarget, parentElement)
      }}
      {...props}
    >
      <NierSelector className="-left-12 top-1/2 z-50 hidden -translate-y-1/2 md:block" />

      <TopLine isChecked={isChecked} />

      <div
        className={cn(
          'flex h-[70px] cursor-default items-center gap-2 group-data-[active=true]:bg-nier-700 group-data-[active=true]:text-nier-600 group-data-[active=true]:opacity-50 md:h-[50px]',
          isChecked ? 'bg-nier-700 text-nier-600' : 'bg-transparent',
        )}
      >
        <h1 className="mx-3 flex items-center gap-3 md:text-xl">
          <NierSquare className={isChecked ? 'bg-nier-500' : ''}>
            <Icons.x
              className={
                isChecked
                  ? 'hidden'
                  : 'text-nier-50 group-data-[active=true]:text-nier-700'
              }
            />
          </NierSquare>
          {isChecked && (
            <NierLoadingText>{`Enabled: ${children}`}</NierLoadingText>
          )}
          {!isChecked && (
            <NierLoadingText>{`Disabled: ${children}`}</NierLoadingText>
          )}
        </h1>
      </div>

      <BottomLine isChecked={isChecked} />
    </div>
  )
}
