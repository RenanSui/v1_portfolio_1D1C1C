import { SectionItems } from '@/db/sections'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import { LoadingText } from '../loading/loading-text'
import { OptionStates } from '../main-menu'
import { NierSquare } from '../nier/nier-square'
import { ProjectButton } from '../projects/project-button'

interface SectionCardProps extends HTMLAttributes<HTMLDivElement> {
  sectionItem: SectionItems
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

export const SectionCard = ({
  sectionItem,
  setOptionState,
  className,
}: SectionCardProps) => {
  const { description, imagePreview, section, sectionLink } = sectionItem

  return (
    <section
      className={cn(
        'relative flex flex-col overflow-x-hidden bg-nier-600 pb-3 shadow-lg',
        className,
      )}
    >
      <h1 className="flex items-center gap-3 bg-nier-700 px-3 py-2 text-nier-600 group-hover:text-nier-600 md:text-xl">
        <NierSquare className="h-[23px] w-[23px] cursor-default bg-nier-600" />
        <LoadingText>{section}</LoadingText>
      </h1>
      <motion.a
        className={cn(
          'projectImage m-4 block aspect-video cursor-pointer bg-nier-700 bg-cover bg-center',
          imagePreview,
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        onClick={() => setOptionState(sectionLink)}
        target="_blank"
        rel="noreferrer"
      />
      <div className="mx-5 h-[1px] bg-nier-700 opacity-70" />
      <p className="mx-4 my-2 text-black">
        <LoadingText>{description}</LoadingText>
      </p>
      <div className="mx-4 h-[1px] bg-nier-700 opacity-70" />
      <div className="mx-4 mt-3 flex gap-4 text-black">
        <ProjectButton onClick={() => setOptionState(sectionLink)}>
          <LoadingText>{`Go to ${section}`}</LoadingText>
        </ProjectButton>
      </div>
    </section>
  )
}
