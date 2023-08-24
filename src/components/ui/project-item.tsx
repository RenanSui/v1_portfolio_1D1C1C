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
    <div className="mb-20 flex flex-col md:mb-0" {...props} title={description}>
      <ProjectShell href="https://ren-weatherapp.vercel.app">
        <ProjectContent className="max-w-[260px] md:hidden">
          <ProjectHeader>
            <h1>{name}</h1>
          </ProjectHeader>
        </ProjectContent>
        <a
          href={liveDemoLink}
          className="cursor-default"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectImage className={`projectImage ${imagePreview}`} />
        </a>
        <ProjectFooter className="md:hidden">
          <ProjectButton className="px-4 py-2" href={liveDemoLink}>
            Live Demo
          </ProjectButton>
          <ProjectButton className="px-[14px] py-2" href={githubLink}>
            Github
          </ProjectButton>
        </ProjectFooter>

        <ProjectContent className="hidden md:flex">
          <ProjectHeader>
            <p>{name}</p>
            <p className="mx-4 hidden md:block">{date}</p>
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
