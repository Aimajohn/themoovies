import { useState } from "react"
import { MovieDetailedT } from "./TYPES_CREATED"
type StorageT =
  | {
      [id: number]: MovieDetailedT
    }
  | string

export const useLocalStorage = (key: string, value: StorageT) => {
  const [storage, setStorage] = useState(() => {
    try {
      const initialValue = window.localStorage.getItem(key)
      return initialValue ? JSON.parse(initialValue) : value
    } catch (error) {
      console.warn(error, "yo no deberia aparecer")
      return value
    }
  })

  const setLocalStorage = (valor: StorageT) => {
    try {
      setStorage(valor)
      window.localStorage.setItem(key, JSON.stringify(valor))
    } catch (error) {
      console.warn(error)
      return valor
    }
  }

  return [storage, setLocalStorage]
}
