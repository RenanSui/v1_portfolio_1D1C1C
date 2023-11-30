import { optionStateAtom } from '@/atoms/global'
import { AnimatedShell } from '@/components/shells/animated-shell'
import {
  AboutMe,
  ContactMe,
  ExitGame,
  Projects,
  SiteSettings,
} from '@/features/menu-sections'
import { AnimatePresence } from 'framer-motion'
import { useAtom } from 'jotai'

export const MenuSections = () => {
  const [option] = useAtom(optionStateAtom)

  return (
    <AnimatedShell
      className="z-10 h-full w-full"
      animate={{ opacity: 1, transition: { delay: 0, duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <AnimatePresence>
        {option === 'about-me' && <AboutMe key={'about-me'} />}

        {option === 'projects' && <Projects key={'projects'} />}

        {option === 'settings' && <SiteSettings key={'site-settings'} />}

        {option === 'contact' && <ContactMe key={'contact-me'} />}

        {option === 'exit-game' && <ExitGame key={'exit-game'} />}
      </AnimatePresence>
    </AnimatedShell>
  )
}
