import { RefObject, useEffect } from 'react'

const useMenuSelectByMouse = (MenuOptionRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const currentElement = MenuOptionRef.current
    const parentElement = MenuOptionRef.current?.parentElement

    const handleMouseOver = (e: Event) => {
      if (parentElement) {
        for (let i = 0; i < parentElement.childElementCount; i++) {
          parentElement.children[i]?.setAttribute('data-active', 'false')

          // Add Id to all Children
          parentElement.children[i]?.setAttribute('data-option-id', `${i}`)
        }
      }

      if (MenuOptionRef.current)
        MenuOptionRef.current.setAttribute('data-active', 'true')
    }

    const TextCurrent = currentElement || document

    TextCurrent.addEventListener('mouseover', handleMouseOver, true)
    // TextCurrent.addEventListener('mouseleave', handleMouseLeave, true)
    return () => {
      TextCurrent.removeEventListener('mouseover', handleMouseOver, true)
      // TextCurrent.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [MenuOptionRef])

  return {}
}

export { useMenuSelectByMouse }
