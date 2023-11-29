import { optionStateAtom } from '@/atoms/global'
import { useBackToMenu } from '@/hooks/use-back-menu'
import { useAtom } from 'jotai'
import { useCallback, useState } from 'react'
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

  const backToMenu = useCallback(() => setOption(''), [setOption])

  useBackToMenu(backToMenu)

  const handleAboutState = () => {
    const stateLength = 2
    setAboutState((state) => (state === stateLength ? 0 : state + 1))
  }

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      {aboutState === 0 && (
        <>
          <Header onClick={backToMenu}>ABOUT ME</Header>
          <div className="mx-3 mb-6 flex gap-4 md:mx-12">
            <ContactButton onClick={handleAboutState}>
              Go to Skills
            </ContactButton>
          </div>
          <ContentShell className="md:max-h-[45vh] xl:max-h-[55vh] 2xl:max-h-[60vh]">
            <Profile />
          </ContentShell>
        </>
      )}

      {aboutState === 1 && (
        <>
          <Header onClick={backToMenu}>SKILLS</Header>
          <div className="mx-3 mb-6 flex gap-4 md:mx-12">
            <ContactButton onClick={handleAboutState}>
              Go to Sections
            </ContactButton>
          </div>
          <ContentShell className="gap-6 md:flex md:max-h-[45vh] xl:max-h-[55vh] 2xl:max-h-[60vh]">
            <NierLine />

            <Skills />
          </ContentShell>
        </>
      )}

      {aboutState === 2 && (
        <>
          <Header onClick={backToMenu}>SECTIONS</Header>
          <div className="mx-3 mb-6 flex gap-4 md:mx-12">
            <ContactButton onClick={handleAboutState}>
              Go to About me
            </ContactButton>
          </div>
          <ContentShell className="gap-6 md:flex md:h-full md:max-h-[45vh] xl:max-h-[55vh] 2xl:max-h-[60vh]">
            <NierLine />

            <Sections />
          </ContentShell>
        </>
      )}

      <NierSuggestions onClick={backToMenu}>
        Explore my portfolio
      </NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}

export { AboutMe }
