'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

// Definir um tipo genérico para o valor do estado
type UseLocalStorageBooleanResult = [boolean, Dispatch<SetStateAction<boolean>>]

// Hook personalizado para gerenciar um estado booleano com localStorage
const useLocalStorageBoolean = (
  key: string,
  initialValue: boolean,
): UseLocalStorageBooleanResult => {
  // Inicialize o estado com o valor do localStorage ou o valor inicial fornecido
  const [state, setState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const localStorageValue = localStorage.getItem(key)
      const localStorageValueChecker = localStorageValue
        ? JSON.parse(localStorageValue)
        : initialValue
      return localStorageValueChecker as boolean
    }
    return initialValue
  })

  // Atualize o localStorage sempre que o estado for alterado
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  return [state, setState]
}

export { useLocalStorageBoolean }
