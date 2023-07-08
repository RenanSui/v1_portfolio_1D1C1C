import { useEffect, useState } from 'react'

const useShowPressAny = () => {
  const [showPressAny, setShowPressAny] = useState(true)

  const HandlePressAny = () => setShowPressAny(false)

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (showPressAny) HandlePressAny()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [showPressAny])
  return { showPressAny, setShowPressAny, HandlePressAny }
}

export { useShowPressAny }
