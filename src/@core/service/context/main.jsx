'use client'
import { useState } from 'react'
import { createContext } from 'react'

export const Main = createContext()

const MainContext = ({ children }) => {
  const [data, setData] = useState(null)

  return <Main.Provider value={[data, setData]}>{children}</Main.Provider>
}

export { MainContext }
