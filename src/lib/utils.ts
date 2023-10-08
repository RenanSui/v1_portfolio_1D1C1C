import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const arrayMaker = (quantity: number) => {
  const array = []
  for (let i = 0; i < quantity; i++) array.push(i)
  return array
}

export const CapitalizeWords = (word: string) => {
  const wordSplitted = word.trim().split(' ')
  const joinWords = wordSplitted
    .map((word) => {
      return word[0]?.toLocaleUpperCase().concat(word.substring(1))
    })
    .join(' ')

  return joinWords
}

export const getRefAttribute = (
  ref: HTMLElement,
  attribute: string,
  initialValue: string,
) => {
  const elementAttributeValue = ref?.getAttribute(attribute)

  if (!elementAttributeValue) {
    setRefAttribute(ref, attribute, initialValue)

    const elAttributeValue = ref?.getAttribute(attribute)
    const Value = elAttributeValue || initialValue

    return Value
  }

  const Value = elementAttributeValue || initialValue
  return Value
}

export const setRefAttribute = (
  ref: HTMLElement,
  attribute: string,
  value: unknown,
) => {
  ref?.setAttribute(attribute, String(value))
}

export const getCurrentDimension = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export const getChildrenLength = (element: HTMLElement) => {
  return element ? element.childElementCount - 1 : 0
}

export const getElementIdValue = (element: HTMLElement, attribute: string) => {
  return Number(getRefAttribute(element, attribute, '0'))
}
