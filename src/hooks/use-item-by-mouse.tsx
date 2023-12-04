import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useItemByMouse<Item>(items: any) {
  const [id, setId] = useState(0)

  const item = items[id] as Item

  const changeItem = (id: number) => setId(id)

  return { item, changeItem }
}
