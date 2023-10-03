import { RefObject, useEffect } from 'react'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const useTextHackerEffect = (MenuOptionRef: RefObject<HTMLHeadingElement>) => {
  const currentElement = MenuOptionRef.current
  const textContainer = currentElement?.children[0] as HTMLHeadingElement

  useEffect(() => {
    const handleMouseOver = () => {
      let iterations = 0
      const maxIteration = textContainer.dataset.hidden?.length || 10

      const interval = setInterval(() => {
        if (textContainer.dataset.hidden) {
          textContainer.innerText = textContainer.dataset.hidden
            .split('')
            .map((letter, index) => {
              if (
                index < iterations &&
                textContainer &&
                textContainer.dataset.hidden
              ) {
                return textContainer.dataset.hidden[index]
              }

              return letters[Math.floor(Math.random() * 26)]
            })
            .join('')
        }

        if (iterations >= maxIteration) clearInterval(interval)

        iterations += 1
      }, 30)
    }

    const handleMouseLeave = () => {
      let iterations = 0
      const maxIteration = textContainer.dataset.value?.length || 10

      const interval = setInterval(() => {
        if (textContainer.dataset.value) {
          textContainer.innerText = textContainer.dataset.value
            .split('')
            .map((letter, index) => {
              if (
                index < iterations &&
                textContainer &&
                textContainer.dataset.value
              ) {
                return textContainer.dataset.value[index]
              }

              return letters[Math.floor(Math.random() * 26)]
            })
            .join('')
        }

        if (iterations >= maxIteration) clearInterval(interval)

        iterations += 1
      }, 30)
    }

    currentElement?.addEventListener('mouseover', handleMouseOver, true)
    currentElement?.addEventListener('mouseleave', handleMouseLeave, true)
    return () => {
      currentElement?.removeEventListener('mouseover', handleMouseOver, true)
      currentElement?.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [currentElement, textContainer])

  return {}
}

export { useTextHackerEffect }
