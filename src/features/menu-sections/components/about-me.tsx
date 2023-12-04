import { menuStateAtom, optionStateAtom } from '@/atoms/global'
import {
  NierButton,
  NierLine,
  NierPattern,
  NierSuggestions,
} from '@/features/nier'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { Profile } from './sections/about-me/profile'
import { Sections } from './sections/about-me/sections'
import { Skills } from './sections/about-me/skills'
import { SectionHeading } from './ui/section-heading'

const AboutMe = () => {
  const [aboutState, setAboutState] = useState(0)
  const [, setOption] = useAtom(optionStateAtom)
  const [, setMenu] = useAtom(menuStateAtom)

  const backToMenu = () => {
    setOption('')
    setMenu('menu')
  }

  const handleAboutState = () => {
    const stateLength = 2
    setAboutState((state) => (state === stateLength ? 0 : state + 1))
  }

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-500  text-nier-900">
      <NierPattern variant={'block'} />

      {aboutState === 0 && (
        <div className="flex flex-1 flex-col">
          <SectionHeading onClick={backToMenu}>ABOUT ME</SectionHeading>

          <NierButton
            className="mx-3 my-4 flex self-start md:mx-12"
            onClick={handleAboutState}
          >
            Go to Skills
          </NierButton>

          <div className="mx-3 flex h-full justify-center gap-6 pb-8 md:mx-12">
            <Profile />
          </div>
        </div>
      )}

      {aboutState === 1 && (
        <div className="flex flex-1 flex-col">
          <SectionHeading onClick={backToMenu}>SKILLS</SectionHeading>

          <NierButton
            className="mx-3 my-4 flex self-start md:mx-12"
            onClick={handleAboutState}
          >
            Go to Sections
          </NierButton>

          <div className="mx-3 flex h-full flex-wrap gap-6 pb-8 md:mx-12 md:max-h-[800px] md:flex-row-reverse">
            <Skills />

            <NierLine className="hidden md:flex" />
          </div>
        </div>
      )}

      {aboutState === 2 && (
        <div className="flex flex-1 flex-col">
          <SectionHeading onClick={backToMenu}>SECTIONS</SectionHeading>

          <NierButton
            className="mx-3 my-4 flex self-start md:mx-12"
            onClick={handleAboutState}
          >
            Go to About me
          </NierButton>

          <div className="mx-3 flex h-full flex-wrap gap-6 pb-8 md:mx-12 md:max-h-[800px] md:flex-row-reverse">
            <Sections />

            <NierLine className="hidden md:flex" />
          </div>
        </div>
      )}

      <NierSuggestions onClick={backToMenu}>
        Explore my portfolio
      </NierSuggestions>

      <NierPattern variant={'block'} />
    </section>
  )
}

export { AboutMe }
