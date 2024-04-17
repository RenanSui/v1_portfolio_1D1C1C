import { OptionStates } from '@/types'
import { LucideIcon } from 'lucide-react'

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

export type ProjectItem = {
  id: number
  title: string
  titleImage: string
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
