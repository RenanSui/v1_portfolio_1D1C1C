import { SocialItems } from '@/db/socials'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSquare } from '../nier/nier-square'
import { ProjectButton } from '../projects/project-button'
import { Icons } from '../ui/icons'
import { RandomIcon } from '../ui/randomIcons'

interface ContactCardProps extends HTMLAttributes<HTMLDivElement> {
  socialItem: SocialItems
}

export const ContactCard = ({ socialItem, className }: ContactCardProps) => {
  const { contact, contactLink, social, icon } = socialItem

  return (
    <section
      className={cn(
        'relative flex flex-col overflow-x-hidden bg-nier-600 pb-3 shadow-lg',
        className,
      )}
    >
      <h1 className="flex items-center gap-3 bg-nier-700 px-3 py-2 text-nier-600 group-hover:text-nier-600 md:text-xl">
        <NierSquare className="h-[23px] w-[23px] cursor-default bg-nier-600" />
        <LoadingText>{social}</LoadingText>
      </h1>
      <motion.a
        className={cn(
          'projectImage relative m-4 block aspect-video overflow-hidden bg-nier-700',
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        href={contactLink}
        target="_blank"
        rel="noreferrer"
      >
        <Icons.x className="absolute left-1/2 top-1/2 h-[200%] w-[2500%] -translate-x-1/2 -translate-y-1/2 stroke-[0.1px]" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nier-200">
          <RandomIcon
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 stroke-1"
            as={icon}
          />
        </div>
      </motion.a>
      <div className="mx-5 h-[1px] bg-nier-700 opacity-70" />
      <p
        className="mx-4 my-2 flex cursor-pointer items-center gap-2"
        onClick={() => navigator.clipboard.writeText(contact)}
      >
        <Icons.copy className="h-6 w-6 opacity-50" />
        <LoadingText>{contact}</LoadingText>
      </p>
      <div className="mx-4 h-[1px] bg-nier-700 opacity-70" />
      <div className="mx-4 mt-3 flex gap-4">
        <ProjectButton href={contactLink}>
          <LoadingText>Contact Me</LoadingText>
        </ProjectButton>
      </div>
    </section>
  )
}
