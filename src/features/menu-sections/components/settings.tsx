import { optionStateAtom } from '@/atoms/global'
import { NierLine, NierPattern, NierSuggestions } from '@/features/nier'
import { useAtom } from 'jotai'
import { useRef } from 'react'
import { SettingItem } from './sections/settings/settings-item'
import { SectionHeading } from './ui/section-heading'

export const SiteSettings = () => {
  const [, setOptionState] = useAtom(optionStateAtom)
  const settingContainerRef = useRef<HTMLDivElement>(null)

  const backToMenu = () => setOptionState('')

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-500  text-nier-900">
      <NierPattern variant="block" />

      <div className="flex flex-1 flex-col pb-2">
        <SectionHeading onClick={backToMenu}>SETTINGS</SectionHeading>

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
