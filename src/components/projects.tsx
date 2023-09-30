import { projectsDB } from '@/db/projects'
import { useProjectSelectByKeyboard } from '@/hooks/use-project-select-keyboard'
import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react'
import { OptionStates } from './main-menu'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { ProjectOptions } from './project-options'
import { ShellContent } from './shells/shell-content'
import { Header } from './ui/header'

interface ProjectsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const Projects = ({ setOptionState }: ProjectsProps) => {
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])
  const ProjectRef = useRef<HTMLDivElement>(null)

  useProjectSelectByKeyboard(ProjectRef)

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') backToMenu()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [setOptionState, backToMenu])

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header onClick={backToMenu}>PROJECTS</Header>

      <ShellContent>
        <NierLine />

        <div className="flex flex-col gap-4">
          <ProjectOptions projectData={projectsDB} />
        </div>
      </ShellContent>

      <NierSuggestions onClick={backToMenu}>Preview a project</NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}

export { Projects }
