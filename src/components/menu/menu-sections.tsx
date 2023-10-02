import { ScreenStates } from '@/app/(lobby)/page'
import { Dispatch, SetStateAction } from 'react'
import { AboutMe } from '../about-me'
import { ContactMe } from '../contact-me'
import { ExitGame } from '../exit-game'
import { OptionStates } from '../main-menu'
import { Projects } from '../projects'
import { SiteSettings } from '../settings'
import { AnimatedShell } from '../shells/animated-shell'

interface MenuSectionsProps {
  optionState: OptionStates
  setOptionState: Dispatch<SetStateAction<OptionStates>>
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

export const MenuSections = ({
  optionState,
  setOptionState,
  setScreenState,
}: MenuSectionsProps) => {
  return (
    <AnimatedShell
      className="z-10 h-full w-full"
      animate={{ opacity: 1, transition: { delay: 0, duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      {optionState === 'about-me' && <AboutMe {...{ setOptionState }} />}

      {optionState === 'projects' && <Projects {...{ setOptionState }} />}

      {optionState === 'settings' && <SiteSettings {...{ setOptionState }} />}

      {optionState === 'contact' && <ContactMe {...{ setOptionState }} />}

      {optionState === 'exit-game' && (
        <ExitGame {...{ setOptionState, setScreenState }} />
      )}
    </AnimatedShell>
  )
}
