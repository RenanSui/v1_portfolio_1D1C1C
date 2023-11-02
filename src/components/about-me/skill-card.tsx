import { SkillItems } from '@/db/skills'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSquare } from '../nier/nier-square'
import { ProjectButton } from '../projects/project-button'

interface SkillCardProps extends HTMLAttributes<HTMLDivElement> {
  skillItem: SkillItems
}

export const SkillCard = ({ skillItem, className }: SkillCardProps) => {
  const { bgImage, name, organization } = skillItem

  const pdfLink = skillItem.pdfLink
    ? `/pdf/certificados/${skillItem.pdfLink}`
    : ''
  const imageLink = skillItem.imageLink
    ? `/images/certificados/${skillItem.imageLink}`
    : ''

  return (
    <section
      className={cn(
        'relative flex flex-col overflow-x-hidden bg-nier-600 pb-3 shadow-lg',
        className,
      )}
    >
      <h1
        className={cn(
          'flex items-center gap-3 bg-nier-700 px-3 py-2 text-nier-600 group-hover:text-nier-600 md:text-xl',
          '',
        )}
      >
        <NierSquare className="h-[23px] w-[23px] cursor-default bg-nier-600" />
        <LoadingText>{organization}</LoadingText>
      </h1>
      <motion.a
        className={cn(
          'projectImage m-4 block aspect-video cursor-pointer bg-nier-700 bg-cover',
          bgImage,
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        href={pdfLink}
        target="_blank"
        rel="noreferrer"
      />
      <div className="mx-5 h-[1px] bg-nier-700 opacity-70" />
      <p className="mx-4 my-1 text-black [text-wrap:balance]">
        <LoadingText>{name}</LoadingText>
      </p>
      <div className="mx-4 h-[1px] bg-nier-700 opacity-70" />
      <div className="mx-4 mt-3 flex gap-4 text-black">
        {pdfLink && (
          <ProjectButton href={pdfLink}>
            <LoadingText>{`PDF`}</LoadingText>
          </ProjectButton>
        )}
        {imageLink && (
          <ProjectButton href={imageLink}>
            <LoadingText>{`Image`}</LoadingText>
          </ProjectButton>
        )}
      </div>
    </section>
  )
}
