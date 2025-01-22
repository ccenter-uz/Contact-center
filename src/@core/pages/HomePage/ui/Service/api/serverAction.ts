'use server'

import { api } from '@/@core/apps/config/api'

// GET-LINKS
export async function GetLinks() {
  try {
    const res = await api('mainServiseCategory/all')

    return res.status == 200 && res.data
  } catch (err) {
    console.error(err, 'err')
  }
}

// GET-CONTENT
export async function GetContent(id: string) {
  try {
    const res = await api(`mainServiseCategory/one/${id}`)

    return res.status == 200 && res.data
  } catch (err) {
    console.error(err, 'err')
  }
}
