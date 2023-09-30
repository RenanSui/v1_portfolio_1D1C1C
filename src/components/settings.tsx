import { useSelectKeyboard } from '@/hooks/use-select-keyboard'
import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react'
import { OptionStates } from './main-menu'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { SettingItem } from './settings/settings-item'
import { ShellContent } from './shells/shell-content'
import { Header } from './ui/header'

interface SettingsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

export const SiteSettings = ({ setOptionState }: SettingsProps) => {
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])
  const settingContainerRef = useRef<HTMLDivElement>(null)

  useSelectKeyboard(settingContainerRef)

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') backToMenu()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [setOptionState, backToMenu])

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header onClick={backToMenu}>SETTINGS</Header>

      <ShellContent>
        <NierLine />

        <section
          className="flex flex-col gap-4"
          ref={settingContainerRef}
          data-elementType="settings"
        >
          <SettingItem keyValue="starAnimation" data-active="true">
            Star Animation
          </SettingItem>
          <SettingItem keyValue="loadingAnimation">
            Loading Animation
          </SettingItem>
          <SettingItem keyValue="bootAnimation">Boot Animationn</SettingItem>
        </section>
      </ShellContent>

      <NierSuggestions onClick={backToMenu}>
        Adjust Website Settings
      </NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}
