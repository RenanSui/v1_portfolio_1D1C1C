import { RefObject, useEffect } from 'react'

// Use in each individual item
export const useSelectMouse = (MenuOptionRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const currentElement = MenuOptionRef.current
    const parentElement = MenuOptionRef.current?.parentElement

    const handleMouseOver = (e: Event) => {
      if (parentElement) {
        // iterate over all childs
        for (let i = 0; i < parentElement.childElementCount; i++) {
          // Set all Children data-active=false
          parentElement.children[i]?.setAttribute('data-active', 'false')

          // Add Id to all Children
          parentElement.children[i]?.setAttribute('data-option-id', `${i}`)
        }
      }

      if (currentElement) currentElement.setAttribute('data-active', 'true')
    }

    const HTMLElement = currentElement || document

    HTMLElement.addEventListener('mouseover', handleMouseOver, true)
    // HTMLElement.addEventListener('mouseleave', handleMouseLeave, true)
    return () => {
      HTMLElement.removeEventListener('mouseover', handleMouseOver, true)
      // HTMLElement.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [MenuOptionRef])

  return {}
}
