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

export const getRefAttribute = (
  ref: HTMLElement,
  attribute: string,
  initialValue: string,
) => {
  const dataNavAttr = ref?.getAttribute(attribute)
  if (!dataNavAttr) {
    setRefAttribute(ref, attribute, initialValue)
    const dataNavAttr = ref?.getAttribute(attribute)
    const MenuItem = dataNavAttr || initialValue
    return MenuItem
  }
  const MenuItem = dataNavAttr || initialValue
  return MenuItem
}

export const setRefAttribute = (
  ref: HTMLElement,
  attribute: string,
  value: any,
) => {
  ref?.setAttribute(attribute, String(value))
}
