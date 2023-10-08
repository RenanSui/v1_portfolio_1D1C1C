import { validateAndClick } from '@/lib/keyboard'
import {
  getChildrenLength,
  getElementIdValue,
  setRefAttribute,
} from '@/lib/utils'
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

const handleKeyboard = (
  e: KeyboardEvent,
  elementRef: RefObject<HTMLElement>,
) => {
  if (!elementRef.current) return null

  const element = elementRef.current

  if (e.key === 'Enter') handleEnter(element)
  if (e.key === 'ArrowUp') handleArrowUp(element)
  if (e.key === 'ArrowDown') handleArrowDown(element)

  activateItem(element)
}

const handleEnter = (element: HTMLElement) => validateAndClick(element)

const handleArrowUp = (element: HTMLElement) => {
  const attribute = 'data-element-id'
  const childrenLength = getChildrenLength(element)
  const dataIdValue = getElementIdValue(element, attribute) - 1 // sub

  // if less than 0 return Length
  const newDataValue = dataIdValue < 0 ? childrenLength : dataIdValue

  setRefAttribute(element, 'data-element-id', newDataValue)
  validateAndClick(element)
}

const handleArrowDown = (element: HTMLElement) => {
  const attribute = 'data-element-id'
  const childrenLength = getChildrenLength(element)
  const dataIdValue = getElementIdValue(element, attribute) + 1 // add

  // if greater than length return 0
  const newDataValue = dataIdValue > childrenLength ? 0 : dataIdValue

  setRefAttribute(element, 'data-element-id', newDataValue)
  validateAndClick(element)
}

const activateItem = (element: HTMLElement) => {
  const attribute = 'data-element-id'
  const elementIdValue = getElementIdValue(element, attribute)

  for (let i = 0; i < element.childElementCount; i++) {
    element.children[i]?.setAttribute('data-active', 'false')
  }

  element.children[elementIdValue]?.setAttribute('data-active', 'true')
}
