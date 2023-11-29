export type ScreenStates =
  | 'boot-screen'
  | 'loading-screen'
  | 'menu-screen'
  | 'devices'

export type MenuStates = '' | 'press-any' | 'menu'

export type OptionStates =
  | ''
  | 'about-me'
  | 'projects'
  | 'settings'
  | 'contact'
  | 'exit-game'

export type SectionItems = {
  id: number
  section: string
  description: string
  sectionLink: OptionStates
  imagePreview: string
}
