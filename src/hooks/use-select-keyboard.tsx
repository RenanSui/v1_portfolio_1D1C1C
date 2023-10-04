import { getRefAttribute, setRefAttribute } from '@/lib/utils'
import { RefObject, useEffect } from 'react'

export const useSelectKeyboard = (elementRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => handleKeyboard(e, elementRef))
    return () =>
      document.removeEventListener('keydown', (e) =>
        handleKeyboard(e, elementRef),
      )
  }, [elementRef])
}

const handleActivateOption = (elementRef: RefObject<HTMLElement>) => {
  if (!elementRef.current) return null

  const currentElement = elementRef.current
  const elementDataIdValue = Number(
    getRefAttribute(currentElement, 'data-element-id', '0'),
  )

  for (let i = 0; i < currentElement.childElementCount; i++) {
    currentElement.children[i]?.setAttribute('data-active', 'false')
  }

  currentElement?.children[elementDataIdValue]?.setAttribute(
    'data-active',
    'true',
  )
}

const handleElementClickEvent = (elementRef: RefObject<HTMLElement>) => {
  if (!elementRef.current) return null

  const elementDataIdValue = getRefAttribute(
    elementRef.current,
    'data-elementtype',
    'about-me',
  )

  if (elementDataIdValue === 'menu') {
    const menuDataIdValue = Number(
      getRefAttribute(elementRef.current, 'data-element-id', '0'),
    )

    const MenuOption = elementRef.current.children[
      menuDataIdValue
    ] as HTMLDivElement

    MenuOption.click()
  }

  if (elementDataIdValue === 'settings') {
    const settingDataIdValue = Number(
      getRefAttribute(elementRef.current, 'data-element-id', '0'),
    )

    const settingOption = elementRef.current.children[
      settingDataIdValue
    ] as HTMLDivElement

    settingOption.click()
  }
}

const handleChangeItem = (elementRef: RefObject<HTMLElement>) => {
  if (!(elementRef.current && localStorage)) return null

  const elementDataIdValue = getRefAttribute(
    elementRef.current,
    'data-elementtype',
    'about-me',
  ) as 'projectShell' | 'contactShell' | 'sectionShell'

  if (elementDataIdValue === 'projectShell') {
    const projectDataIdValue = Number(
      getRefAttribute(elementRef.current, 'data-element-id', '0'),
    )

    const projectItem = elementRef.current.children[
      projectDataIdValue
    ] as HTMLDivElement

    localStorage.setItem('projectId', projectItem.id)

    projectItem.click()
  }

  if (elementDataIdValue === 'contactShell') {
    const contactDataIdValue = Number(
      getRefAttribute(elementRef.current, 'data-element-id', '0'),
    )

    const contactItem = elementRef.current.children[
      contactDataIdValue
    ] as HTMLDivElement

    localStorage.setItem('contactId', contactItem.id)

    contactItem.click()
  }

  if (elementDataIdValue === 'sectionShell') {
    const sectionDataIdValue = Number(
      getRefAttribute(elementRef.current, 'data-element-id', '0'),
    )

    const sectionItem = elementRef.current.children[
      sectionDataIdValue
    ] as HTMLDivElement

    localStorage.setItem('sectionId', sectionItem.id)

    sectionItem.click()
  }
}

const handleArrowUp = (elementRef: RefObject<HTMLElement>) => {
  if (!elementRef.current) return null

  const element = elementRef.current

  const childrenLength = element ? element.childElementCount - 1 : 0

  const dataIdValue =
    Number(getRefAttribute(element, 'data-element-id', '0')) - 1

  // if less than 0 return Length
  const newDataValue = dataIdValue < 0 ? childrenLength : dataIdValue

  setRefAttribute(element, 'data-element-id', newDataValue)

  handleChangeItem(elementRef)
}

const handleArrowDown = (elementRef: RefObject<HTMLElement>) => {
  if (!elementRef.current) return null

  const element = elementRef.current

  const childrenLength = element ? element.childElementCount - 1 : 0

  const dataIdValue =
    Number(getRefAttribute(element, 'data-element-id', '0')) + 1

  // if greater than length return 0
  const newDataValue = dataIdValue > childrenLength ? 0 : dataIdValue

  setRefAttribute(element, 'data-element-id', newDataValue)

  handleChangeItem(elementRef)
}

const handleKeyboard = (
  e: KeyboardEvent,
  elementRef: RefObject<HTMLElement>,
) => {
  if (e.key === 'Enter' || e.key === 'e' || e.key === 'f') {
    handleElementClickEvent(elementRef)
  }

  if (e.key === 'ArrowUp') handleArrowUp(elementRef)
  if (e.key === 'ArrowDown') handleArrowDown(elementRef)

  handleActivateOption(elementRef)
}
