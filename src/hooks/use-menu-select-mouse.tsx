import { RefObject, useEffect } from 'react'

const useMenuSelectByMouse = (TextRef: RefObject<HTMLHeadingElement>) => {
  useEffect(() => {
    const TextRefParent = TextRef.current?.parentElement || document

    const handleMouseOver = (e: Event) => {
      console.log(TextRef.current?.parentElement?.children)

      if (TextRefParent) {
        for (let i = 0; i < TextRefParent.childElementCount; i++) {
          TextRefParent.children[i].setAttribute('data-active', 'false')

          // Add Id to all Children
          TextRefParent.children[i].setAttribute('id', `${i}`)
        }
      }

      if (TextRef.current) TextRef.current.setAttribute('data-active', 'true')
    }

    // const handleMouseLeave = (e: Event) => {
    //   console.log(e)
    //   if (TextRef.current) TextRef.current.setAttribute('data-active', 'false')
    // }

    const TextCurrent = TextRef.current || document

    TextCurrent.addEventListener('mouseover', handleMouseOver, true)
    // TextCurrent.addEventListener('mouseleave', handleMouseLeave, true)
    return () => {
      TextCurrent.removeEventListener('mouseover', handleMouseOver, true)
      // TextCurrent.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [TextRef])

  return {}
}

export { useMenuSelectByMouse }
