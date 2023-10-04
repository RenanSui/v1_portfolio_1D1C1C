import { getRefAttribute } from '@/lib/utils'
import { RefObject, useEffect } from 'react'

// Use in each individual item
export const useSelectMouse = (elementRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const currentElement = elementRef.current
    const parentElement = elementRef.current?.parentElement

    const handleMouseOver = () => {
      if (!(parentElement && currentElement)) return null

      // iterate over all childs
      for (let i = 0; i < parentElement.childElementCount; i++) {
        // Set all Children data-active=false
        parentElement.children[i]?.setAttribute('data-active', 'false')

        // Add Id to all Children
        // parentElement.children[i]?.setAttribute('data-option-id', `${i}`)
      }

      currentElement.setAttribute('data-active', 'true')

      // PROJECT STUFF
      const elementDataIdValue = getRefAttribute(
        elementRef.current,
        'data-elementtype',
        'about-me',
      )

      if (elementDataIdValue === 'projectItem' && localStorage) {
        localStorage.setItem('projectId', currentElement.id)

        currentElement.click()
      }

      if (elementDataIdValue === 'contactItem' && localStorage) {
        localStorage.setItem('contactId', currentElement.id)

        currentElement.click()
      }

      if (elementDataIdValue === 'sectionItem' && localStorage) {
        localStorage.setItem('sectionId', currentElement.id)

        currentElement.click()
      }
    }

    const HTMLElement = currentElement || document

    HTMLElement.addEventListener('mouseover', handleMouseOver, true)
    return () => {
      HTMLElement.removeEventListener('mouseover', handleMouseOver, true)
    }
  }, [elementRef])

  return { elementId: elementRef.current?.id || String(0) }
}
