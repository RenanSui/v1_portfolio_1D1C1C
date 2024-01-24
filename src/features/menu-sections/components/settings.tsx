import { menuStateAtom, optionStateAtom } from '@/atoms/global'
import {
  NierLine,
  NierPattern,
  NierSuggestions,
  NierVignette,
} from '@/features/nier'
import { useAtom } from 'jotai'
import { useRef } from 'react'
import { SettingItem } from './sections/settings/settings-item'
import { SectionHeading } from './ui/section-heading'

export const SiteSettings = () => {
  const settingContainerRef = useRef<HTMLDivElement>(null)
  const [, setOption] = useAtom(optionStateAtom)
  const [, setMenu] = useAtom(menuStateAtom)

  const backToMenu = () => {
    setOption('')
    setMenu('menu')
  }

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-light-100  text-nier-light-800">
      <NierPattern variant="block" />

      <NierVignette variant={'light'} />

      <div className="mx-3 flex flex-1 flex-col pb-2 md:mx-12">
        <SectionHeading onClick={backToMenu}>SETTINGS</SectionHeading>

        <div className="flex h-full gap-6 py-8">
          <NierLine className="hidden md:flex" />

          <section
            className="projects ml-7 flex w-full flex-col items-center gap-4 xs:items-start"
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
