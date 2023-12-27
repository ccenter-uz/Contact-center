import { api } from '@/@core/utils/api'
import { getLocale } from 'next-intl/server'

export const getData = async () => {
  const locale = await getLocale()
  const res = await api.get(`${locale}`)

  if (res.status !== 200) {
    throw new Error('Failed to fetch data')
  }

  return res.data
}
