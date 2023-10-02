import { projectItems } from '@/db/projects'
import { useBackToMenu } from '@/hooks/use-back-menu'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useSelectKeyboard } from '@/hooks/use-select-keyboard'
import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react'
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
  const [projectId, setProjectId] = useLocalStorage('projectId', '0')
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])
  const ProjectsRef = useRef<HTMLDivElement>(null)

  const changeProject = () => {
    const localStorageValue = localStorage.getItem('projectId')

    setProjectId(
      localStorageValue ? (JSON.parse(localStorageValue) as string) : '0',
    )
  }

  useSelectKeyboard(ProjectsRef)

  useBackToMenu(backToMenu)

  useEffect(() => {}, [projectId])

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header onClick={backToMenu}>PROJECTS</Header>

      <ContentShell className="gap-6 md:flex md:h-full">
        <NierLine />

        {/* tablet and above */}
        <div className="hidden flex-1 flex-col gap-4 bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex">
          <div className="mx-3 mt-2 h-[1px] bg-nier-700 opacity-70" />
          <section
            className="projects flex cursor-default flex-col gap-2"
            ref={ProjectsRef}
            data-elementtype="projectShell"
          >
            {projectItems.map((item) => (
              <ProjectItem
                key={item.id}
                id={String(item.id)}
                onClick={changeProject}
              >
                {item.name}
              </ProjectItem>
            ))}
          </section>
        </div>
        {/* <div className="mx-3 mb-2 mt-auto h-[1px] bg-nier-700 opacity-70" /> */}

        {/* table and above project card */}
        <ProjectCard
          className="hidden flex-1 md:flex"
          key={projectItems[Number(projectId)]!.id} // change Card
          projectItems={projectItems[Number(projectId)]!}
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
