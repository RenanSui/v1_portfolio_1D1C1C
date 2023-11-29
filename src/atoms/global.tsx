import { MenuStates, OptionStates, ScreenStates } from '@/types'
import { atom } from 'jotai'

export const screenStateAtom = atom<ScreenStates>('boot-screen')

export const menuStateAtom = atom<MenuStates>('press-any')

export const optionStateAtom = atom<OptionStates>('')
