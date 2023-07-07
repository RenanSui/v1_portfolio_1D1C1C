import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ArrayMaker = (quantity: number) => {
  const array = []
  for (let i = 0; i < quantity; i++) array.push(i)
  return array
}
