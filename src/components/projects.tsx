import { projectsDB } from '@/db/projects'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { OptionStates } from './main-menu'
import { MenuSuggestions } from './menu-suggestions'
import { OptionTitle } from './option-title'
import { ProjectOptions } from './project-options'
import { LinePattern } from './ui/line-pattern'
import { ProjectLine } from './ui/project'
import { Icons } from './icons'

interface ProjectsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const Projects = ({ setOptionState }: ProjectsProps) => {
  const backToMenu = () => setOptionState('')

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOptionState('')
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [setOptionState])

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <LinePattern variant={'top'} />

      <div className="mb-7 mt-14 flex cursor-default items-center gap-2 pl-7 md:mt-20">
        <Icons.chevronLeft
          className="h-8 w-8 cursor-pointer"
          onClick={backToMenu}
        />
        <OptionTitle onClick={backToMenu}>PROJECTS</OptionTitle>
      </div>

      <div className="mx-3 flex h-fit gap-1 md:mx-12">
        <ProjectLine />

        <ProjectOptions projectData={projectsDB} />
      </div>

      <MenuSuggestions backToMenu={backToMenu}>
        Preview a project
      </MenuSuggestions>

      <LinePattern variant={'bottom'} />
    </section>
  )
}

export { Projects }
