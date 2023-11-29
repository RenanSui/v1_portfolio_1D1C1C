import { optionStateAtom } from '@/atoms/global'
import { AnimatePresence } from 'framer-motion'
import { useAtom } from 'jotai'
import { AboutMe } from '../about-me'
import { ContactMe } from '../contact-me'
import { ExitGame } from '../exit-game'
import { Projects } from '../projects'
import { SiteSettings } from '../settings'
import { AnimatedShell } from '../shells/animated-shell'

export const MenuSections = () => {
  const [option] = useAtom(optionStateAtom)

  return (
    <AnimatedShell
      className="z-10 h-full w-full"
      animate={{ opacity: 1, transition: { delay: 0, duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <AnimatePresence>
        {option === 'about-me' && <AboutMe key={0} />}

        {option === 'projects' && <Projects key={1} />}

        {option === 'settings' && <SiteSettings key={2} />}

        {option === 'contact' && <ContactMe key={3} />}

        {option === 'exit-game' && <ExitGame key={4} />}
      </AnimatePresence>
    </AnimatedShell>
  )
}
