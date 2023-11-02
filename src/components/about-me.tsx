import { useBackToMenu } from '@/hooks/use-back-menu'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { Profile } from './about-me/profile'
import { Sections } from './about-me/sections'
import { Skills } from './about-me/skills'
import { ContactButton } from './contact/contact-button'
import { OptionStates } from './main-menu'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { ContentShell } from './shells/content-shell'
import { Header } from './ui/header'

interface AboutMeProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const AboutMe = ({ setOptionState }: AboutMeProps) => {
  const [aboutState, setAboutState] = useState(0)
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])

  useBackToMenu(backToMenu)

  const handleAboutState = () => {
    const stateLength = 2
    setAboutState((state) => (state === stateLength ? 0 : state + 1))
  }

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      {aboutState === 0 && <Header onClick={backToMenu}>ABOUT ME</Header>}
      {aboutState === 1 && <Header onClick={backToMenu}>SKILLS</Header>}
      {aboutState === 2 && <Header onClick={backToMenu}>SECTIONS</Header>}

      <div className="mx-3 mb-6 flex gap-4 md:mx-12">
        {aboutState === 0 && (
          <ContactButton onClick={handleAboutState}>Go to Skills</ContactButton>
        )}

        {aboutState === 1 && (
          <ContactButton onClick={handleAboutState}>
            Go to Sections
          </ContactButton>
        )}

        {aboutState === 2 && (
          <ContactButton onClick={handleAboutState}>
            Go to About me
          </ContactButton>
        )}
      </div>

      {aboutState === 0 && (
        <ContentShell className="md:max-h-[45vh] xl:max-h-[55vh] 2xl:max-h-[60vh]">
          <Profile {...{ setOptionState }} />
        </ContentShell>
      )}

      {aboutState === 1 && (
        <ContentShell className="gap-6 md:flex md:max-h-[45vh] xl:max-h-[55vh] 2xl:max-h-[60vh]">
          <NierLine />

          <Skills />
        </ContentShell>
      )}

      {aboutState === 2 && (
        <ContentShell className="gap-6 md:flex md:h-full md:max-h-[45vh] xl:max-h-[55vh] 2xl:max-h-[60vh]">
          <NierLine />

          <Sections {...{ setOptionState }} />
        </ContentShell>
      )}

      <NierSuggestions onClick={backToMenu}>
        Explore my portfolio
      </NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}

export { AboutMe }
