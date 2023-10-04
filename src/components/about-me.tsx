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
  const [dialogueState, setDialogueState] = useState(0)
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])

  useBackToMenu(backToMenu)

  const handleAboutState = () => {
    const stateLength = 2
    setAboutState((state) => (state === stateLength ? 0 : state + 1))
  }

  const handleDialogueState = () => {
    const stateLength = 2
    setDialogueState((state) => (state === stateLength ? 0 : state + 1))
  }

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header onClick={backToMenu}>ABOUT ME</Header>

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
        <ContentShell>
          <Profile {...{ setOptionState }} />
        </ContentShell>
      )}

      {aboutState === 1 && (
        <ContentShell>
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

      {/* <ContentShell>
        <NierLine />

        <AnimatePresence>
          {aboutState === 0 && <Profile {...{ setOptionState }} />}
        </AnimatePresence>
        <AnimatePresence>{aboutState === 1 && <Skills />}</AnimatePresence>
        <AnimatePresence>
          {aboutState === 2 && <Sections {...{ setOptionState }} />}
        </AnimatePresence>

        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 ">
          <span className="bg-nier-900 py-3 pl-20 pr-4 text-nier-600">
            Renan
          </span>
          <p className="mt-6 w-full bg-nier-900 px-8 py-8 text-center text-nier-600">
            Hello! I&apos;m Renan, and I&apos;m a self-taught front-end web
            developer.
          </p>
        </div>

        <h2 className="text-lg">
          Hello! I&apos;m Renan, and I&apos;m a self-taught front-end web
          developer.
        </h2>
        <p>
          I worked for several years doing manual jobs, but every minute and
          second of free time I dedicated to studying programming.
        </p>

        <p>
          My focus is to create interactive applications, with an elegant and
          appealing design.
        </p>

        <div className="mt-12 flex flex-col gap-4 text-black">
          <p className="ml-[7px]">Hi, my name is</p>
          <p className="text-7xl text-nier-800">Renan Sui</p>
          <p className="ml-1 text-3xl text-nier-700">
            I build thing for the web
          </p>
          <p className="ml-[6px] text-nier-700">
            I&apos;m a software engineer specializing in building (and
            occasionally designing) exceptional digital experiences
          </p>
        </div>
      </ContentShell> */}

      <NierSuggestions onClick={backToMenu}>
        Explore my portfolio
      </NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}

export { AboutMe }
