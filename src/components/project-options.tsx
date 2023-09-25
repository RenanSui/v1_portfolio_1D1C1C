import { ProjectsDB } from '@/db/projects'
import { useProjectSelectByKeyboard } from '@/hooks/use-project-select-keyboard'
import { useRef } from 'react'
import { ProjectItem } from './ui/project-item'

interface ProjectsOptionsProps {
  projectData: ProjectsDB
}

const ProjectOptions = ({ projectData }: ProjectsOptionsProps) => {
  const ProjectRef = useRef<HTMLDivElement>(null)

  useProjectSelectByKeyboard(ProjectRef)

  return (
    <div
      ref={ProjectRef}
      className="projects flex max-h-[80vh] w-full flex-col gap-16 overflow-y-scroll pb-24 md:max-h-[60vh]"
    >
      {projectData.map((project) => {
        return <ProjectItem key={project.id} project={project} />
      })}
    </div>
  )
}

export { ProjectOptions }
