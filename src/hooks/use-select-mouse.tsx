import { RefObject, useEffect } from 'react'

// Use in each individual item
export const useSelectMouse = (elementRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const currentElement = elementRef.current
    const parentElement = elementRef.current?.parentElement

    const handleMouseOver = (e: Event) => {
      if (!(parentElement && currentElement)) return null

      // iterate over all childs
      for (let i = 0; i < parentElement.childElementCount; i++) {
        // Set all Children data-active=false
        parentElement.children[i]?.setAttribute('data-active', 'false')

        // Add Id to all Children
        // parentElement.children[i]?.setAttribute('data-option-id', `${i}`)
      }

      currentElement.setAttribute('data-active', 'true')
    }

    const HTMLElement = currentElement || document

    HTMLElement.addEventListener('mouseover', handleMouseOver, true)
    return () => {
      HTMLElement.removeEventListener('mouseover', handleMouseOver, true)
    }
  }, [elementRef])

  return {}
}
