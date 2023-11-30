import { RefObject, useEffect } from 'react'

export const useSelectMouse = (
  elementRef: RefObject<HTMLElement>,
  storageKey = '',
  clickable = true,
) => {
  useEffect(() => {
    const HTMLElement = elementRef.current || document

    HTMLElement.addEventListener(
      'mouseover',
      () => handleMouseOver(elementRef, storageKey, clickable),
      true,
    )

    return () => {
      HTMLElement.removeEventListener(
        'mouseover',
        () => handleMouseOver(elementRef, storageKey, clickable),
        true,
      )
    }
  }, [elementRef, storageKey, clickable])
}

const handleMouseOver = (
  elementRef: RefObject<HTMLElement>,
  storageKey: string,
  clickable: boolean,
) => {
  const element = elementRef.current
  const parentElement = elementRef.current?.parentElement

  if (!(parentElement && element)) return null
  activateItem(element, parentElement)

  if (!clickable) return null
  if (!localStorage) return null
  elementClick(element, storageKey)
}

const activateItem = (element: HTMLElement, parentElement: HTMLElement) => {
  // iterate over all childs
  for (let i = 0; i < parentElement.childElementCount; i++) {
    // Set all Children data-active=false
    parentElement.children[i]?.setAttribute('data-active', 'false')
  }
  element.setAttribute('data-active', 'true')
}

const elementClick = (element: HTMLElement, storageKey: string) => {
  if (!storageKey) return null
  localStorage.setItem(storageKey, element.id)
  element.click()
}
