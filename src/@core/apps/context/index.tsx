'use client'
import { FC, ReactNode, createContext, useState } from 'react'

type Props = {
  children: ReactNode
}

export const Context = createContext({})

const ContextWrapper: FC<Props> = props => {
  const { children } = props
  const [tabData, setTabData] = useState<any>([])

  return <Context.Provider value={[tabData, setTabData]}>{children}</Context.Provider>
}

export default ContextWrapper
