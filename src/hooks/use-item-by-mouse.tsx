import { useEffect } from 'react'
import { useLocalStorage } from './use-local-storage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useItemByMouse<Items>(storageKey: string, items: any) {
  const [id, setId] = useLocalStorage(storageKey, '0')
  const item = items[Number(id)] as Items

  const changeItem = () => setId(localStorage.getItem(storageKey) || '0')

  useEffect(() => {
    setTimeout(() => null)
  }, [id])

  return { item, changeItem }
}
