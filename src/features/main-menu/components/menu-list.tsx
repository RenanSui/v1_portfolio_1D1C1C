import { menuStateAtom, optionStateAtom } from '@/atoms/global'
import { AnimatedShell } from '@/components/shells/animated-shell'
import { OptionStates } from '@/types'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { MenuItem } from './ui/menu-item'

export const MenuList = () => {
  const [, setOption] = useAtom(optionStateAtom)
  const [, setMenu] = useAtom(menuStateAtom)

  const router = useRouter()
  const goToResumePage = () => router.push('/resume')

  const handleMenuSections = (option: OptionStates) => {
    setMenu('menu-sections')
    setOption(option)
  }

  return (
    <AnimatedShell className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-40">
      <div data-elementtype="menu" className="flex flex-col gap-3">
        <MenuItem
          data-active="true"
          index={0.5}
          textHidden={'About Me'}
          onClick={() => handleMenuSections('about-me')}
        >
          About Me
        </MenuItem>

        <MenuItem
          index={0.6}
          textHidden={'Projects'}
          onClick={() => handleMenuSections('projects')}
        >
          Projects
        </MenuItem>

        <MenuItem
          index={0.7}
          textHidden={'Settings'}
          onClick={() => handleMenuSections('settings')}
        >
          Settings
        </MenuItem>

        <MenuItem textHidden={'Resume'} index={0.6} onClick={goToResumePage}>
          Resume
        </MenuItem>

        <MenuItem
          index={0.8}
          textHidden={'Contact'}
          onClick={() => handleMenuSections('contact')}
        >
          Contact
        </MenuItem>

        <MenuItem
          index={0.9}
          textHidden={'Exit Game'}
          onClick={() => handleMenuSections('exit-game')}
        >
          Exit Game
        </MenuItem>
      </div>
    </AnimatedShell>
  )
}
