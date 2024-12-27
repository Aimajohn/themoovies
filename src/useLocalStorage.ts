import { useState } from "react"

export const useLocalStorage = (key: string, value: any) => {
  const [storage, setStorage] = useState(() => {
    try {
      const initialValue = window.localStorage.getItem(key)
      return initialValue ? JSON.parse(initialValue) : JSON.parse(value)
    } catch (error) {
      return value
    }
  })

  const setLocalStorage = (valor: any) => {
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
