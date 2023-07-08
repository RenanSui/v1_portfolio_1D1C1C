import { clsx, type ClassValue } from 'clsx'
import { RefObject } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ArrayMaker = (quantity: number) => {
  const array = []
  for (let i = 0; i < quantity; i++) array.push(i)
  return array
}

export const getDataAttribute = (attribute: string, initialValue: string) => {
  const dataNavAttr = document.body.getAttribute(attribute)
  const MenuItem = dataNavAttr || initialValue
  // const MenuItem = dataNavAttr || '0'
  return MenuItem
}
export const getRefAttribute = (
  ref: RefObject<HTMLDivElement>,
  attribute: string,
  initialValue: string,
) => {
  const dataNavAttr = ref.current?.getAttribute(attribute)
  const MenuItem = dataNavAttr || initialValue
  // const MenuItem = dataNavAttr || '0'
  return MenuItem
}

export const setBodyAttribute = (attribute: string, value: any) => {
  document.body.setAttribute(attribute, String(value))
}

export const setRefAttribute = (
  ref: RefObject<HTMLDivElement>,
  attribute: string,
  value: any,
) => {
  ref.current?.setAttribute(attribute, String(value))
}
