import { api } from '@/@core/utils/api'

//SEND-DATA
export async function sendData(value: { name: string; organization_name: string; number: string; comment: number }) {
  try {
    const data = JSON.parse(sessionStorage.getItem('application') as string)
    const type_of_service = JSON.parse(sessionStorage.getItem('serviceType') as string)
    const tarif = JSON.parse(sessionStorage.getItem('selectedTarif') as string)
    let body
    if (new URLSearchParams(document.location.search).has('tarif')) {
      body = {
        ...value,
        type_of_service,
        text: {
          type: 'card',
          tarif
        }
      }
    } else {
      body = {
        ...value,
        type_of_service,
        text: {
          type: 'banner',
          ...data
        }
      }
    }
    const res = await api.post(`Application/create`, body)

    return res
  } catch (e) {
    console.error(e, 'err')
  }
}
