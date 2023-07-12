import { getRefAttribute, setRefAttribute } from '@/lib/utils'
import { RefObject, useEffect } from 'react'

const useMenuSelectByKeyboard = (MenuRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const handleActivateMenuOption = () => {
      if (MenuRef.current) {
        const currentElement = MenuRef.current
        const menuDataId = Number(
          getRefAttribute(currentElement, 'data-menu-id', '0'),
        )

        for (let i = 0; i < currentElement.childElementCount; i++) {
          currentElement.children[i]?.setAttribute('data-active', 'false')
        }

        currentElement?.children[menuDataId]?.setAttribute(
          'data-active',
          'true',
        )
      }
    }

    const handleElementClickEvent = () => {
      if (MenuRef.current) {
        const menuDataId = Number(
          getRefAttribute(MenuRef.current, 'data-menu-id', '0'),
        )
        const MenuOption = MenuRef.current.children[
          menuDataId
        ] as HTMLDivElement
        if (MenuOption) MenuOption.click()
      }
    }

    const handleArrowUp = () => {
      if (MenuRef.current) {
        const currentElement = MenuRef.current

        const menuChildrenLength = currentElement
          ? currentElement.childElementCount - 1
          : 0
        const menuDataId =
          Number(getRefAttribute(currentElement, 'data-menu-id', '0')) - 1
        const menuNewDataValue =
          menuDataId < 0 ? menuChildrenLength : menuDataId

        setRefAttribute(currentElement, 'data-menu-id', menuNewDataValue)
      }
    }

    const handleArrowDown = () => {
      if (MenuRef.current) {
        const currentElement = MenuRef.current

        const menuChildrenLength = currentElement
          ? currentElement.childElementCount - 1
          : 0
        const menuDataId =
          Number(getRefAttribute(currentElement, 'data-menu-id', '0')) + 1
        const menuNewDataValue =
          menuDataId > menuChildrenLength ? 0 : menuDataId

        setRefAttribute(currentElement, 'data-menu-id', menuNewDataValue)
      }
    }

    const handleKeyboard = (e: KeyboardEvent) => {
      if (MenuRef.current) {
        if (e.key === 'Enter' || e.key === 'e' || e.key === 'f') {
          handleElementClickEvent()
        }

        if (e.key === 'ArrowUp') handleArrowUp()
        if (e.key === 'ArrowDown') handleArrowDown()
      }
      handleActivateMenuOption()
    }

    document.addEventListener('keydown', handleKeyboard)
    return () => document.removeEventListener('keydown', handleKeyboard)
  }, [MenuRef])
}

export { useMenuSelectByKeyboard }
