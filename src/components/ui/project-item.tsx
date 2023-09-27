import { ProjectsDB } from '@/db/projects'
import { useProjectSelectByMouse } from '@/hooks/use-project-select-mouse'
import { FC, HTMLAttributes, JSX, useRef } from 'react'
import { LoadingText } from './loading-text'
import {
  ProjectBox,
  ProjectButton,
  ProjectDescription,
  ProjectHeader,
  ProjectImage,
  ProjectShell,
  ProjectTitle,
} from './project'

interface ProjectItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
  project: ProjectsDB[0]
}

const ProjectItem: FC<ProjectItemProps> = ({
  children,
  className,
  project,
  ...props
}) => {
  const ProjectRef = useRef<HTMLDivElement>(null)

  const {
    // date,
    description,
    githubLink,
    liveDemoLink,
    imagePreview,
    name,
    // techs,
  } = project

  useProjectSelectByMouse(ProjectRef)

  return (
    <ProjectShell
      ref={ProjectRef}
      {...props}
      // title={description}
    >
      <ProjectBox />

      <ProjectHeader>
        <ProjectTitle href={githubLink}>
          <LoadingText>{name}</LoadingText>
        </ProjectTitle>
        <ProjectDescription>
          <LoadingText>{description}</LoadingText>
        </ProjectDescription>
        <div className="hidden gap-2 md:flex">
          <ProjectButton href={liveDemoLink}>
            <LoadingText>Live Demo</LoadingText>
          </ProjectButton>
          <ProjectButton href={githubLink}>
            <LoadingText>Github</LoadingText>
          </ProjectButton>
        </div>
      </ProjectHeader>

      <ProjectImage href={liveDemoLink} className={`${imagePreview}`} />
    </ProjectShell>
  )
}

export { ProjectItem }
