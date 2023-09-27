import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { cn } from '@/lib/utils'
import { Dispatch, HTMLAttributes, SetStateAction, useEffect } from 'react'
import { Icons } from './icons'
import { OptionStates } from './main-menu'
import { MenuSuggestions } from './menu-suggestions'
import { OptionTitle } from './option-title'
import { LinePattern } from './ui/line-pattern'
import { ProjectBox, ProjectLine } from './ui/project'

interface SettingsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

export const SiteSettings = ({ setOptionState }: SettingsProps) => {
  const backToMenu = () => setOptionState('')

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOptionState('')
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [setOptionState])

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <LinePattern variant={'top'} />

      <div className="mb-7 mt-14 flex cursor-default items-center gap-2 pl-7 md:mt-20">
        <Icons.chevronLeft
          className="h-8 w-8 cursor-pointer"
          onClick={backToMenu}
        />
        <OptionTitle onClick={backToMenu}>SETTINGS</OptionTitle>
      </div>

      <div className="mx-3 flex h-fit gap-1 md:mx-12">
        <ProjectLine />

        <section className="projects flex max-h-[80vh] w-full flex-col gap-4 overflow-y-scroll pb-24 md:max-h-[60vh] md:pl-8">
          {/* Settings Here */}
          <SettingItem keyValue="starAnimation">Star Animation</SettingItem>
          <SettingItem keyValue="loadingAnimation">
            Loading Animation
          </SettingItem>
          <SettingItem keyValue="bootAnimation">Boot Animationn</SettingItem>
        </section>
      </div>

      <MenuSuggestions backToMenu={backToMenu}>
        Adjust Website Settings
      </MenuSuggestions>

      <LinePattern variant={'bottom'} />
    </section>
  )
}

interface SettingItemProps {
  children: string
  keyValue: string
}

const SettingItem = ({ children, keyValue }: SettingItemProps) => {
  const [isChecked, setIsChecked] = useLocalStorageBoolean(keyValue, false)

  return (
    <div className="group relative w-full max-w-[400px]">
      <ProjectBox className="-left-7" />

      <div
        className={`h-[6px] border-t-2 border-transparent group-hover:border-t-nier-700 group-hover:bg-nier-500 ${
          isChecked ? 'border-t-nier-700' : ''
        }`}
      />

      <div
        className="flex h-[70px] cursor-default items-center gap-2 bg-nier-400 text-nier-900 hover:bg-nier-700 hover:text-nier-500 md:h-[50px]"
        onClick={() => setIsChecked(!isChecked)}
      >
        <h1 className="mx-3 flex items-center gap-3 md:text-xl">
          <SettingSquare
            className={`${isChecked ? 'rotate-45 bg-nier-950' : ''}`}
          />
          {isChecked ? `Disable ${children}` : `Enable ${children}`}
        </h1>
      </div>
      <div
        className={`h-[6px] border-b-2 border-transparent group-hover:border-b-2 group-hover:border-b-nier-700 group-hover:bg-nier-500 ${
          isChecked ? 'border-b-nier-700' : ''
        }`}
      />
    </div>
  )
}

const SettingSquare = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <span
    className={`${cn(
      'h-[25px] w-[25px] cursor-pointer bg-nier-700 transition-all group-hover:bg-nier-500 group-data-[active=true]:bg-nier-500',
      className,
    )}`}
  />
)
