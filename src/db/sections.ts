import { SectionItems } from '@/types'

export const sectionItems: SectionItems[] = [
  {
    id: 0,
    section: 'Projects',
    description: 'Preview a project',
    sectionLink: 'projects',
    imagePreview: 'bg-[url(/images/projects-min.png)]',
  },
  {
    id: 1,
    section: 'Settings',
    description: 'Adjust website settings',
    sectionLink: 'settings',
    imagePreview: 'bg-[url(/images/settings-min.png)]',
  },
  {
    id: 2,
    section: 'Contact',
    description: 'Send me a message',
    sectionLink: 'contact',
    imagePreview: 'bg-[url(/images/contact-min.png)]',
  },
  {
    id: 3,
    section: 'Exit Game',
    description: 'Back to desktop',
    sectionLink: 'exit-game',
    imagePreview: 'bg-[url(/images/exitgame-min.png)]',
  },
]
