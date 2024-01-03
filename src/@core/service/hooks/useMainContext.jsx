'use client'
import { useContext } from 'react'
import { Main } from '../context/main'

export const useMainContext = () => {
  const [data, setData] = useContext(Main)

  // updateContext
  const updateData = payload => {
    setData(payload)
  }

  return {
    data,
    updateData
  }
}
