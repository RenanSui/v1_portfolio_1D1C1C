import { Dispatch, SetStateAction, useEffect, useState } from 'react'

// Defina um tipo genérico para o valor do estado
type UseLocalStorageResult<T> = [T, Dispatch<SetStateAction<T>>]

// Hook personalizado para gerenciar um estado com localStorage para qualquer tipo de dado
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): UseLocalStorageResult<T> {
  // Inicialize o estado com o valor do localStorage ou o valor inicial fornecido
  const [state, setState] = useState<T>(() => {
    const localStorageValue = localStorage.getItem(key)
    const localStorageValueChecker = localStorageValue
      ? JSON.parse(localStorageValue)
      : initialValue
    return localStorageValueChecker as T
  })

  // Atualize o localStorage sempre que o estado for alterado
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
