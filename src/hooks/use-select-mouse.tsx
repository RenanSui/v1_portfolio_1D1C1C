import { getRefAttribute } from '@/lib/utils'
import { RefObject, useEffect } from 'react'

// Use in each individual item
export const useSelectMouse = (elementRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const HTMLElement = elementRef.current || document

    HTMLElement.addEventListener(
      'mouseover',
      () => handleMouseOver(elementRef),
      true,
    )

    return () => {
      HTMLElement.removeEventListener(
        'mouseover',
        () => handleMouseOver(elementRef),
        true,
      )
    }
  }, [elementRef])
}

const handleMouseOver = (elementRef: RefObject<HTMLElement>) => {
  const element = elementRef.current
  const parentElement = elementRef.current?.parentElement

  if (!(parentElement && element)) return null
  activateItem(element, parentElement)

  if (!localStorage) return null
  validateAndClick(element)
}

const activateItem = (element: HTMLElement, parentElement: HTMLElement) => {
  // iterate over all childs
  for (let i = 0; i < parentElement.childElementCount; i++) {
    // Set all Children data-active=false
    parentElement.children[i]?.setAttribute('data-active', 'false')
  }

  element.setAttribute('data-active', 'true')
}

const validateAndClick = (element: HTMLElement) => {
  const elementIdValue = getRefAttribute(
    element,
    'data-elementtype',
    'about-me',
  )

  if (elementIdValue === 'projectItem') elementClick(element, 'projectId')
  if (elementIdValue === 'contactItem') elementClick(element, 'contactId')
  if (elementIdValue === 'sectionItem') elementClick(element, 'sectionId')
}

const elementClick = (element: HTMLElement, storageKey: string) => {
  localStorage.setItem(storageKey, element.id)

  element.click()
}
