import { menuStateAtom, optionStateAtom } from '@/atoms/global'
import {
  NierButton,
  NierLine,
  NierPattern,
  NierSuggestions,
  NierVignette,
} from '@/features/nier'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { Profile } from './sections/about-me/profile'
import { Sections } from './sections/about-me/sections'
import { Skills } from './sections/about-me/skills'
import { SectionHeading } from './ui/section-heading'

type Menus = 'profile' | 'skills' | 'sections'

const menus: Menus[] = ['profile', 'skills', 'sections']

const AboutMe = () => {
  const [, setOption] = useAtom(optionStateAtom)
  const [, setMenu] = useAtom(menuStateAtom)
  const [sectionView, setSectionView] = useState<Menus>('profile')

  const changeSectionView = (section: Menus) => {
    if (menus.includes(section)) setSectionView(section)
  }

  const backToMenu = () => {
    setOption('')
    setMenu('menu')
  }

  return (
    <section className="relative flex min-h-screen w-full flex-col bg-nier-light-100  text-nier-light-800">
      <div className="mx-3 my-4 hidden h-full max-h-[40px] gap-6 md:mx-12 lg:flex">
        <NierLine className="absolute h-[40px]" />
        <div className="flex h-[40px] w-full max-w-full gap-[56px] overflow-hidden pl-16">
          {menus.map((item) => (
            <NierButton
              key={item}
              className="tracking-widest"
              active={item === sectionView}
              onMouseOver={() => changeSectionView(item)}
            >
              {item.toLocaleUpperCase()}
            </NierButton>
          ))}
        </div>
      </div>

      <NierVignette variant={'light'} />

      <NierPattern variant={'block'} className="lg:py-0" />

      {sectionView === 'profile' && (
        <div className="mx-3 flex flex-1 flex-col md:mx-12 ">
          <SectionHeading onClick={backToMenu}>PROFILE</SectionHeading>

          <NierButton
            className="my-4 flex self-start lg:hidden"
            onClick={() => changeSectionView('skills')}
          >
            Go to Skills
          </NierButton>

          <div className="flex h-full justify-center gap-6 pb-8 lg:my-4">
            <Profile />
          </div>
        </div>
      )}

      {sectionView === 'skills' && (
        <div className="mx-3 flex flex-1 flex-col md:mx-12">
          <SectionHeading onClick={backToMenu}>SKILLS</SectionHeading>

          <NierButton
            className="my-4 flex self-start lg:hidden"
            onClick={() => changeSectionView('sections')}
          >
            Go to Sections
          </NierButton>

          <div className="flex h-full flex-wrap gap-6 pb-8 md:max-h-[800px] md:flex-row-reverse lg:my-4">
            <Skills />

            <NierLine className="hidden md:flex" />
          </div>
        </div>
      )}

      {sectionView === 'sections' && (
        <div className="mx-3 flex flex-1 flex-col md:mx-12">
          <SectionHeading onClick={backToMenu}>SECTIONS</SectionHeading>

          <NierButton
            className="my-4 flex self-start lg:hidden"
            onClick={() => changeSectionView('profile')}
          >
            Go to Profile
          </NierButton>

          <div className="flex h-full flex-wrap gap-6 pb-8 md:max-h-[800px] md:flex-row-reverse lg:my-4">
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
