import { getRefAttribute } from './utils'

export const validateAndClick = (element: HTMLElement) => {
  if (!localStorage) return null

  const shells = '' as 'projectShell' | 'contactShell' | 'sectionShell'
  const mainMenu = '' as 'menu' | 'settings'

  const elementIdValue = getRefAttribute(
    element,
    'data-elementtype',
    'about-me',
  ) as typeof shells | typeof mainMenu

  // shells
  if (elementIdValue === 'projectShell') clickElement(element, 'projectId')
  if (elementIdValue === 'contactShell') clickElement(element, 'contactId')
  if (elementIdValue === 'sectionShell') clickElement(element, 'sectionId')

  // main menu
  if (elementIdValue === 'menu') clickElement(element)
  if (elementIdValue === 'settings') clickElement(element)
}

export const clickElement = (element: HTMLElement, storageKey = '') => {
  if (!localStorage) return null

  const elementDataIdValue = Number(
    getRefAttribute(element, 'data-element-id', '0'),
  )

  const elementItem = element.children[elementDataIdValue] as HTMLDivElement

  if (storageKey) localStorage.setItem(storageKey, elementItem.id)

  elementItem.click()
}
