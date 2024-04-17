import { useContext } from 'react'
import { Context } from '../context'

export const useDataContext = () => {
  const [tabData, setTabData] = useContext(Context)

  return { tabData, setTabData }
}
