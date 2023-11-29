import { ProjectItems } from '@/db/projects'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSquare } from '../nier/nier-square'
import { ProjectButton } from './project-button'

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  projectItems: ProjectItems
}

export const ProjectCard = ({ projectItems, className }: ProjectCardProps) => {
  const { description, githubLink, imagePreview, liveDemoLink, name } =
    projectItems

  return (
    <section
      className={cn(
        'relative flex max-w-[700px] flex-col bg-nier-600 pb-3 shadow-lg',
        className,
      )}
    >
      <h1 className="flex items-center gap-3 bg-nier-700 px-3 py-2 text-nier-600 group-hover:text-nier-600 md:text-xl">
        <NierSquare className="h-[23px] w-[23px] cursor-default bg-nier-600" />
        <LoadingText>{name}</LoadingText>
      </h1>
      <motion.a
        className={cn(
          'projectImage m-4 block aspect-video bg-nier-700 bg-cover',
          imagePreview,
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        href={liveDemoLink}
        target="_blank"
        rel="noreferrer"
      />
      <div className="mx-5 h-[1px] bg-nier-700 opacity-70" />
      <p className="mx-4 my-2 text-black md:text-lg lg:text-2xl">
        <LoadingText>{description}</LoadingText>
      </p>
      <div className="mx-4 h-[1px] bg-nier-700 opacity-70" />
      <div className="mx-4 mt-3 flex gap-4 text-black">
        <ProjectButton href={liveDemoLink}>Live Demo</ProjectButton>
        <ProjectButton href={githubLink}>Github</ProjectButton>
      </div>
    </section>
  )
}
