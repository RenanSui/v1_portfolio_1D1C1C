import { OptionStates } from '@/types'
import { LucideIcon } from 'lucide-react'
import type { Image } from 'sanity'

export type SectionItem = {
  id: number
  section: string
  description: string
  sectionLink: OptionStates
  imagePreview: string
}

export type SkillItem = {
  id: number
  name: string
  organization: string
  pdfLink?: string
  imageLink: string
  bgImage: string
}

// export type ProjectItem = {
//   id: number
//   name: string
//   description: string
//   githubLink: string
//   liveDemoLink: string
//   imagePreview: string
// }

export type ProjectItem = {
  id: string
  title: string
  slug: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  titleImage: any
  description: string
  liveDemoLink: string
  githubLink: string
}

export type SocialItem = {
  id: number
  social: string
  contact: string
  contactLink: string
  icon: LucideIcon
}
