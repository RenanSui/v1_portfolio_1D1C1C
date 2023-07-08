import { getRefAttribute, setRefAttribute } from '@/lib/utils'
import { RefObject, useEffect } from 'react'

const useMenuOptionsMouse = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const MenuActivator = () => {
      const MenuValue = Number(getRefAttribute(ref, 'data-menu', '0'))

      if (ref.current) {
        for (let i = 0; i < ref.current.childElementCount; i++) {
          ref.current?.children[i].setAttribute('data-active', 'false')
          ref.current?.children[MenuValue].setAttribute('data-active', 'true')
        }
      }
    }

    const onKeyUpOrDown = (e: KeyboardEvent) => {
      const MenuValue = Number(getRefAttribute(ref, 'data-menu', '0'))
      const MenuCurrent = ref.current
      const MenuRefLength = MenuCurrent ? MenuCurrent.childElementCount - 1 : 0

      if (e.key === 'ArrowUp' && MenuCurrent) {
        const newValue = MenuValue - 1 < 0 ? MenuRefLength : MenuValue - 1
        setRefAttribute(ref, 'data-menu', newValue)
      }
      if (e.key === 'ArrowDown' && MenuCurrent) {
        const newValue = MenuValue + 1 > MenuRefLength ? 0 : MenuValue + 1
        setRefAttribute(ref, 'data-menu', newValue)
      }

      MenuActivator()
    }

    window.addEventListener('keydown', onKeyUpOrDown, true)
    return () => window.removeEventListener('keydown', onKeyUpOrDown, true)
  }, [ref])
}

export { useMenuOptionsMouse }
