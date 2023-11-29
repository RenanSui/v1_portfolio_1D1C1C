import { optionStateAtom } from '@/atoms/global'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { Profile } from './about-me/profile'
import { Sections } from './about-me/sections'
import { Skills } from './about-me/skills'
import { ContactButton } from './contact/contact-button'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { ContentShell } from './shells/content-shell'
import { Header } from './ui/header'

const AboutMe = () => {
  const [aboutState, setAboutState] = useState(0)
  const [, setOption] = useAtom(optionStateAtom)

  const backToMenu = () => setOption('')

  const handleAboutState = () => {
    const stateLength = 2
    setAboutState((state) => (state === stateLength ? 0 : state + 1))
  }

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-500  text-nier-900">
      <NierPattern variant={'block'} />

      {aboutState === 0 && (
        <div className="flex flex-1 flex-col">
          <Header onClick={backToMenu}>ABOUT ME</Header>

          <ContactButton
            className="mx-12 my-4 flex self-start"
            onClick={handleAboutState}
          >
            Go to Skills
          </ContactButton>

          <ContentShell className="mx-3 flex h-full justify-center gap-6 pb-8 md:mx-12 ">
            <Profile />
          </ContentShell>
        </div>
      )}

      {aboutState === 1 && (
        <div className="flex flex-1 flex-col">
          <Header onClick={backToMenu}>SKILLS</Header>

          <ContactButton
            className="mx-12 my-4 flex self-start"
            onClick={handleAboutState}
          >
            Go to Sections
          </ContactButton>

          <div className="mx-3 flex h-full flex-row-reverse gap-6 pb-8 md:mx-12 md:max-h-[800px]">
            <Skills />

            <NierLine />
          </div>
        </div>
      )}

      {aboutState === 2 && (
        <div className="flex flex-1 flex-col">
          <Header onClick={backToMenu}>SECTIONS</Header>

          <ContactButton
            className="mx-12 my-4 flex self-start"
            onClick={handleAboutState}
          >
            Go to About me
          </ContactButton>

          <div className="mx-3 flex h-full flex-row-reverse gap-6 pb-8 md:mx-12 md:max-h-[800px]">
            <Sections />

            <NierLine />
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
