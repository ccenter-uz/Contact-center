'use server'
import { api } from '@/@core/apps/config/api'

export const userFormSend = async (value: { full_name: string; phone: string }) => {
  try {
    const res = await api.post('example', value)

    return res.data
  } catch (err) {
    console.error(err, 'err')
  }
}
