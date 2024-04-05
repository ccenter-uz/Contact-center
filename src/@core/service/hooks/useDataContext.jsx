import { useContext } from 'react'
import { Context } from '../context'

export const useDataContext = () => {
  const [...rest] = useContext(Context)

  return [...rest]
}
