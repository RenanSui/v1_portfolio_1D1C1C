'use client'

import { Provider, createStore } from 'jotai'
import { ReactNode } from 'react'

const store = createStore()

export const JotaiProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
)
