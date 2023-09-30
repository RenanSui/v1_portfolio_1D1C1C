import { useBackToMenu } from '@/hooks/use-back-menu'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { OptionStates } from './main-menu'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { ShellContent } from './shells/shell-content'
import { Header } from './ui/header'

interface AboutMeProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const AboutMe = ({ setOptionState }: AboutMeProps) => {
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])

  useBackToMenu(backToMenu)

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header onClick={backToMenu}>ABOUT ME</Header>

      <ShellContent>
        <NierLine />
      </ShellContent>

      <NierSuggestions onClick={backToMenu}>Preview a project</NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}

export { AboutMe }
