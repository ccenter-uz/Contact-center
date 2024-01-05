import { IGlobalDataType } from '@/@core/utils/type'

export const getData = async (locale: unknown) => {
  try {
    const res = await fetch(`https://apilanding.ccenter.uz/api/v1/getAllpageData/${locale}`)
    const data: IGlobalDataType = await res.json()

    return data
  } catch (err) {
    console.log(err, 'err')
  }
}
