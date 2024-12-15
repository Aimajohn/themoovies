import React, { createContext, useContext, useState, ReactNode } from "react"

// Define el tipo de los datos del contexto
interface MyContextData {
  movieId: number
  setMovieId: React.Dispatch<React.SetStateAction<number>>
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

// Define el valor inicial del contexto
const MyContext = createContext<MyContextData | undefined>(undefined)

// Componente proveedor del contexto
interface MyContextProviderProps {
  children: ReactNode
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [movieId, setMovieId] = useState<number>(0)
  const [searchValue, setSearchValue] = useState("")

  return (
    <MyContext.Provider
      value={{ movieId, setMovieId, searchValue, setSearchValue }}
    >
      {children}
    </MyContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export const useMyContext = (): MyContextData => {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider")
  }
  return context
}
