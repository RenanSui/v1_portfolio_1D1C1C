import { RefObject, useEffect } from 'react'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const useTextHackerEffect = (TextRef: RefObject<HTMLHeadingElement>) => {
  useEffect(() => {
    const handleMouseOver = (e: Event) => {
      // console.log(e)
      let iterations = 0
      const maxIteration = TextRef.current?.dataset.hidden?.length || 10

      const interval = setInterval(() => {
        // if (TextRef.current) {
        if (TextRef.current?.dataset.hidden) {
          // TextRef.current.innerText = TextRef.current.innerText
          TextRef.current.innerText = TextRef.current?.dataset.hidden
            .split('')
            .map((letter, index) => {
              if (
                index < iterations &&
                TextRef.current &&
                TextRef.current.dataset.hidden
              ) {
                return TextRef.current.dataset.hidden[index]
              }

              return letters[Math.floor(Math.random() * 26)]
            })
            .join('')
        }

        if (iterations >= maxIteration) clearInterval(interval)

        iterations += 1
      }, 30)
    }

    const handleMouseLeave = (e: Event) => {
      let iterations = 0
      const maxIteration = TextRef.current?.dataset.value?.length || 10

      const interval = setInterval(() => {
        // if (TextRef.current) {
        if (TextRef.current?.dataset.value) {
          // TextRef.current.innerText = TextRef.current.innerText
          TextRef.current.innerText = TextRef.current?.dataset.value
            .split('')
            .map((letter, index) => {
              if (
                index < iterations &&
                TextRef.current &&
                TextRef.current.dataset.value
              ) {
                return TextRef.current.dataset.value[index]
              }

              return letters[Math.floor(Math.random() * 26)]
            })
            .join('')
        }

        if (iterations >= maxIteration) clearInterval(interval)

        iterations += 1
      }, 30)
    }

    // const TextCurrent = TextRef.current || document
    const TextParent =
      TextRef.current?.parentElement || TextRef.current || document

    TextParent.addEventListener('mouseover', handleMouseOver, true)
    TextParent.addEventListener('mouseleave', handleMouseLeave, true)
    return () => {
      TextParent.removeEventListener('mouseover', handleMouseOver, true)
      TextParent.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [TextRef])

  return {}
}

export { useTextHackerEffect }
