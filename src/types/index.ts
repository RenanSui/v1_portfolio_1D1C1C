import { LucideIcon } from 'lucide-react'

export type MenuStates = '' | 'press-any' | 'menu'

export type ScreenStates =
  | 'boot-screen'
  | 'loading-screen'
  | 'menu-screen'
  | 'devices'

export type OptionStates =
  | ''
  | 'about-me'
  | 'projects'
  | 'settings'
  | 'contact'
  | 'exit-game'

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
  name: string
  description: string
  githubLink: string
  liveDemoLink: string
  imagePreview: string
}

export type SocialItem = {
  id: number
  social: string
  contact: string
  contactLink: string
  icon: LucideIcon
}
