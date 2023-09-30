import { useEffect } from 'react'

export const useBackToMenu = (backToMenu: () => void) => {
  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') backToMenu()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [backToMenu])
}
