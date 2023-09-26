import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Icons } from './icons'
import { OptionStates } from './main-menu'
import { LinePattern } from './ui/line-pattern'
import MenuSuggestions from './menu-suggestions'

interface SettingsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const SiteSettings = ({ setOptionState }: SettingsProps) => {
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
        <h1 className="text-4xl font-semibold tracking-[0.2em] text-nier-700 [text-shadow:_6px_6px_0px_rgba(166,161,136,1)] md:text-5xl">
          SETTINGS
        </h1>
      </div>

      <div className="mx-3 flex h-fit gap-1 md:mx-12">
        <div className="hidden gap-2 md:flex ">
          <div className="h-full w-[15px] bg-nier-400" />
          <div className="h-full w-[5px] bg-nier-400" />
        </div>

        <section className="projects flex max-h-[80vh] w-full flex-col gap-16 overflow-y-scroll pb-24 md:max-h-[60vh]">
          <SettingItem keyValue="starAnimation">Star Animation</SettingItem>
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
    <div className="flex cursor-pointer items-center gap-2">
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => setIsChecked(!isChecked)}
      >
        <div
          className={`relative h-4 w-4 rotate-45 ${
            isChecked ? 'bg-nier-900' : 'bg-transparent'
          }`}
        >
          <Icons.diamond className="absolute -left-1 -top-1 mb-1 -rotate-45" />
        </div>

        <h1>{isChecked ? `Disable ${children}` : `Enable ${children}`}</h1>
      </div>
    </div>
  )
}

export { SiteSettings }
