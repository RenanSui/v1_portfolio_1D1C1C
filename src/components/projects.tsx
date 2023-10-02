import { projectItems } from '@/db/projects'
import { useBackToMenu } from '@/hooks/use-back-menu'
import { useProjectSelectByKeyboard } from '@/hooks/use-project-select-keyboard'
import { Dispatch, SetStateAction, useCallback, useRef } from 'react'
import { OptionStates } from './main-menu'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { ProjectCard } from './projects/project-card'
import { ProjectItem } from './projects/project-item'
import { ContentShell } from './shells/content-shell'
import { Header } from './ui/header'

interface ProjectsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const Projects = ({ setOptionState }: ProjectsProps) => {
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])
  const ProjectRef = useRef<HTMLDivElement>(null)

  useProjectSelectByKeyboard(ProjectRef)

  useBackToMenu(backToMenu)

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header onClick={backToMenu}>PROJECTS</Header>

      <ContentShell className="gap-6 md:flex md:h-full">
        <NierLine />

        {/* tablet and above */}
        <div className="hidden flex-1 flex-col gap-4 bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex">
          <section className="projects flex max-h-[70vh] cursor-default flex-col gap-2 overflow-y-scroll md:max-h-[55vh] xl:max-h-[70vh]">
            {projectItems.map((item) => (
              <ProjectItem key={item.id}>{item.name}</ProjectItem>
            ))}
          </section>
        </div>

        {/* table and above project card */}
        <ProjectCard
          className="hidden flex-1 md:flex"
          key={projectItems[0]!.id}
          projectItems={projectItems[0]!}
        />

        {/* mobile only project card */}
        <div className="flex flex-col gap-8 md:hidden">
          {projectItems.map((item) => (
            <ProjectCard key={item.id} projectItems={item} />
          ))}
        </div>
      </ContentShell>

      <NierSuggestions onClick={backToMenu}>Preview a project</NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}

export { Projects }
