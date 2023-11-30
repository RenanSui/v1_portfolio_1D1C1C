import { optionStateAtom } from '@/atoms/global'
import { useAtom } from 'jotai'
import { useRef } from 'react'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { SettingItem } from './settings/settings-item'
import { Header } from './ui/header'

export const SiteSettings = () => {
  const [, setOptionState] = useAtom(optionStateAtom)
  const settingContainerRef = useRef<HTMLDivElement>(null)

  const backToMenu = () => setOptionState('')

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-500  text-nier-900">
      <NierPattern variant="block" />

      <div className="flex flex-1 flex-col pb-2">
        <Header onClick={backToMenu}>SETTINGS</Header>

        <div className="mx-3 flex h-full gap-6 py-8 md:mx-12">
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
            <SettingItem keyValue="glitchAnimation">
              Glitch Animation
            </SettingItem>
          </section>
        </div>
      </div>

      <NierSuggestions onClick={backToMenu}>
        Adjust website settings
      </NierSuggestions>

      <NierPattern variant="block" />
    </section>
  )
}
