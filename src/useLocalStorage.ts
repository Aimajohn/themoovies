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
      const storedValue = window.localStorage.getItem(key)
      if (storedValue) {
        return JSON.parse(storedValue)
      } else {
        window.localStorage.setItem(key, JSON.stringify(value))
        return value
      }
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
