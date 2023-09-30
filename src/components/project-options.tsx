import { ProjectsDB } from '@/db/projects'
import { useProjectSelectByKeyboard } from '@/hooks/use-project-select-keyboard'
import { useRef } from 'react'
import { ProjectItem } from './ui/project-item'

interface ProjectsOptionsProps {
  projectData: ProjectsDB
}

const ProjectOptions = ({ projectData }: ProjectsOptionsProps) => {
  // const ProjectRef = useRef<HTMLDivElement>(null)

  // useProjectSelectByKeyboard(ProjectRef)

  return (
    <>
      {projectData.map((project) => {
        return <ProjectItem key={project.id} project={project} />
      })}
    </>
  )
}

export { ProjectOptions }
