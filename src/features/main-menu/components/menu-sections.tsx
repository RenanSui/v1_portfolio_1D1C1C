import { optionStateAtom } from '@/atoms/global'
import { AnimatedShell } from '@/components/shells/animated-shell'
import {
  AboutMe,
  ContactMe,
  ExitGame,
  Projects,
  SiteSettings,
} from '@/features/menu-sections'
import { cn } from '@/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { useAtom } from 'jotai'

export const MenuSections = () => {
  const [option, setOption] = useAtom(optionStateAtom)

  return (
    <AnimatedShell
      className={cn(
        'overflow-auto',
        option === '' ? 'sr-only -z-50 h-0 w-0' : 'z-10 h-full w-full',
      )}
      animate={{ opacity: 1, transition: { delay: 0, duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      onAnimationComplete={() => setOption(option === '' ? '' : option)}
    >
      <AnimatePresence>
        {option === 'about-me' && <AboutMe key={'about-me'} />}

        {option === 'projects' && <Projects key={'projects'} />}

        {option === 'settings' && <SiteSettings key={'site-settings'} />}

        {option === 'contact' && <ContactMe key={'contact-me'} />}

        {option === 'exit-game' && <ExitGame key={'exit-game'} />}

        {option !== '' && option !== 'exit-game' && (
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url(/assets/wallpapers/light-theme-1440.png)] bg-cover" />
        )}
      </AnimatePresence>
    </AnimatedShell>
  )
}
