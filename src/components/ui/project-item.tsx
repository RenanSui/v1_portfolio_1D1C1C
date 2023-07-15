import { FC, HTMLAttributes, JSX } from 'react'
import { ProjectDB } from '../projects'
import {
  ProjectButton,
  ProjectContent,
  ProjectDescription,
  ProjectFooter,
  ProjectHeader,
  ProjectImage,
  ProjectShell,
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
    date,
    description,
    githubLink,
    liveDemoLink,
    imagePreview,
    name,
    techs,
  } = project

  return (
    <div className="flex flex-col" {...props} title={description}>
      <ProjectShell href="https://ren-weatherapp.vercel.app">
        <a
          href={liveDemoLink}
          className="cursor-default"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectImage className={`projectImage ${imagePreview}`} />
        </a>
        <ProjectContent>
          <ProjectHeader>
            <p>{name}</p>
            <p className="mx-4 hidden sm:block">{date}</p>
          </ProjectHeader>

          <ProjectDescription>
            <p>{techs.map((tech) => tech).join(' ')}</p>
          </ProjectDescription>

          <ProjectFooter>
            <ProjectButton href={liveDemoLink}>Live Demo</ProjectButton>
            <ProjectButton href={githubLink}>Github</ProjectButton>
          </ProjectFooter>
        </ProjectContent>
      </ProjectShell>
    </div>
  )
}

export { ProjectItem }
