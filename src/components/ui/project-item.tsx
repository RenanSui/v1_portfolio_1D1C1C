import { FC, HTMLAttributes, JSX } from 'react'
import { ProjectDB } from '../projects'
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
  project: ProjectDB
}

const ProjectItem: FC<ProjectItemProps> = ({
  children,
  className,
  project,
  ...props
}) => {
  const {
    // date,
    description,
    githubLink,
    liveDemoLink,
    imagePreview,
    name,
    // techs,
  } = project

  return (
    <ProjectShell
      {...props}
      // title={description}
    >
      <ProjectBox />

      <ProjectHeader>
        <ProjectTitle href={githubLink}>{name}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <div className="hidden gap-2 md:flex">
          <ProjectButton href={liveDemoLink}>Live Demo</ProjectButton>
          <ProjectButton href={githubLink}>Github</ProjectButton>
        </div>
      </ProjectHeader>

      <ProjectImage href={liveDemoLink} className={imagePreview} />
    </ProjectShell>
  )
}

export { ProjectItem }
