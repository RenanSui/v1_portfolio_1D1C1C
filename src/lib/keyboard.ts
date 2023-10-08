import { getElementIdValue, getRefAttribute } from './utils'

export const validateAndClick = (element: HTMLElement) => {
  if (!localStorage) return null

  const shells = '' as 'projectShell' | 'contactShell' | 'sectionShell'
  const mainMenu = '' as 'menu' | 'settings'

  const elementType = getRefAttribute(
    element,
    'data-elementtype',
    'about-me',
  ) as typeof shells | typeof mainMenu

  // shells
  if (elementType === 'projectShell') clickElement(element, 'projectId')
  if (elementType === 'contactShell') clickElement(element, 'contactId')
  if (elementType === 'sectionShell') clickElement(element, 'sectionId')

  // main menu
  if (elementType === 'menu') clickElement(element)
  if (elementType === 'settings') clickElement(element)
}

export const clickElement = (element: HTMLElement, storageKey = '') => {
  if (!localStorage) return null

  const elementId = getElementIdValue(element, 'data-element-id')
  const elementItem = element.children[elementId] as HTMLDivElement

  if (storageKey) localStorage.setItem(storageKey, elementItem.id)

  elementItem.click()
}
