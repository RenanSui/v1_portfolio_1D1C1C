import { useBackToMenu } from '@/hooks/use-back-menu'
import { useSelectKeyboard } from '@/hooks/use-select-keyboard'
import { Dispatch, SetStateAction, useCallback, useRef } from 'react'
import { OptionStates } from './main-menu'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { SettingItem } from './settings/settings-item'
import { ContentShell } from './shells/content-shell'
import { Header } from './ui/header'

interface SettingsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

export const SiteSettings = ({ setOptionState }: SettingsProps) => {
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])
  const settingContainerRef = useRef<HTMLDivElement>(null)

  useSelectKeyboard(settingContainerRef)

  useBackToMenu(backToMenu)

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header onClick={backToMenu}>SETTINGS</Header>

      <ContentShell className="flex gap-6">
        <NierLine />

        <section
          className="projects flex w-full flex-col items-center gap-4 overflow-y-scroll xs:items-start"
          ref={settingContainerRef}
          data-elementtype="settings"
        >
          <SettingItem keyValue="starAnimation" data-active="true">
            Star Animation
          </SettingItem>

          <SettingItem keyValue="loadingAnimation">
            Loading Animation
          </SettingItem>

          <SettingItem keyValue="bootAnimation">Boot Animationn</SettingItem>

          <SettingItem keyValue="textAnimation">Text Animation</SettingItem>

          <SettingItem keyValue="glitchAnimation">Glitch Animation</SettingItem>
        </section>
      </ContentShell>

      <NierSuggestions onClick={backToMenu}>
        Adjust website settings
      </NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}
