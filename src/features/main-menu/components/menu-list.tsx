import { optionStateAtom } from '@/atoms/global'
import { AnimatedShell } from '@/components/shells/animated-shell'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { MenuItem } from './ui/menu-item'

export const MenuList = () => {
  const [, setOptionState] = useAtom(optionStateAtom)

  const router = useRouter()
  const goToResumePage = () => router.push('/resume')

  return (
    <AnimatedShell className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-40">
      <div data-elementtype="menu" className="flex flex-col gap-3">
        <MenuItem
          textHidden={'About Me'}
          data-active="true"
          index={0.5}
          onClick={() => setOptionState('about-me')}
        >
          About Me
        </MenuItem>

        <MenuItem
          textHidden={'Projects'}
          index={0.6}
          onClick={() => setOptionState('projects')}
        >
          Projects
        </MenuItem>

        <MenuItem
          textHidden={'Settings'}
          index={0.7}
          onClick={() => setOptionState('settings')}
        >
          Settings
        </MenuItem>

        <MenuItem textHidden={'Resume'} index={0.6} onClick={goToResumePage}>
          Resume
        </MenuItem>

        <MenuItem
          textHidden={'Contact'}
          index={0.8}
          onClick={() => setOptionState('contact')}
        >
          Contact
        </MenuItem>

        <MenuItem
          textHidden={'Exit Game'}
          index={0.9}
          onClick={() => setOptionState('exit-game')}
        >
          Exit Game
        </MenuItem>
      </div>
    </AnimatedShell>
  )
}
